'use client';
import MobileNavbar from '@/components/MobileNavbar';
import MobileMenu from '@/components/MobileMenu';

import '@/styles/globalicons.css';
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
        <MobileMenu />
      ) : (
        <div className='border p-2 overflow-auto flex flex-col flex-1 items-stretch'>
          <h1 className='text-2xl font-bold mb-2'>Homepage</h1>
          <span className='material-symbols-sharp'>arrow_back</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque
          perferendis ab, ad dicta aliquam deleniti labore, quia itaque, sint
          aperiam possimus temporibus repellendus nisi magnam ex dolore
          corrupti! Itaque ex assumenda eos quam? Consequatur, est. Recusandae
          illo sit cum accusamus reprehenderit quis consequuntur minus sequi
          earum commodi, dolor inventore optio numquam quae dolore molestias
          animi ut, laborum consequatur rem. Ullam dolores voluptas ipsa quae
          aperiam quas qui ut laudantium libero id quaerat nemo exercitationem
          aliquid reprehenderit natus numquam sint, maiores iste? Ratione totam
          nesciunt consectetur error quaerat fuga distinctio? Laborum
          consectetur incidunt voluptatum ad asperiores numquam quasi eaque
          voluptas harum alias expedita illo deleniti ipsum qui quidem voluptate
          et quia, obcaecati ipsam odit. Perferendis, commodi adipisci ab
          eligendi velit et iste ea debitis dolorum sequi qui pariatur,
          doloremque voluptatem omnis facilis ipsum veniam perspiciatis tempore
          impedit vitae nihil a dolorem. Iure eum aspernatur minima temporibus,
          dolor dolore tenetur incidunt dolorem, eligendi sit reprehenderit.
          Numquam neque fuga illo voluptates sunt reiciendis quibusdam nemo sed
          ad! Cumque fuga enim sit. Quam iste, tempore corrupti distinctio nihil
          quasi dolore aspernatur architecto perspiciatis possimus maxime ad
          voluptatibus doloremque maiores ipsum. Nam sunt eos soluta eligendi
          delectus, laudantium placeat. Sit sed totam corporis nemo?
        </div>
      )}
    </div>
  );
}
