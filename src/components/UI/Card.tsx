import { motion } from "framer-motion";

type Props = {
  title: string;
  image: string;
  alt: string;
  body: string;
};

const Card = ({ title, image, alt, body }: Props) => {
  return (
    <motion.div
      whileHover={{ y: [0, -10] }}
      className="flex flex-col items-center w-1/4 drop-shadow-2xl rounded p-4"
    >
      <img className="rounded-md h-[120px] pb-4 " src={image} alt={alt} />
      <div className="flex flex-col items-center justify-center mb-4">
        <p className="text-purple text-xl mb-2">{title}</p>
        <p className="text-justify">{body}</p>
      </div>
    </motion.div>
  );
};

export default Card;
