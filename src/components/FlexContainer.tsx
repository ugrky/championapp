import React, { FunctionComponent } from 'react';

export enum FlexDirection {
  ROW = "row",
  COLUMN = 'column'
}

const FlexContainer: FunctionComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default FlexContainer;