import React from 'react';
import { Color } from '../colors';

const CheerFeed = () => {
  return (
    <p style={{
      flex: 1, display: 'flex', justifyContent: 'center',
      alignItems: 'center', color: Color.WhiteOff,
      fontSize: 42, fontFamily: 'GTAmericaCompressedBold',
      fontStyle: 'italic'
    }}>
      Hello World
    </p>
  )
}

export default CheerFeed;