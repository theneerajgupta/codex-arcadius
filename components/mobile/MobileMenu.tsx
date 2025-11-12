'use client';

import { mobileMenuItems } from '@/data/MobileMenuItems';
import { MenuItem } from './MenuItem';

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu = ({ closeMenu }: MobileMenuProps) => {
  const handleMenuClick = (link: string) => {
    console.log(link);
    closeMenu();
  };

  return (
    <div className='border p-2 py-4 overflow-auto flex flex-col flex-1 justify-start text-2xl uppercase'>
      <div className='my-2 flex justify-end'>Menu</div>
      <div className='overflow-x-clip whitespace-nowrap text-md'>
        {'-'.repeat(200)}
      </div>
      {mobileMenuItems.map((item) => (
        <MenuItem
          key={item.path}
          label={item.label}
          onClick={() => handleMenuClick(item.path)}
        />
      ))}
    </div>
  );
};

export default MobileMenu;
