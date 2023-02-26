import Link from "next/link";
import { Icon } from "../Icons";
import Sidebar from "../Sidebar";
import SidebarBtn from "../Sidebar/SidebarBtn";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-red-100 z-50">
      <div className="flex items-center justify-between">
        <SidebarBtn />
        <span className="p-2">
          <Link href="/">This is header.</Link>
        </span>
        <Icon name="Settings" className="m-2" />
      </div>
      <Sidebar />
    </header>
  );
};

export default Header;