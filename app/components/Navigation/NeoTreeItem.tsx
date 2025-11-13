type NeoTreeItemProps = {
  label: string;
  type: 'route' | 'file';
};

const NeoTreeItem = ({ label, type }: NeoTreeItemProps) => {
  if (type === 'route') {
    return (
      <div className='flex flex-row justify-between hover:bg-white hover:text-black hover:font-bold'>
        <span>
          <span className='pr-2'>[</span>
          <span>{label === '/' ? '..' : label}</span>
        </span>
        <span>]</span>
      </div>
    );
  }
  return <div className='p-1'>{label}</div>;
};

export default NeoTreeItem;
