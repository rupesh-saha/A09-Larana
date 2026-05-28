import FooterBar from '@/Components/FooterBar';
import NavBar from '@/Components/NavBar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
      <FooterBar/>
    </>
  );
};

export default MainLayout;