import { Footer } from "./footer";
import { Header } from "./header";

export interface LayoutProps {
    name: string;
    url: string;
    children: JSX.Element[];
}

export const Layout = ({ name, url, children }: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen w-screen scrollbar-hide overflow-auto">
            <Header name={name} />
            {children}
            <Footer url={url} />
        </div>
    );
}
