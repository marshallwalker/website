import { Section } from "./section";

export const Education = () => {
    return (
        <Section title="Education">
            <div className="flex flex-col justify-center items-center pt-6">
                <p className="text-2xl font-thin">Self Taught</p>
                <p>1997 - present</p>
                <p>I don't have any formal education outside of highschool</p>
            </div>
        </Section>
    );
}