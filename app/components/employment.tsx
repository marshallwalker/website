import { Section } from "./section";

export interface Employer {
  company: string;
  title: string;
  term: string;
  description: string;
}

interface ItemProps {
  employer: Employer;
}

const Item = ({ employer: { company, title, term, description } }: ItemProps) => {
  return (
    <div className="flex flex-col space-y-3 border shadow-mdx w-96 p-3">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl font-thin">{company}</p>
          <p className="text-slate-600 font-light">{title}</p>
        </div>
        <p className="font-medium">{term}</p>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export interface EmploymentProps {
  employers: Employer[];
}

export const Employment = ({ employers }: EmploymentProps) => {
  return (
    <Section title="Employment History">
      <div className="grid grid-cols-3 gap-6">
        {employers.map(employer =>
          <Item key={employer.company} employer={employer} />
        )}
      </div>
    </Section>
  );
}
