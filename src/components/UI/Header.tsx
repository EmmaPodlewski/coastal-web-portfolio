import { motion } from "framer-motion";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <motion.div
      whileInView={{
        x: [-20, 0],
        transition: { duration: 1, delay: 0, type: "easeIn" },
      }}
      className="flex justify-center text-purple underline font-light text-4xl pb-6 animation-slide-in"
    >
      {title}
    </motion.div>
  );
};

export default Header;
