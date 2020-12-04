import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';
import { Color } from '../colors';
import CheerFeed from '../components/CheerFeed';
import PieChart from '../components/PieChart';

const MainScreen = () => {

  useFirebaseConnect([
    'cheers'
  ]);

  const cheers = useSelector((state: any) => state.firebase.ordered.cheers);

  console.log('cheers -> ', cheers);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: Color.Charcoal }}>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PieChart
          width={600} height={600}
          data={[10, 20, 70]}
        />
      </div>
      <div style={{ flex: 1, textAlign: 'center'}}>
        <CheerFeed cheers={cheers} />
      </div>
    </div>
  )
}

export default MainScreen;