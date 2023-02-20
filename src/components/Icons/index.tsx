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

export { MenuIcon, CancelIcon, HomeIcon };