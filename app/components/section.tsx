export interface SectionProps {
    title: string;
    children: JSX.Element | JSX.Element[];
}

export const Section = ({ title, children }: SectionProps) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-10">
            <p className="text-5xl font-thin">{title}</p>
            {children}
        </div>
    );
}