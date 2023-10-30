import { faFileLines, faHome } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function Sidebar() {
  return (
    <ul className="menu pt-16 p-4 min-h-full bg-base-300 text-base-content">
      {/* Sidebar content here */}
      <SidebarItem href={`/`} icon={faHome} itemTitle={`home`} />
      <SidebarItem href={`/bloge`} icon={faFileLines} itemTitle={`bloge`} />
    </ul>
  );
}
