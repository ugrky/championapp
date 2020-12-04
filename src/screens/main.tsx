import React from 'react';
import FlexContainer, { FlexDirection } from '../components/FlexContainer';
import FlexItem from '../components/FlexItem';
import FullScreenContainer from '../components/FullScreen';

const MainScreen = () => {
  return (
    <FullScreenContainer>
      <FlexContainer direction={FlexDirection.COLUMN}>
        <FlexItem flex={5}>
          Hi
        </FlexItem>
        <FlexItem flex={1}>
          Hoho
        </FlexItem>
      </FlexContainer>
    </FullScreenContainer>
  )
}

export default MainScreen;