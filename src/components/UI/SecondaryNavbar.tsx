import { useState } from "react";

const NAVBAR_LIST = [
  { title: "All", selector: "all" },
  { title: "Web Development", selector: "web" },
  { title: "Back-end Development", selector: "back-end" },
  { title: "Custom API Integration", selector: "api" },
];

const SecondaryNavbar = () => {
  const [selectedEvent, setSelectedEvent] = useState("all");
  return (
    <div className="flex flex-col items-center w-full mb-4">
      <div className="w-3/4">
        <ul className="flex justify-between items-center text-center text-purple">
          {NAVBAR_LIST.map((item) => (
            <li
              key={item.selector}
              className={` ${
                selectedEvent === item.selector && "bg-purple text-white"
              } is-small-caps tablinks w-1/4 rounded-md drop-shadow hover:bg-purple hover:text-white p-1 `}
              onClick={() => setSelectedEvent(item.selector)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
