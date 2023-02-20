import Link from "next/link";
import Sidebar from "../Sidebar";

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-red-100">
      <Sidebar />
      <div className="text-right">
        <Link href="/">This is header.</Link>
      </div>
    </header>
  );
};

export default Header;