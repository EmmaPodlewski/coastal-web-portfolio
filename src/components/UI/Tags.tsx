import Tag from "./Tag";

interface IProps {
  skills: string[];
  color: string;
}
const Tags = ({ skills, color }: IProps) => {
  return (
    <div className="flex flex-wrap text-white gap-1 pb-2">
      {skills.map((skill) => (
        <Tag key={skill} title={skill} color={color} />
      ))}
    </div>
  );
};

export default Tags;
