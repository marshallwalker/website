import { Section } from "./section";

export interface Institute {
    name: string;
    term: string;
    description: string;
}

interface ItemProps {
    institute: Institute;
}

const Item = ({ institute: { name, term, description } }: ItemProps) => {
    return (
        <div className="flex flex-col space-y-3 border shadow-mdx w-96 p-3 ">
            <div className="flex justify-between">
                <p className="text-2xl font-thin">{name}</p>
                <p className="font-medium">{term}</p>
            </div>
            <p className="text-slate-600">{description}</p>
        </div>
    );
}

export interface EducationProps {
    institutes: Institute[];
}

export const Education = ({ institutes }: EducationProps) => {
    return (
        <Section title="Education">
            <div className="grid grid-cols-3 gap-6">
                {institutes.map(institute =>
                    <Item key={institute.name} institute={institute} />
                )}
            </div>
        </Section>
    );
}
