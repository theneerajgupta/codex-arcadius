const MobileMenu = () => {
  return (
    <div className='border p-2 overflow-auto flex flex-col flex-1 justify-center text-2xl uppercase'>
      <div className='mb-2'>Menu</div>
      <div className='overflow-x-clip whitespace-nowrap'>{'-'.repeat(200)}</div>
      <button className='font-light mb-2 flex' type='button'>
        About
      </button>
      <button className='font-light mb-2 flex' type='button'>
        Projects
      </button>
      <button className='font-light mb-2 flex' type='button'>
        Case Studies
      </button>
      <button className='font-light mb-2 flex' type='button'>
        Tools
      </button>
      <button className='font-light mb-2 flex' type='button'>
        Blog
      </button>
      <button className='font-light mb-2 flex' type='button'>
        Contact
      </button>
    </div>
  );
};

export default MobileMenu;
