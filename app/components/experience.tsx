
import { Ducks } from "./ducks";
import { Section } from "./section";

interface LanguageDescription {
    name: string;
    proficiency: 1 | 2 | 3 | 4 | 5 | 6;
}

interface LanguageItemProps {
    language: LanguageDescription;
}

const LanguageItem = ( { language: { name, proficiency } }: LanguageItemProps) => {
    return (
        <li>
            <p className="font-medium">{name}</p>
            <Ducks count={proficiency}/>
        </li>
    );
}

interface LanguageContainerProps {
    languages: LanguageDescription[]
}

const LanguageContainer = ({ languages }: LanguageContainerProps) => {
    return (
        <div className="flex flex-col space-y-3">
            <p className="text-2xl">Languages</p>

            <ol className="space-y-3">
                {languages.map(it => <LanguageItem key={it.name} language={it}/>)}
            </ol>
        </div>
    )
}

export const Experience = () => {
    return (

        <Section title="Experience">
            <div className="flex flex-wrap w-full h-full justify-evenly">

                <LanguageContainer
                    languages={[
                        {
                            name: "Kotlin",
                            proficiency: 6,
                        },
                        {
                            name: "Java",
                            proficiency: 6,
                        },
                        {
                            name: "Golang",
                            proficiency: 4,
                        },
                        {
                            name: "Rust",
                            proficiency: 3,
                        },
                        {
                            name: "TypeScript",
                            proficiency: 6,
                        },
                        {
                            name: "JavaScript",
                            proficiency: 5,
                        },
                        {
                            name: "C++",
                            proficiency: 3,
                        },
                        {
                            name: "C#",
                            proficiency: 2,
                        },
                        {
                            name: "Lua",
                            proficiency: 2,
                        },
                    ]}
                />

                <div className="">
                    <p className="text-2xl">Databases</p>
                    <ol>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>EdgeDB</li>
                        <li>RethinkDB</li>
                        <li>SQLite</li>
                        <li>Redis</li>
                    </ol>
                </div>

                <div>
                    <p className="text-2xl">Frontend</p>
                    <ol>
                        <li>Remix</li>
                        <li>React</li>
                        <li>Next</li>
                        <li>Nuxt</li>
                        <li>Fresh</li>
                        <li>Angular</li>
                    </ol>
                </div>

                <div>
                    <p className="text-2xl">Backend</p>
                    <ol>
                        <li>Spring</li>
                        <li>Spark</li>
                        <li>Ktor</li>
                        <li>Express</li>
                        <li>Gin</li>
                        <li>Rocket</li>
                        <li>Vaadin</li>
                    </ol>
                </div>

                <div>
                    <p className="text-2xl">Containerization</p>
                    <ol>
                        <li>Kubernetes</li>
                        <li>Docker</li>
                    </ol>
                </div>

                <div>
                    <p className="text-2xl">Miscellaneous</p>
                    <ol>
                        <li>Git</li>
                        <li>Cloudflare</li>
                        <li>Digital Ocean</li>
                        <li>Google Cloud</li>
                        <li>AWS</li>
                        <li>NodeJS</li>
                        <li>Deno</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>
            </div>
        </Section>
    );
}