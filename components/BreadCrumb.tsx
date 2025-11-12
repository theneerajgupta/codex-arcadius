import { usePathname } from 'next/navigation';

const BreadCrumb = () => {
  const pathName = usePathname();
  const pathArray = pathName.split('/').slice(1);

  return (
    <div className='flex flex-row border p-2 gap-2'>
      {pathArray.map((route, index) => (
        <div>/ {route}</div>
      ))}
    </div>
  );
};

export default BreadCrumb;
