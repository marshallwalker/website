
import { faArrowUpRightFromSquare } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <p className="">{name}</p>
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
            <div className="flex justify-between">
                <p className="text-2xl font-thin">Languages</p>
                <p className="text-slate-400 font-thin italic text-xs">proficiency measured in ducks</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {languages.map(it => <LanguageItem key={it.name} language={it}/>)}
            </div>
        </div>
    );
}

export const Skills = () => {
    return (
        <Section title="Skills">
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
                    <div className="grid grid-cols-3 gap-3">
                        <a className="text-sky-500" href="https://mysql.com" target="_blank" rel="noreferrer">MySQL</a>
                        <a className="text-sky-500" href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a>
                        <a className="text-sky-500" href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a>
                        <a className="text-sky-500" href="https://www.edgedb.com/" target="_blank" rel="noreferrer">EdgeDB</a>
                        <a className="text-sky-500" href="https://rethinkdb.com/" target="_blank" rel="noreferrer">RethinkDB</a>
                        <a className="text-sky-500" href="https://www.sqlite.org/index.html" target="_blank" rel="noreferrer">SQLite</a>
                        <a className="text-sky-500" href="https://redis.io/" target="_blank" rel="noreferrer">Redis</a>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Frontend Frameworks</p>
                    <div className="grid grid-cols-3 gap-3">
                        <div>Remix</div>
                        <div>React</div>
                        <div>Next</div>
                        <div>Nuxt</div>
                        <div>Fresh</div>
                        <div>Angular</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Backend Frameworks</p>
                    <div className="grid grid-cols-3 gap-3">
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
                    <p className="text-2xl font-thin">Containerizers</p>
                    <div className="grid grid-cols-3 gap-3">
                        <div>Kubernetes</div>
                        <div>Docker</div>
                    </div>
                </div>

                <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
                    <p className="text-2xl font-thin">Miscellaneous</p>
                    <div className="grid grid-cols-3 gap-3">
                        <div>Git</div>
                        <div>Cloudflare</div>
                        <div>Digital Ocean</div>
                        <div>Google Cloud</div>
                        <div>AWS</div>
                        <div>NodeJS</div>
                        <div>Deno</div>
                        <a href="https://asm.ow2.io/" target="_blank" rel="noreferrer">ASM</a>
                    </div>
                </div>
            </div>
        </Section>
    );
}