import SidebarHeader from "@/components/Sidebar/SidebarHeader";
import Navigation from "@/components/Sidebar/Navigation";
import Overlay from "@/components/Sidebar/Overlay";
import stopScroll from "@/libs/stopScroll";
import { AppContext } from "@/pages/_app";
import { useContext, useEffect } from "react";

const Sidebar = () => {
  const { isOpen } = useContext(AppContext);

  useEffect(() => stopScroll(isOpen), [isOpen]);

  return (
    <>
      <div className={
        `${isOpen ? "left-0 translate-x-0 shadow-lg"
          : "-translate-x-full"}
        absolute z-40 w-2/5 inset-y-0 max-h-screen min-h-screen overflow-y-auto 
        bg-white transition duration-300 ease-in-out`
      }>
        <SidebarHeader />
        <Navigation />
      </div>
      <Overlay />
    </>
  );
};

export default Sidebar;