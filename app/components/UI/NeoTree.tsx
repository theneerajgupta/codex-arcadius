/*
* 
? NeoTree
* 0 ---- ..
* 1 ---- about
* 2 ---- case studies
* 3 ---- projects
* 4 ---- tools
* 5 ---- blog
* 
* .. <--- this needs going back logic
* 1-x <-- this needs going deeper logic
* 
* if highlighted -> lazy load into viewer
* 
*/
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
      {/* <div className='p-1 '>..</div>
      <div className='p-1 bg-zinc-300 text-black flex border'>about me</div>
      <div className='p-1 '>case studies</div>
      <div className='p-1 '>projects</div>
      <div className='p-1 '>tools</div>
      <div className='p-1 '>blog</div> */}
      {routes.map((label, index) => (
        <button onClick={() => handleClick(label)} key={index}>
          <NeoTreeItem label={label} type='route' />
        </button>
      ))}
    </div>
  );
};

export default NeoTree;
