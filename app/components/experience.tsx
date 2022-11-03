
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
        <div>
            <p className="font-medium">{name}</p>
            <Ducks count={proficiency}/>
        </div>
    );
}

interface LanguageContainerProps {
    languages: LanguageDescription[]
}

const LanguageContainer = ({ languages }: LanguageContainerProps) => {
    return (
        <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
            <p className="text-2xl font-thin">Languages</p>

            <div className="grid grid-cols-3 gap-6">
                {languages.map(it => <LanguageItem key={it.name} language={it}/>)}
            </div>
        </div>
    )
}

export const Experience = () => {
    return (

        <Section title="Experience">
            <div className="grid grid-cols-3 gap-6">

                <LanguageContainer
                    languages={[
                        {
                            name: "Kotlin",
                            proficiency: 5,
                        },
                        {
                            name: "Java",
                            proficiency: 5,
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
                            proficiency: 5,
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

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Databases</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>MySQL</div>
                        <div>PostgreSQL</div>
                        <div>MongoDB</div>
                        <div>EdgeDB</div>
                        <div>RethinkDB</div>
                        <div>SQLite</div>
                        <div>Redis</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Frontend</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>Remix</div>
                        <div>React</div>
                        <div>Next</div>
                        <div>Nuxt</div>
                        <div>Fresh</div>
                        <div>Angular</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Backend</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>Spring</div>
                        <div>Spark</div>
                        <div>Ktor</div>
                        <div>Express</div>
                        <div>Gin</div>
                        <div>Rocket</div>
                        <div>Vaadin</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Containerization</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>Kubernetes</div>
                        <div>Docker</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Miscellaneous</p>
                    <div className="grid grid-cols-3 gap-6">
                        <div>Git</div>
                        <div>Cloudflare</div>
                        <div>Digital Ocean</div>
                        <div>Google Cloud</div>
                        <div>AWS</div>
                        <div>NodeJS</div>
                        <div>Deno</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Section>
    );
}