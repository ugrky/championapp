import React, { useState } from 'react';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { scaleOrdinal } from '@visx/scale';
import { Group } from '@visx/group';
import { GradientPinkBlue } from '@visx/gradient';
import { animated, useTransition, interpolate } from 'react-spring';
import * as CSS from 'csstype';



// accessor functions
const usage = (d: any) => d.usage;

// color scales


const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
  data: [number, number, number];
};

export default function PieChart({
  width,
  height,
  margin = defaultMargin,
  animate = true,
  data,
}: PieProps) {
  const [selectedCheerType, setSelectedBrowser] = useState<string | null>(null);

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 100;

  const cheerTypes: Record<string, number> = {
    'Always Aspire': data[0],
    'Champion Community': data[1],
    'Be Brave': data[2],
  };
  
  const cheerKeys = Object.keys(cheerTypes);
  
  const cheers = cheerKeys.map((name) => ({
    label: name,
    usage: cheerTypes[name],
  }));

  const getCheerChartArcColor = scaleOrdinal({
    domain: cheerKeys,
    range: [
      'rgba(0,0,0,1)',
      'rgba(255,255,255,1)',
      'rgba(250,70,22,1)',
    ],
  });

  const getCheerChartArcBlendMode = scaleOrdinal<string, CSS.Property.MixBlendMode>({
    domain: cheerKeys,
    range: [
      'normal',
      'difference',
      'normal'
    ],
  });

  return (
    <svg width={width + 400} height={height + 100}>
      <GradientPinkBlue id="visx-pie-gradient" />
      {/* <rect rx={14} width={width} height={height} fill="url('#visx-pie-gradient')" /> */}
      <Group top={centerY + margin.top} left={centerX + margin.left + 200}>
        <Pie
          data={
            selectedCheerType ? cheers.filter(({ label }) => label === selectedCheerType) : cheers
          }
          pieValue={usage}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {pie => (
            <AnimatedPie<any>
              {...pie}
              animate={animate}
              getKey={arc => arc.data.label}
              onClickDatum={({ data: { label } }) =>
                animate &&
                setSelectedBrowser(selectedCheerType && selectedCheerType === label ? null : label)
              }
              getColor={arc => getCheerChartArcColor(arc.data.label)}
              getLabelBlendMode={arc => getCheerChartArcBlendMode(arc.data.label)}
            />
          )}
        </Pie>

      </Group>
    </svg>
  );
}

// react-spring transition definitions
type AnimatedStyles = { startAngle: number; endAngle: number; opacity: number };

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  getLabelBlendMode: (d: PieArcDatum<Datum>) => CSS.Property.MixBlendMode;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  getLabelBlendMode,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(
    arcs,
    getKey,
    // @ts-ignore react-spring doesn't like this overload
    {
      from: animate ? fromLeaveTransition : enterUpdateTransition,
      enter: enterUpdateTransition,
      update: enterUpdateTransition,
      leave: animate ? fromLeaveTransition : enterUpdateTransition,
    },
  );
  return (
    <>
      {transitions.map(
        ({
          item: arc,
          props,
          key,
        }: {
          item: PieArcDatum<Datum>;
          props: AnimatedStyles;
          key: string;
        }) => {
          const [centroidX, centroidY] = path.centroid(arc);
          const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

          return (
            <g key={key}>
              <animated.path
                // compute interpolated path d attribute from intermediate angle values
                d={interpolate([props.startAngle, props.endAngle], (startAngle, endAngle) =>
                  path({
                    ...arc,
                    startAngle,
                    endAngle,
                  }),
                )}
                fill={getColor(arc)}
                // onClick={() => onClickDatum(arc)}
                // onTouchStart={() => onClickDatum(arc)}
              />
              {true && (
                <animated.g style={{ opacity: props.opacity }}>
                  <text
                    fill="white"
                    x={centroidX * 1.1}
                    y={centroidY * 1.1}
                    dy=".33em"
                    fontSize={24}
                    fontFamily="GTAmericaExtendedBold"
                    textAnchor="middle"
                    pointerEvents="none"
                    style={{
                      mixBlendMode: getLabelBlendMode(arc),
                    }}
                  >
                    {getKey(arc)}
                  </text>
                </animated.g>
              )}
            </g>
          );
        },
      )}
    </>
  );
}