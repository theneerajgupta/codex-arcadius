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
      <div className='my-2'>Menu</div>
      <div className='overflow-x-clip whitespace-nowrap text-md'>
        {'-'.repeat(200)}
      </div>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/about')}
      >
        About
      </button>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/projects')}
      >
        Projects
      </button>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/case-studies')}
      >
        Case Studies
      </button>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/tools')}
      >
        Tools
      </button>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/blog')}
      >
        Blog
      </button>
      <button
        className='font-light mb-2 flex'
        type='button'
        onClick={() => handleMenuClick('/contact')}
      >
        Contact
      </button>
    </div>
  );
};

export default MobileMenu;
