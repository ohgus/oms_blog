import PortfolioLogo from "@/components/icons/portfolioLogo";
import AboutLogo from "@/components/icons/aboutLogo";
import { ModeToggle } from "@/components/mode-toggle";
import CabinLogo from "@/components/icons/cabinLogo";
import Link from "next/link";
import Image from "next/image";
import home from "@/public/home.png";

export default function Navbar() {
    return(
        <div className="flex flex-col justify-between">
            <nav className="flex items-center justify-between py-10">
                <div>
                    <Link href="/">
                        <div className="flex items-center justify-between">
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
                            <CabinLogo />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center justify-end gap-x-3">
                    <PortfolioLogo />
                    <AboutLogo />
                    <ModeToggle />
                </div>
            </nav>
        </div>
    )
}