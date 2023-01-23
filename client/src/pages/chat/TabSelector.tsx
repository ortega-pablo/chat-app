import * as React from 'react';
import { TabContainer } from './TabSelector.style';

export const TabSelector = ({
  isActive,
  children,
  onClick
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <TabContainer>
    <button className={`${isActive ? 'active' : 'inactive'}`} onClick={onClick}>
      {children}
    </button>
  </TabContainer>
);
