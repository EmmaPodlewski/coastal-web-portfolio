import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  alt: string;
  body: string;
}

const Card = ({ title, image, alt, body }: Props) => {
  return (
    <motion.li
      key={title}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center lg:w-1/4 md:w-1/2 shadow-lg rounded-md p-6"
    >
      <img className="rounded-md h-[120px] pb-4 " src={image} alt={alt} />
      <div className="flex flex-col items-center justify-center mb-4">
        <p className="text-purple text-xl mb-2">{title}</p>
        <p className="text-justify">{body}</p>
      </div>
    </motion.li>
  );
};

export default Card;
