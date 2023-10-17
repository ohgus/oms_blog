import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import PostsLogo from "@/components/icons/postsLogo";
import AboutLogo from "@/components/icons/aboutLogo";
import CabinLogo from "@/components/icons/cabinLogo";
import TagsLogo from "@/components/icons/tagsLogo";
import home from "@/public/home.png";
import MobileNav from "../mobileNav";

export default function Navbar() {
    return(
        <div className="flex flex-col justify-between">
            <nav className="flex items-center justify-between py-10">
                <div>
                    <Link href="/">
                        <div className="flex items-center justify-between pb-3">
                            <div className="mr-3">
                                <Image
                                    src={home}
                                    alt="home"
                                    width={40}
                                    height={40}
                                    placeholder="blur"
                                    className="h-10 w-10 rounded-full"
                                    />
                            </div>
                            <div className="hidden h-6 sm:block">
                                <CabinLogo />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="hidden sm:block">
                        <div className="flex items-center justify-between gap-y-1 mr-2">
                            <PostsLogo />
                            <TagsLogo />
                            <AboutLogo />
                        </div>
                    </div>
                    <ModeToggle />
                    <MobileNav />
                </div>
            </nav>
        </div>
    )
}