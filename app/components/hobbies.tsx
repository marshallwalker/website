import { Section } from "./section";

interface HobbyProps {
    title: string;
    description: string;
}

const Hobby = ({ title, description }: HobbyProps) => {
    return (
        <div>
            <p className="text-xl font-thin">{title}</p>
            <p className="text-medium">{description}</p>
        </div>
    );
}

export const Hobbies = () => {
    return (
        <Section title="Hobbies">
            <div className="flex w-full justify-evenly">
                <Hobby
                    title="Scuba Diving"
                    description="PADI certified open water diver"
                />
                <Hobby
                    title="Go-Kart Racing"
                    description="info about that sport here"
                />

                <Hobby
                    title="Bouldering"
                    description="info about that sport here"
                />
                <Hobby
                    title="Working Out"
                    description="training for competition power lifting"
                />
                <Hobby
                    title="Bartending"
                    description="bartend at a racetrack for fun"
                />
                <Hobby
                    title="Learning"
                    description="always learning"
                />
                <Hobby
                    title=""
                    description=""
                />
            </div>
        </Section>
    );
}