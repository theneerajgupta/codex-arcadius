type NeoTreeItemProps = {
  label: string;
  type: 'route' | 'file';
  isActive: boolean;
};

const NeoTreeItem = ({ label, type, isActive }: NeoTreeItemProps) => {
  if (type === 'route') {
    return (
      <div
        className={`flex flex-row justify-between p-1 hover:bg-white hover:text-black hover:font-bold uppercase tracking-wide 
          ${isActive ? 'bg-white text-black font-bold' : ''}`}
      >
        <span>
          <span className='pr-2'>[</span>
          <span>{label === '/' ? '..' : label}</span>
        </span>
        <span>]</span>
      </div>
    );
  }
  return (
    <div
      className={`p-1 hover:bg-white hover:text-black hover:font-bold uppercase tracking-wide ${
        isActive ? 'bg-white font-bold' : ''
      }`}
    >
      {label}
    </div>
  );
};

export default NeoTreeItem;
