import { Section } from "./section";

interface ContributionProps {
  name: string;
  description: string;
  repository: string;
  role: string;
}

const ContributionItem = ({ name, description, repository, role }: ContributionProps) => {
  return (
    <div className="flex flex-col w-96 p-3 border shadow-mdx space-y-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl font-thin">{name}</p>
          <p className="text-slate-600 font-light">{role}</p>
        </div>
        <a target="_blank" href={repository} className="text-sky-300" rel="noreferrer">Repository</a>
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
      repository: "https://github.com/jshiell/checkstyle-idea",
      role: "contributor",
    },
    {
      name: "Morphium",
      description: "Java Object Mapper and Caching Layer for MongoDB",
      repository: "https://github.com/sboesebeck/morphium",
      role: "contributor",
    },
    {
      name: "OpenVSX",
      description: "Vendor-neutral open-source alternative to the Visual Studio Marketplace",
      repository: "https://github.com/eclipse/openvsx",
      role: "contributor",
    },
    {
      name: "Profiling",
      description: "Provides a very thin abstraction over instrumented profiling crates like puffin, optick, tracy, and superluminal-perf",
      repository: "https://github.com/aclysma/profiling",
      role: "contributor",
    },
    {
      name: "Code-Server",
      description: "Run VS Code on any machine anywhere and access it in the browser.",
      repository: "https://github.com/DevXiaolan/code-server",
      role: "contributor",
    },
    {
      name: "This Website",
      description: "My personal website that you are currently viewing :)",
      repository: "https://github.com/marshallwalker/website",
      role: "owner",
    }
  ]

  return (
    <Section title="Open Source">
      <div className="grid grid-cols-3 gap-6">

        {contributions.map(({ name, description, repository, role }) =>
          <ContributionItem
            key={name}
            name={name}
            description={description}
            repository={repository}
            role={role}
          />
        )}
      </div>
    </Section>
  );
}