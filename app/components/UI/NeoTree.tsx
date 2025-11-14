'use client';
import NeoTreeItem from '../Navigation/NeoTreeItem';
import { useRouter } from 'next/navigation';

type NeoTreeProps = {};

const NeoTree = ({}: NeoTreeProps) => {
  const router = useRouter();

  const handleClick = (label: string) => {
    if (label === '..') {
      router.back();
    } else {
      router.push(label);
    }
  };

  return (
    <div className='border-2 p-2 hidden md:flex flex-1 flex-col'>
      <NeoTreeItem label='about me' type='route' isActive={true} />
      <NeoTreeItem label='case-studies' type='route' isActive={false} />
      <NeoTreeItem label='community-projects' type='route' isActive={false} />
      <NeoTreeItem label='projects' type='route' isActive={false} />
      <NeoTreeItem label='blogs' type='route' isActive={false} />
      <NeoTreeItem label='cookbook.pdf' type='file' isActive={false} />
      <NeoTreeItem label='resume.pdf' type='file' isActive={false} />

      {/* {routes.map((label, index) => (
        <button onClick={() => handleClick(label)} key={index}>
          <NeoTreeItem label={label} type='route' />
        </button>
      ))} */}
    </div>
  );
};

export default NeoTree;
