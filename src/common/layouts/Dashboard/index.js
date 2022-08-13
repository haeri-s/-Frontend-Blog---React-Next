import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ScrollReset from 'common/components/ScrollReset';

function Dashboard({ children }) {

  return (
    <>
      <ScrollReset />
      <TopBar />
        {children}
      <Footer />
    </>
  );
}

export default Dashboard;
