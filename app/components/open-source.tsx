import { Section } from "./section";

export interface OpenSourceProject {
  name: string;
  description: string;
  repository: string;
  role: string;
}

interface ItemProps {
  project: OpenSourceProject;
}

const Item = ({ project: { name, description, repository, role } }: ItemProps) => {
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

export interface OpenSourceProps {
  projects: OpenSourceProject[];
}

export const OpenSource = ({ projects }: OpenSourceProps) => {
  return (
    <Section title="Open Source">
      <div className="grid grid-cols-3 gap-6">
        {projects.map(project =>
          <Item key={project.name} project={project} />
        )}
      </div>
    </Section>
  );
}
