import CabinLogo from "@/components/icons/cabinLogo";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Header() {
    return (
        <header>
              <div className="flex items-center justify-between">
                <CabinLogo />   
                <ModeToggle />
              </div>
              <p className="mb-3 font-semibold">계속 미래를 그려나가는 개발자가 되자.</p>
              <div className="flex items-center justify-between">
                <nav className="ml-0 mr-4 text-lg font-medium space-x-6">
                  <Link className="font-semibold" href="/algorithm">Algorithm</Link>
                  <Link className="font-semibold" href="/portfolio">Portfolio</Link>
                  <Link className="font-bold" href="/about">About</Link>
                </nav>
                </div>
            </header>
    )
}