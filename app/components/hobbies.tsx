import { Section } from "./section";

export interface Hobby {
    title: string;
    description: string;
}

interface ItemProps {
    hobby: Hobby;
}

const Item = ({ hobby: { title, description } }: ItemProps) => {
    return (
        <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
            <p className="text-xl font-thin">{title}</p>
            <p className="text-medium">{description}</p>
        </div>
    );
}

export interface HobbiesProps {
    hobbies: Hobby[];
}

export const Hobbies = ({ hobbies }: HobbiesProps) => {
    return (
        <Section title="Hobbies">
            <div className="grid grid-cols-3 gap-6">
                {hobbies.map(hobby =>
                    <Item key={hobby.title} hobby={hobby} />
                )}
            </div>
        </Section>
    );
}
