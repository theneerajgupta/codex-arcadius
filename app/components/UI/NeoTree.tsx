'use client';
import NeoTreeItem from '../Navigation/NeoTreeItem';
import { useRouter } from 'next/navigation';

type NeoTreeProps = {
  routes: string[];
};

const NeoTree = ({ routes }: NeoTreeProps) => {
  const router = useRouter();

  const handleClick = (label: string) => {
    if (label === '..') {
      router.back();
    } else {
      router.push(label);
    }
  };

  return (
    <div className='border-2 p-2 hidden md:flex flex-1 flex-col gap-1'>
      {routes.map((label, index) => (
        <button onClick={() => handleClick(label)} key={index}>
          <NeoTreeItem label={label} type='route' />
        </button>
      ))}
    </div>
  );
};

export default NeoTree;
