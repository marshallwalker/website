import { Section } from "./section";

interface HobbyProps {
    title: string;
    description: string;
}

const Hobby = ({ title, description }: HobbyProps) => {
    return (
        <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
            <p className="text-xl font-thin">{title}</p>
            <p className="text-medium">{description}</p>
        </div>
    );
}

export const Hobbies = () => {
    const hobbies = [
        {
            title:"Scuba Diving",
            description:"PADI certified open water diver"
        },
        {
            title: "Go-Kart Racing",
            description: "info about that sport here"
        },
        {
            title: "Bouldering",
            description: "info about that sport here"
        },
        {
            title: "Working Out",
            description: "training for competition power lifting"
        },
        {
            title: "Bartending",
            description: "bartend at a racetrack for fun"
        },
        {
            title: "Learning",
            description: "always learning"
        },
        {
            title: "Coffee",
            description: "coffee hobbiest"
        }
    ];
    
    return (
        <Section title="Hobbies">
            <div className="grid grid-cols-3 gap-6">
                {hobbies.map(({ title, description }) => 
                    <Hobby key={title} title={title} description={description}/>
                )}
            </div>
        </Section>
    );
}