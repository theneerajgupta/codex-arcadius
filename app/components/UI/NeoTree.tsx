'use client';
import { RouteItem } from '@/lib/getRouteItems';
import NeoTreeItem from '../Navigation/NeoTreeItem';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type NeoTreeProps = {
  routeItems: RouteItem[];
};

const NeoTree = ({ routeItems }: NeoTreeProps) => {
  const router = useRouter();

  const content = routeItems
    .filter((item) => item.type !== 'directory')
    .filter((item) => item.fileType !== 'unknown');

  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const makeRoute = (path: string) => {
    const pathArray = path.split('/');
    const cutoff = pathArray.indexOf('app');
    const route = pathArray.slice(cutoff + 1).join('/');
    if (cutoff === -1) return '';
    console.log(route);
    return route;
  };

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const key = e.key;

      // UP
      if (key === 'k' || key === 'ArrowUp') {
        setCurrentMenuIndex((prev) => {
          if (prev === 0) return content.length - 1;
          else return prev - 1;
        });
      }

      // DOWN
      if (key === 'j' || key === 'ArrowDown') {
        setCurrentMenuIndex((prev) => {
          prev = prev + 1;
          prev = prev % content.length;
          return prev;
        });
      }

      // ENTER
      if (key === 'Enter') {
        console.log('enter');
        const selected = content[currentMenuIndex];
        console.log(selected);
        if (selected.type === 'route') {
          handleClick(selected);
        }
      }
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleClick = (item: RouteItem) => {
    if (item.name === '..') {
      router.back();
    }
    router.push(makeRoute(item.path));
  };

  return (
    <div className='border-2 p-2 hidden md:flex flex-1 flex-col'>
      {content.map((item, index) => (
        <button onClick={() => handleClick(item)} key={index}>
          <NeoTreeItem
            label={item.name}
            type={item.type}
            isActive={index === currentMenuIndex ? true : false}
          />
        </button>
      ))}
    </div>
  );
};

export default NeoTree;
