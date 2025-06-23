import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="dvide-y">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
                    About
                </h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}