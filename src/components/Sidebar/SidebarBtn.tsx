import { AppContext } from "@/pages/_app";
import { useContext } from "react";
import { CancelIcon, MenuIcon } from "../Icons";

const SidebarBtn = () => {
    const { isOpen, setIsOpen } = useContext(AppContext);

    const handleClick = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="flex m-2  z-50"
            onClick={handleClick}>
            {isOpen ? <CancelIcon /> : <MenuIcon />}
        </div>
    );
};

export default SidebarBtn;