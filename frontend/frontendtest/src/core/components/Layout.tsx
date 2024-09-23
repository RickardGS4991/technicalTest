import React, { ReactNode } from 'react';
import { SidebarComponent } from './Sidebar';
import { LayoutProps } from '../model/layoutProps.model';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <SidebarComponent />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;