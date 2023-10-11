import CabinLogo from "@/components/icons/cabinLogo";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "../navbar";

export default function Header() {
    return (
        <header className="sticky top-0">
            <div className="flex items-center justify-between">
              <CabinLogo />   
              <ModeToggle />
            </div>
            <p className="mb-3 font-semibold">성장을 기록하는 블로그 입니다.</p>
            <Navbar />   
        </header>
    )
}