'use client';

import { useEffect, useState } from 'react';
import MobileNavbar from './mobile/MobileNavbar';
import MobileMenu from './mobile/MobileMenu';
import BreadCrumb from './BreadCrumb';

type ResponsiveLayoutProps = {
  children: React.ReactNode;
};

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleMenuClick = () => setIsMenuOpen((prev) => !prev);

  if (isMobile) {
    return (
      <div className='h-screen flex flex-col overflow-hidden p-2'>
        <MobileNavbar isMenuOpen={isMenuOpen} onClick={handleMenuClick} />
        {isMenuOpen ? (
          <MobileMenu closeMenu={() => setIsMenuOpen(false)} />
        ) : (
          <div className='border p-2 overflow-auto flex-1 flex flex-col'>
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='flex-1 flex min-h-screen'>
      {/* <DesktopNavbar /> */}
      <main className='flex flex-row w-full overflow-auto p-2 gap-2'>
        <div className='w-[350px] flex flex-col gap-2'>
          <div className='border border-red-400 p-2 pt-10 texture-diagonal-1'>
            <div>Neeraj Gupta</div>
            <div className='text-red-400'>developer & designer</div>
          </div>
          <BreadCrumb />
          <div className='border p-2 flex-1'>Lorem ipsum dolor sit.</div>
        </div>
        <div className='border flex-1'>{children}</div>
      </main>
    </div>
  );
}
