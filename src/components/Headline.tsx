import React from 'react';
import { Color } from '../colors';


function Headline({ text }: { text: string }) {
  return (
    <h1 style={{
      color: Color.WhiteOff,
      fontSize: 42, 
      fontFamily: 'GTAmericaCompressedBold',
    }}>{text}</h1>
  )
}

export default Headline;
