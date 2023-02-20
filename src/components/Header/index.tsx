import Link from "next/link";
import Sidebar from "../Sidebar";
import SidebarBtn from "../Sidebar/SidebarBtn";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-red-100">
      <div className="flex items-center">
        <SidebarBtn />
        <span className="p-2">
          <Link href="/">This is header.</Link>
        </span>
      </div>
      <Sidebar />
    </header>

  );
};

export default Header;