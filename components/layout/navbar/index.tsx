import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex items-center justify-between">
            <nav className="ml-0 mr-4 text-lg font-medium space-x-6">
                <Link className="font-semibold" href="/algorithm">Algorithm</Link>
                <Link className="font-semibold" href="/portfolio">Portfolio</Link>
                <Link className="font-bold" href="/about">About</Link>
            </nav>
        </div>
    )
}