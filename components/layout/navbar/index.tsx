import AlgorithmLogo from "@/components/icons/algorithmLogo";
import PortfolioLogo from "@/components/icons/portfolioLogo";
import StudyLogo from "@/components/icons/studyLogo";
import AboutLogo from "@/components/icons/aboutLogo";
import { ModeToggle } from "@/components/mode-toggle";
import CabinLogo from "@/components/icons/cabinLogo";

export default function Navbar() {
    return(
        <div className="flex items-center justify-between">
            <nav className="flex items-center justify-between ml-2">
                <div className="flex items-center justify-between">
                    <a href="/">
                        
                        <CabinLogo />
                    </a>
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