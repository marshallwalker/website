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
    <div className="w-full p-5">
      <p className="text-xl">{company}</p>
      <p>{term}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export const Employment = () => {
  const employers = [
    {
      company: "Island Health",
      title: "Material Management - Logistics Services",
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
      <div className="flex w-full justify-evenly">

        {employers.map(employer =>
          <Employer key={employer.company} details={employer} />
        )}
      </div>
    </Section>
  );
}