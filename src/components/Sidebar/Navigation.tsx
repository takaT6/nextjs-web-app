import { AppContext } from "@/pages/_app";
import NavigationItem from "@/types/NavigationItem";
import Link from "next/link";
import { useContext } from "react";
import { HomeIcon } from "../Icons";

const navigations: NavigationItem[] = [
  {
    label: <span>トップ</span>,
    href: "/",
    icon: <HomeIcon />,
    isActive: true,
  },
  {
    label: <span>ページ2</span>,
    href: "/page2",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    label: <span>ページ3</span>,
    href: "/page3",
    icon: <HomeIcon />,
    isActive: false,
  },
  {
    label: <span>ページ4</span>,
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
            <Link
              href={navigation.href}
              className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${navigation.isActive
                ? 'bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
                : 'text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200'
                }`}
            >
              {navigation.icon}{navigation.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;