"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const CarHeader = ({ headerConfigs }) => {
    const [headerData, setHeaderData] = useState(headerConfigs[0]);

    useEffect(() => {
        const handleScroll = (e) => {
            const idx = Math.round(e.target.scrollTop / e.target.offsetHeight);
            if (headerConfigs[idx]) setHeaderData(headerConfigs[idx]);
        };

        const container = document.querySelector(".snap-scrolling-container");
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed w-full text-white h-[98vh] flex flex-col justify-between items-center text-center">
            <div className={`mt-28`} style={{ color: headerData.color }}>
                <h1 className="text-[2.5rem] font-semibold">
                    {headerData.header}
                </h1>
                <p className="text-xl pt-1 tracking-wider">
                    {headerData.content}
                </p>
                {headerData.linkContent && (
                    <Link href={headerData.link}>{headerData.linkContent}</Link>
                )}
                <p className="text-sm pt-1 tracking-wider">
                    {headerData.subContent}
                </p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-6 mb-4 px-6 py-4 flex-wrap">
                    {headerData.btnOne && (
                        <Link
                            className={headerData.btnOneClass}
                            href={headerData.btnOneLink}>
                            {headerData.btnOneContent}
                        </Link>
                    )}
                    {headerData.btnTwo && (
                        <Link
                            className={headerData.btnTwoClass}
                            href={headerData.btnTwoLink}>
                            {headerData.btnTwoContent}
                        </Link>
                    )}
                </div>
                <p className="text-sm">
                    {headerData.footer}
                    {headerData.footerLinkContent && (
                        <Link
                            className="underline"
                            href={headerData.footerLink}>
                            {headerData.footerLinkContent}
                        </Link>
                    )}
                </p>
            </div>
        </div>
    );
};

export default CarHeader;
