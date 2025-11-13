type MenuItemProps = {
  label: string;
};

const MenuItem = ({ label }: MenuItemProps) => {
  return <div className={`p-2`}>{label}</div>;
};

export default MenuItem;
