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
      className="flex flex-wrap lg:flex-nowrap hover:border rounded p-4"
      whileInView={{
        x: [-10, 0],
        y: [-10, 0],
        transition: { duration: 0.2, delay: 0, type: "easeIn" },
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="max-h-[250px] max-w-[470px]">
        <img className="rounded" src={image} alt={alt} />
      </div>
      <div className="flex flex-col flex-wrap text-white ml-4">
        <p className="font-bold pb-1 sm:mt-2">{title}</p>
        <p className="text-sm pb-3">{subtitle}</p>
        {web && <Tags skills={web} color="bg-tag-blue" />}
        {backEnd && <Tags skills={backEnd} color="bg-tag-green" />}
        {api && <Tags skills={api} color="bg-tag-red" />}
        {skillsDb && <Tags skills={skillsDb} color="bg-tag-yellow" />}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
