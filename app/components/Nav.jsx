"use client";
import Link from "next/link";
import NavButton from "./NavButton";
import { useState, useEffect } from "react";

const Nav = ({ headerConfigs }) => {
    const [headerColor, setHeaderColor] = useState(headerConfigs[0].color);

    useEffect(() => {
        const handleScroll = (e) => {
            const idx = Math.round(e.target.scrollTop / e.target.offsetHeight);
            if (headerConfigs[idx]) setHeaderColor(headerConfigs[idx].color);
        };

        const container = document.querySelector(".snap-scrolling-container");
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            className="fixed w-full flex text-white justify-between items-center h-14 px-12"
            style={{ color: headerColor }}>
            <div className="flex-grow basis-0">
                <Link href="#">
                    <svg
                        className="w-fit h-[12px]"
                        viewBox="0 0 342 35"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                            fill={headerColor}></path>
                    </svg>
                </Link>
            </div>
            <ul className="flex items-center justify-between basis-0 text-sm font-semibold">
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
