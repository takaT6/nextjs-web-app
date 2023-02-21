import Image from "next/image";

const MenuIcon = () => {
    return (
        <span>
            <Image
                src="/menu.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

const CancelIcon = () => {
    return (
        <span>
            <Image
                src="/x.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

const SettingsIcon = () => {
    return (
        <span>
            <Image
                src="/settings.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

const HomeIcon = () => {
    return (
        <span>
            <Image
                src="/home.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

const SearchIcon = () => {
    return (
        <span>
            <Image
                src="/search.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

const ChevronDownIcon = () => {
    return (
        <span>
            <Image
                src="/chevron-down.svg"
                alt="home"
                width={20}
                height={20}
                priority
            />
        </span>
    );
};

export { MenuIcon, CancelIcon, SettingsIcon, HomeIcon, SearchIcon, ChevronDownIcon };