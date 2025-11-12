'use client';
import MobileNavbar from '@/components/MobileNavbar';
import MobileMenu from '@/components/MobileMenu';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleWindowSizeChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsMenuOpen(false);
    };

    if (mediaQuery.matches) setIsMenuOpen(false);

    mediaQuery.addEventListener('change', handleWindowSizeChange);

    return () =>
      mediaQuery.removeEventListener('change', handleWindowSizeChange);
  }, []);

  return (
    <div className='h-screen flex flex-col overflow-hidden p-2'>
      <MobileNavbar isMenuOpen={isMenuOpen} onClick={handleMenuClick} />
      {isMenuOpen ? (
        <MobileMenu closeMenu={() => setIsMenuOpen(false)} />
      ) : (
        <div className='border p-2 overflow-auto flex flex-col flex-1 items-stretch'>
          <h1 className='text-2xl font-bold mb-2'>Homepage</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
          perferendis ab, ad dicta aliquam deleniti labore, quia itaque, sint
          aperiam possimus temporibus repellendus nisi magnam ex dolore
          corrupti! Itaque ex assumenda eos quam? Consequatur, est. Recusandae
          illo sit cum accusamus repr
        </div>
      )}
    </div>
  );
}
