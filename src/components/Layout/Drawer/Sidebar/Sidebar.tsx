<<<<<<< HEAD
import { faFileLines, faHome } from "@fortawesome/free-solid-svg-icons";
import SidebarItem from "./SidebarItem/SidebarItem";

export default function Sidebar() {
  return (
    <ul className="menu pt-16 p-4 min-h-full bg-base-300 text-base-content">
      {/* Sidebar content here */}
      <SidebarItem href={`/`} icon={faHome} itemTitle={`home`} />
      <SidebarItem href={`/bloge`} icon={faFileLines} itemTitle={`bloge`} />
=======
export default function Sidebar() {
  return (
    <ul className="menu p-4 min-h-full bg-secondary text-base-content">
      {/* Sidebar content here */}
      <li>
        <div className="tooltip  tooltip-primary" data-tip="secondary">
          <a>Sidebar Item 1</a>
        </div>
      </li>{" "}
      <li>
        <div className="tooltip  tooltip-primary" data-tip="secondary">
          <a>Sidebar Item 1</a>
        </div>
      </li>{" "}
      <li>
        <div className="tooltip  tooltip-primary" data-tip="secondary">
          <a>Sidebar Item 1</a>
        </div>
      </li>{" "}
      <li>
        <div className="tooltip  tooltip-primary" data-tip="secondary">
          <a>Sidebar Item 1</a>
        </div>
      </li>{" "}
      <li>
        <div className="tooltip  tooltip-primary" data-tip="secondary">
          <a>Sidebar Item 1</a>
        </div>
      </li>
>>>>>>> cefb965a59c9396b6d044a3a3d973fed7bc97873
    </ul>
  );
}
