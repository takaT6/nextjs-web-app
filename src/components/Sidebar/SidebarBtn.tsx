import { Icon } from "@/components/Icons";
import { AppContext } from "@/pages/_app";
import { useContext } from "react";

const SidebarBtn = () => {
    const { isOpen, setIsOpen } = useContext(AppContext);

    const handleClick = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="flex z-50 p-2" onClick={handleClick}>
            {isOpen ? <Icon name="Cancel" /> : <Icon name="Menu" />}
        </div>
    );
};

export default SidebarBtn;