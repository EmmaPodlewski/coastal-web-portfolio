interface Props {
  title: string;
  color: string;
}

const Tag = ({ title, color }: Props) => {
  return (
    <div
      className={`${color} font-bold text-center text-xs rounded-full px-2 py-1 mr-2 min-w-[60px]`}
    >
      {title}
    </div>
  );
};

export default Tag;
