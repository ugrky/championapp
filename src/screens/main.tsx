import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';
import { Color } from '../colors';
import CheerFeed from '../components/CheerFeed';
import ValueWheelContainer from '../containers/ValueWheel';

const MainScreen = () => {

  useFirebaseConnect(['cheers']);

  const cheers = useSelector((state: any) => state.firebase.ordered.cheers);

  const [cheerIndex, setCheerIndex] = useState(0);

  if(!cheers) {
    return null;
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: Color.Charcoal }}>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ValueWheelContainer />
      </div>
      <div style={{ flex: 1, textAlign: 'center'}}>
        <CheerFeed cheer={cheers[cheerIndex].value} />
        <p style={{ color: Color.WhiteOff }}>{cheerIndex + 1} / {cheers.length}</p>
      </div>
      <button onClick={() => {
        if(cheerIndex >= cheers.length - 1) {
          return;
        }
        setCheerIndex(cheerIndex + 1)
      }} style={{
        position: 'fixed',
        right: 20,
        top: '50%',
        bottom: '50%',
        color: Color.WhiteOff
      }}>
        Next
      </button>
      <button onClick={() => {
        if(cheerIndex === 0) {
          return;
        }
        setCheerIndex(cheerIndex - 1);
      }} style={{
        position: 'fixed',
        left: 20,
        top: '50%',
        bottom: '50%',
        color: Color.WhiteOff
      }}>
        Prev
      </button>
    </div>
  )
}

export default MainScreen;