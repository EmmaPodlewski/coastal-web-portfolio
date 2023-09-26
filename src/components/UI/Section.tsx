import Header from "./Header";
import { ReactNode } from "react";

type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

interface Props {
  id: string;
  title: string;
}

const Section = (props: PropsWithChildren<Props>) => {
  const { children, id, title } = props;
  return (
    <section
      id={id}
      className={`${
        id === "portfolio" && "bg-gradient-to-r from-green to-dark"
      } flex flex-col item-center justify-center my-6 py-6 px-10`}
    >
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;
