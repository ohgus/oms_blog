"use client"

import { memo, useState } from "react";
import Link from "next/link";

import { SiteConfig } from "@/config";

const MobileNav = memo(() => {
    const [navShow, setNavShow] = useState(false);

    const onToggleNav = () => {
        setNavShow((status) => {
            if (status) {
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "0px";
            } else {
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            }
            return !status;
        })
    }
    return (
        <div className="sm:hidden">
            <button
                type="button"
                className="flex items-center justify-center h-8 w-8 rounded"
                aria-label="Toggle Menu"
                onClick={onToggleNav}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-[#F9F7F6] dark:text-[#F9F7F6]"
                >
                    {navShow ? (
                        <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    ) : (
                        <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                        />
                    )}
                </svg>
            </button>
            <div
                className={`fixed top-[80px] right-0 z-10 h-full w-full transform bg-[#F3F1F5] opacity-95 duration-300 ease-in-out dark:bg-[#161716] ${
                    navShow ? `translate-x-0` : `translate-x-full`
                }`}
            >
                <button
                    type="button"
                    aria-label="toggle modal"
                    className="fixed h-full w-full cursor-auto focus:outline-none"
                    onClick={onToggleNav}
                />
                <nav className="fixed w-full pt-8">
                    {SiteConfig.menu.map((link) => (
                        <div key={link.path} className="px-8 py-6">
                            <Link
                                href={link.path}
                                className="text-2xl font-bold tracking-widest text-[#252B52] dark:text-[#F9F7F6] block"
                                onClick={onToggleNav}
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
})

MobileNav.displayName = "MobileNav";
export default MobileNav;