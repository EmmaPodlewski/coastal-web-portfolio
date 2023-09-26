interface Props {
  title: string;
  color: string;
}

const Tag = ({ title, color }: Props) => {
  return (
    <div
      className={`${color} text-center text-sm rounded-full px-2 py-1 mr-2 min-w-[60px]`}
    >
      {title}
    </div>
  );
};

export default Tag;
