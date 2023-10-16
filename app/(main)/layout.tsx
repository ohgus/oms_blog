import { Providers } from "../providers";
import { Analytics } from "@/components/analytics";
import Header from "@/components/layout/header";

type mainLayoutProps = {
    children: React.ReactNode;
}

export default function MainLayout({ children }: mainLayoutProps) {
    return (
         <Providers>
            <Header />
            <main>{children}</main>
          <Analytics />
        </Providers>
    )
}