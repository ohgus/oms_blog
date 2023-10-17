type mainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: mainLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}