import { AppContext } from "@/pages/_app";
import { NavigationItem } from "@/types/NavigationItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { HomeIcon } from "../Icons";


const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  const router = useRouter();

  const navigations: NavigationItem[] = [
    {
      label: <span>トップ</span>,
      href: "/",
      icon: <HomeIcon />,
      isActive: router.asPath === "/",
    },
    {
      label: <span>ページ2</span>,
      href: "/page2",
      icon: <HomeIcon />,
      isActive: router.asPath === "/page2",
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
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <nav>
      <ul className="list-none">
        {navigations.map((navigation, i) => (
          <li key={i} onClick={handleClick}>
            <Link
              href={navigation.href}
              className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  
              ${navigation.isActive
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