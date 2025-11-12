type MenuItemProps = {
  label: string;
  onClick: () => void;
};

export const MenuItem = ({ label, onClick }: MenuItemProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='font-light mb-2 flex justify-end'
    >
      {label}
    </button>
  );
};
