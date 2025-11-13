import { usePathname } from 'next/navigation';

const BreadCrumb = () => {
  const pathName = usePathname();
  const pathArray = pathName.split('/').slice(1);

  return (
    <div className='hidden md:flex flex-row border-2 p-2 gap-2'>
      {pathArray.map((route, index) => (
        <div key={index}>/ {route}</div>
      ))}
    </div>
  );
};

export default BreadCrumb;
