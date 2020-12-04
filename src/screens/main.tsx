import React from 'react';
import { Color } from '../colors';
import CheerFeed from '../components/CheerFeed';
import PageLayout from '../components/PageLayout';
import ValueWheelContainer from '../containers/ValueWheel';

const MainScreen = () => {
  return (
    <PageLayout>
      <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ValueWheelContainer />
      </div>
      <div style={{ flex: 1, display: 'flex'}}>
        <CheerFeed />
      </div>
    </PageLayout>
  )
}

export default MainScreen;