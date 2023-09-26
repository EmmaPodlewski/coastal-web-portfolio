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
    <section id={id} className="flex flex-col item-center justify-center mt-4">
      <Header title={title} />
      {children}
    </section>
  );
};

export default Section;
