import React, { FunctionComponent } from 'react';
import { Color } from '../colors';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.Charcoal,
  }
}

const FullScreenContainer: FunctionComponent = ({ children }) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}

export default FullScreenContainer;