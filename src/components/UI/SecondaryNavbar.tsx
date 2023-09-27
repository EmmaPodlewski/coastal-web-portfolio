interface IProps {
  onSectionSelected: (selector: string) => void;
  selectedItem: string;
}
const NAVBAR_LIST = [
  { title: "All", selector: "all" },
  { title: "Web Development", selector: "web" },
  { title: "Back-end Development", selector: "backEnd" },
  { title: "Custom API Integration", selector: "api" },
];

const SecondaryNavbar = ({ onSectionSelected, selectedItem }: IProps) => {
  const sectionSelectedHandler = (selectedItem: string) => {
    onSectionSelected(selectedItem);
    return;
  };
  return (
    <ul className="flex flex-col w-1/4 text-purple">
      {NAVBAR_LIST.map((item) => (
        <li
          key={item.selector}
          className={` ${
            selectedItem === item.selector && "font-bold text-white"
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
