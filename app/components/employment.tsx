import { Section } from "./section";

interface EmploymentDetails {
  company: string;
  title: string;
  term: string;
  description: string;
}

interface EmployerProps {
  details: EmploymentDetails;
}

const Employer = ({ details: { company, title, term, description } }: EmployerProps) => {
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

export const Employment = () => {
  const employers = [
    {
      company: "Island Health",
      title: "Logistics Services",
      term: "2016 - Present",
      description: "job details here...",
    },
    {
      company: "Oreville Studios",
      title: "Senior Software Engineer",
      term: "2018 - Present",
      description: "job details here...",
    },
    {
      company: "AnubisMC",
      title: "Software Engineer",
      term: "2020 - 2021",
      description: "job details here...",
    },
    {
      company: "FlexTerm",
      title: "Owner / Software Engineer",
      term: "2022 - Present",
      description: "job details here...",
    },
    {
      company: "GSaaS",
      title: "Owner / Software Engineer",
      term: "2022 - Present",
      description: "job details here...",
    },
    {
      company: "Eigenreclame",
      title: "Software Engineer",
      term: "2022 - Present",
      description: "job details here...",
    }
  ]

  return (
    <Section title="Employment History">
      <div className="grid grid-cols-3 gap-6">

        {employers.map(employer =>
          <Employer key={employer.company} details={employer} />
        )}
      </div>
    </Section>
  );
}