import { Footer } from "./footer";
import { Header } from "./header";

export interface LayoutProps {
    children: JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen w-screen scrollbar-hide overflow-auto">
            <Header />
            {children}
            <Footer />
        </div>
    );
}