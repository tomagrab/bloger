import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

type DrawerProps = {
  children: React.ReactNode;
};

export default function Drawer({ children }: DrawerProps) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="flex-grow w-full p-4 flex">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
