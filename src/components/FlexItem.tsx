import React, { FunctionComponent } from 'react';

export enum FlexDirection {
  ROW = "row",
  COLUMN = 'column'
}

interface IProps {
  flex: number;
}

const FlexItem: FunctionComponent<IProps> = ({ children, flex }) => {
  return (
    <div style={{ flex }}>
      {children}
    </div>
  )
}

export default FlexItem;