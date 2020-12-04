import React from 'react';
import { Color } from '../colors';


function PageLayout({ children }: { children: any }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: Color.Charcoal }}>
      {children}
    </div>
  )
}

export default PageLayout;
