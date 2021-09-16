interface Props {
  title: string;
  Icon: React.FC<{ className: string }>;
}

const HeaderItem: React.FC<Props> = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer sm:w-20 hover:text-white group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
    </div>
  );
};

export default HeaderItem;
