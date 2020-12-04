import React from 'react';
import { Color } from '../colors';
import CheerFeed from '../components/CheerFeed';
import PieChart from '../components/PieChart';

const MainScreen = () => {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: Color.Charcoal }}>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PieChart
          width={600} height={600}
          data={[10, 20, 70]}
        />
      </div>
      <div style={{ flex: 1, display: 'flex'}}>
        <CheerFeed />
      </div>
    </div>
  )
}

export default MainScreen;