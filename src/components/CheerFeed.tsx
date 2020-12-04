import React from 'react';
import { Color } from '../colors';
import { motion } from 'framer-motion';

type Cheer = { cheerContent: string, cheerType: string, optionalName: string, receiver: string };

interface IProps {
  cheer: Cheer;
}

const CheerFeed = ({ cheer }: IProps) => {
  if(!cheer) {
    return null;
  }

  return (
    <motion.div
      key={`cheer-${cheer.cheerContent}`}
      initial={{ scale: 2, rotate: 180 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <p
        style={{
          color: Color.WhiteOff, fontSize: 24, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
        }}
      >For {cheer?.receiver} </p>
      <p style={{
        color: Color.WhiteOff, fontSize: 42, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
      }}>
        "{cheer?.cheerContent}"
      </p>
      <p
        style={{
          color: Color.WhiteOff, fontSize: 24, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
        }}
      >{cheer?.cheerType}</p>
    </motion.div>
  )
}

export default CheerFeed;