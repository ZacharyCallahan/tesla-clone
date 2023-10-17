import Link from "next/link";

const NavButton = ({ label, link }) => {
    return (
        <li className="px-2 py-1 tracker-wider">
            <Link className="m-2" href={`${link}`}>
                {label}
            </Link>
        </li>
    );
};

export default NavButton;
