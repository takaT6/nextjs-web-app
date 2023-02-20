import { AppContext } from "@/pages/_app";
import { NavigationItem } from "@/types/navigationItem";
import Link from "next/link";
import { useContext } from "react";
import { HomeIcon } from "../Icons";

const navigations: NavigationItem[] = [
  {
    label: "トップ",
    href: "/",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    label: "ページ2",
    href: "/page2",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    label: "ページ3",
    href: "/page3",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    label: "ページ4",
    href: "/page4",
    icon: <HomeIcon />,
    isActive: false,
  },
];
const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return (
    <nav>
      <ul className="list-none">
        {navigations.map((navigation) => (
          <li key={navigation.href} onClick={handleClick}>
            <Link href={navigation.href} className="flex justify-start">
              {navigation.icon}{navigation.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;