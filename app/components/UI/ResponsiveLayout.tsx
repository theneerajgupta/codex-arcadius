'use client';

import Header from './Header';
import BreadCrumb from './BreadCrumb';
import MenuPane from './MenuPane';
import NeoTree from './NeoTree';
import ViewPane from './ViewPane';
import { useEffect, useState } from 'react';
import TitleBar from './TitleBar';

const ResponsiveLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const pageName: string = 'Homepage';

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMenuOpen((prev) => {
        if (window.innerWidth > 768 && prev) {
          console.log('closing menu');
          return false;
        }
        return prev;
      });
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='h-screen flex flex-col overflow-hidden p-2 gap-2 md:flex-row'>
      <div className='flex flex-col gap-2 md:w-[300px]'>
        <Header menuState={isMenuOpen} onClick={handleMenuToggle} />
        <BreadCrumb />
        <TitleBar title={pageName} isMenuOpen={isMenuOpen} />
        <NeoTree />
      </div>
      {isMenuOpen ? <MenuPane /> : <ViewPane />}
    </div>
  );
};

export default ResponsiveLayout;
