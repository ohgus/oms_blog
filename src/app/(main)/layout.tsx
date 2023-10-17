import Navbar from "@/src/components/layout/navbar"

type mainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: mainLayoutProps) {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}