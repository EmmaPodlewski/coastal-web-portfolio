import Tags from "./UI/Tags";

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  skillsFrontend?: string[];
  skillsBackend?: string[];
  skillsAPI?: string[];
  skillsDb?: string[];
}
const PortfolioCard = ({
  title,
  subtitle,
  image,
  alt,
  skillsFrontend,
  skillsBackend,
  skillsAPI,
  skillsDb,
}: IProps) => {
  return (
    <div className="flex hover:shadow-lg hover:bg-dark rounded p-2">
      <div className="flex w-7/12 lg:w-full">
        <img className="rounded h-[250px] w-[470px]" src={image} alt={alt} />

        <div className="text-white ml-4">
          <p className="font-bold pb-1 sm:mt-2">{title}</p>
          <p className="text-sm pb-3">{subtitle}</p>
          {skillsFrontend && (
            <Tags skills={skillsFrontend} color="bg-indigo-700" />
          )}
          {skillsBackend && <Tags skills={skillsBackend} color="bg-rose-700" />}
          {skillsAPI && <Tags skills={skillsAPI} color="bg-violet-700" />}
          {skillsDb && <Tags skills={skillsDb} color="bg-amber-600" />}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
