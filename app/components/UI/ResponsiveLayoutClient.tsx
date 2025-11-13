'use client';

import { useEffect, useState } from 'react';

import Header from './Header';
import BreadCrumb from './BreadCrumb';
import MenuPane from './MenuPane';
import NeoTree from './NeoTree';
import ViewPane from './ViewPane';
import TitleBar from './TitleBar';

/**
 * so lets say i am starting to build the navigation system
 * this will deeply link the NeoTree with the ViewPane
 *
 * so we need split responsibilities and create requirement list
 *
 * item-definition
 * -------------------------------------------------------------
 * - item type
 *    - [ folder                   ]
 *    - < tool / component />
 *    - something.md/pdf/jpg/x
 * - item name
 * - item path
 * - item preview
 * - item object - component / file
 *
 * neo-tree
 * -------------------------------------------------------------
 * - list of items (array of objects)
 * - current highlighted
 *
 * view-pane
 * -------------------------------------------------------------
 * - item type
 *
 *
 */

type ResponsiveLayoutClientProp = {
  routes: string[];
};

const ResponsiveLayoutClient = ({ routes }: ResponsiveLayoutClientProp) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  const pageName: string = 'page name';

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMenuOpen((prev) => {
        if (window.innerWidth > 768 && prev) {
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
        <NeoTree routes={routes} />
      </div>
      {isMenuOpen ? <MenuPane /> : <ViewPane />}
    </div>
  );
};

export default ResponsiveLayoutClient;
