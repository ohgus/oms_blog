import AlgorithmLogo from "@/components/icons/algorithmLogo";
import PortfolioLogo from "@/components/icons/portfolioLogo";
import StudyLogo from "@/components/icons/studyLogo";
import AboutLogo from "@/components/icons/aboutLogo";

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