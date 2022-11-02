import { Section } from "./section";

export const Education = () => {
    return (
        <Section title="Education">
            <div className="flex flex-col justify-center items-center pt-6">
                <div className="flex flex-col justify-between border w-96 h-44 p-3 ">
                    <div className="flex justify-between">
                        <p className="text-2xl font-thin">Self Taught</p>
                        <p className="font-medium">1997 - Present</p>
                    </div>
                    <p className="text-slate-600">No formal education outside of High School.</p>
                </div>
            </div>
        </Section>
    );
}