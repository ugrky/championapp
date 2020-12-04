import React, { FunctionComponent } from 'react';

export enum FlexDirection {
  ROW = "row",
  COLUMN = 'column'
}

interface IProps {
  direction: FlexDirection;
}

const FlexContainer: FunctionComponent<IProps> = ({ children, direction }) => {
  return (
    <div style={{ display: 'flex', flexDirection: direction }}>
      {children}
    </div>
  )
}

export default FlexContainer;