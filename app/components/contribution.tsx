import { Section } from "./section";

interface ContributionProps {
  name: string;
  description: string;
  repository: string;
}

const ContributionItem = ({ name, description, repository }: ContributionProps) => {
  return (
    <div className="flex flex-col w-96 h-44 p-3 border justify-between">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-thin">{name}</p>
        <a href={repository} className="text-sky-300">Repository</a>
      </div>
      <p className="text-slate-600 font-medium">{description}</p>
    </div>
  );
}

export const ContributionContainer = () => {
  const contributions = [
    {
      name: "CheckStyle-IDEA",
      description: "A plug-in for JetBrains' IntelliJ IDEA which provides real-time feedback against a given CheckStyle 8-10 profile by way of an inspection.",
      repository: "https://github.com/jshiell/checkstyle-idea"
    },
    {
      name: "Morphium",
      description: "Java Object Mapper and Caching Layer for MongoDB",
      repository: "https://github.com/sboesebeck/morphium"
    },
    {
      name: "OpenVSX",
      description: "endor-neutral open-source alternative to the Visual Studio Marketplace",
      repository: "https://github.com/eclipse/openvsx"
    },
    {
      name: "Profiling",
      description: "Provides a very thin abstraction over instrumented profiling crates like puffin, optick, tracy, and superluminal-perf",
      repository: "https://github.com/aclysma/profiling"
    },
    {
      name: "Code-Server",
      description: "Run VS Code on any machine anywhere and access it in the browser.",
      repository: "https://github.com/DevXiaolan/code-server"
    }
  ]

  return (
    <Section title="Open Source Contributions">
      <div className="grid grid-cols-4 gap-4">

        {contributions.map(({ name, description, repository }) =>
          <ContributionItem
            key={name}
            name={name}
            description={description}
            repository={repository}
          />
        )}
      </div>
    </Section>
  );
}