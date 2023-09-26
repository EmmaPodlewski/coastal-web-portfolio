import { useState } from "react";

interface IProps {
  onSectionSelected: (selector: string) => void;
}
const NAVBAR_LIST = [
  { title: "All", selector: "all" },
  { title: "Web Development", selector: "web" },
  { title: "Back-end Development", selector: "back-end" },
  { title: "Custom API Integration", selector: "api" },
];

const SecondaryNavbar = ({ onSectionSelected }: IProps) => {
  const [selectedEvent, setSelectedEvent] = useState("all");
  debugger;
  const sectionSelectedHandler = (selectedItem: string) => {
    setSelectedEvent(selectedItem);
    onSectionSelected(selectedItem);
    return;
  };
  return (
    <ul className="flex flex-col w-1/4 text-purple">
      {NAVBAR_LIST.map((item) => (
        <li
          key={item.selector}
          className={` ${
            selectedEvent === item.selector && "font-bold text-white"
          } is-small-caps tablinks rounded-md drop-shadow hover:font-bold hover:text-white p-1 `}
          onClick={() => sectionSelectedHandler(item.selector)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default SecondaryNavbar;
