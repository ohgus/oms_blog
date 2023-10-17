import AlgorithmLogo from "@/src/components/icons/algorithmLogo";
import PortfolioLogo from "@/src/components/icons/portfolioLogo";
import StudyLogo from "@/src/components/icons/studyLogo";
import AboutLogo from "@/src/components/icons/aboutLogo";

export default function Navbar() {
    return(
        <div className="flex items-center justify-start">
            <nav className="flex items-center justify-between gap-x-5 ml-2">
                <StudyLogo />
                <AlgorithmLogo />
                <PortfolioLogo />
                <AboutLogo />
            </nav>
        </div>
    )
}