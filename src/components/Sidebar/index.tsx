import { AppContext } from "@/pages/_app";
import { useContext, useEffect } from "react";
import Navigation from "./Navigation";
import Overlay from "./Overlay";
import SidebarHeader from "./SidebarHeader";

const stopScroll = (on: boolean) => {
  if (on) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";
};

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  useEffect(() => stopScroll(isOpen), [isOpen]);
  return (
    <>
      <div className={
        `${isOpen ? "left-0 translate-x-0 shadow-lg"
          : "-translate-x-full"} 
        absolute z-40 w-6/12 inset-y-0 max-h-screen min-h-screen overflow-y-auto 
        bg-white transition duration-200 ease-in-out`
      }>
        <SidebarHeader />
        <Navigation />
      </div>

      <Overlay />
    </>
  );
};

export default Sidebar;