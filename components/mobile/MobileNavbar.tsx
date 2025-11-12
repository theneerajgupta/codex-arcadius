type MobileNavbarProps = {
  isMenuOpen?: boolean;
  onClick?: () => void;
};

const MobileNavbar = ({ isMenuOpen, onClick }: MobileNavbarProps) => {
  const icon = isMenuOpen ? 'ri-close-large-fill ' : 'ri-menu-line';

  return (
    <div className='sticky top-0 z-50 bg-background p-2 mb-2 w-full texture-diagonal-1 border-red-400 border-2 md:hidden flex flex-row justify-between items-center'>
      <div>
        <h3>Neeraj Gupta</h3>
        <div className='text-red-400'>developer & designer</div>
      </div>

      <button
        onClick={onClick}
        className={`
            border-2 h-full flex items-center justify-center p-2 aspect-square bg-background transition-all duration-100 ease-in-out
            ${isMenuOpen ? 'bg-white text-black' : 'bg-black text-white'}
          `}
      >
        <i className={`${icon} text-2xl`}></i>
      </button>
    </div>
  );
};

export default MobileNavbar;
