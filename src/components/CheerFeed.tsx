import React from 'react';
import { Color } from '../colors';

const CheerFeed = ({ cheers }: { cheers: [{ value: { cheerContent: string, cheerType: string, optionalName: string, receiver: string } }] }) => {
  if(!cheers) {
    return null;
  }  

  return (
    <>
      <p
        style={{
          color: Color.WhiteOff, fontSize: 24, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
        }}
      >For {cheers[0]?.value?.receiver} </p>
      <p style={{
        color: Color.WhiteOff, fontSize: 42, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
      }}>
        "{cheers[0]?.value?.cheerContent}"
      </p>
      <p
        style={{
          color: Color.WhiteOff, fontSize: 24, fontFamily: 'GTAmericaCompressedBold', fontStyle: 'italic'
        }}
      >{cheers[0]?.value?.cheerType}</p>
    </>
  )
}

export default CheerFeed;