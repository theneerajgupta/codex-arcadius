type TitleBarProps = {
  title: string;
  isMenuOpen: boolean;
};

const TitleBar = ({ title, isMenuOpen }: TitleBarProps) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'bg-zinc-300 text-black font-bold justify-end' : ''
      } flex flex-row border-2 p-2 md:hidden`}
    >
      {title}
    </div>
  );
};

export default TitleBar;
