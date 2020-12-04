import React from 'react';
import { Color } from '../colors';
import CheerFeed from '../components/CheerFeed';

const MainScreen = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: Color.Charcoal }}>
      <div style={{ flex: 2, display: 'flex'}}>
        
      </div>
      <div style={{ flex: 1, display: 'flex'}}>
        <CheerFeed />
      </div>
    </div>
  )
}

export default MainScreen;