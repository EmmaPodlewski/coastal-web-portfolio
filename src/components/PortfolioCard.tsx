import Tags from "./UI/Tags";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  web?: string[];
  backEnd?: string[];
  api?: string[];
  skillsDb?: string[];
}
const PortfolioCard = ({
  title,
  subtitle,
  image,
  alt,
  web,
  backEnd,
  api,
  skillsDb,
}: IProps) => {
  return (
    <motion.div
      key={title}
      className="flex hover:shadow-lg hover:bg-dark rounded p-2"
      animate={{
        x: [-20, 0],
        transition: { duration: 1, delay: 0, type: "easeIn" },
      }}
    >
      <div className="flex w-7/12 lg:w-full">
        <img className="rounded h-[250px] w-[470px]" src={image} alt={alt} />

        <div className="text-white ml-4">
          <p className="font-bold pb-1 sm:mt-2">{title}</p>
          <p className="text-sm pb-3">{subtitle}</p>
          {web && <Tags skills={web} color="bg-tag-blue" />}
          {backEnd && <Tags skills={backEnd} color="bg-tag-green" />}
          {api && <Tags skills={api} color="bg-tag-red" />}
          {skillsDb && <Tags skills={skillsDb} color="bg-tag-yellow" />}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
