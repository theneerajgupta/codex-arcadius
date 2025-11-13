import MenuItem from '../Navigation/MenuItem';

const MenuPane = () => {
  return (
    <div className='border-2 p-2 overflow-auto flex-1 flex flex-col items-end'>
      <MenuItem label='about me' />
      <MenuItem label='case-studies' />
      <MenuItem label='projects' />
      <MenuItem label='tools' />
      <MenuItem label='blog' />
    </div>
  );
};

export default MenuPane;
