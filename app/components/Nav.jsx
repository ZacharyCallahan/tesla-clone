import Link from "next/link";
import TslaLogo from "./TslaLogo";
import NavButton from "./NavButton";

const Nav = () => {
    return (
        <div className="fixed w-full flex text-white justify-between items-center h-14 px-8">
            <div className="flex-grow basis-0">
                <Link href="#">
                    <TslaLogo />
                </Link>
            </div>
            <ul className="flex items-center justify-between flex-grow basis-0 text-sm font-semibold">
                <NavButton label="Vehicles" link="#" />
                <NavButton label="Energy" link="#" />
                <NavButton label="Charging" link="#" />
                <NavButton label="Discover" link="#" />
                <NavButton label="Shop" link="#" />
            </ul>
            <ul className="flex items-center justify-end flex-grow basis-0">
                <li>Cool</li>
                <li>Test</li>
                <li>Another</li>
            </ul>
        </div>
    );
};

export default Nav;
