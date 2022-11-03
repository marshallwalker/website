import type { ActionFunction } from "@remix-run/node";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { OpenSource } from "~/components/open-source";
import { Education } from "~/components/education";
import { Employment } from "~/components/employment";
import { Experience } from "~/components/experience";
import { Hobbies } from "~/components/hobbies";
import { Layout } from "~/components/layout";

export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  if (data.op === "contact") {
    //TODO: do something with contact data
  }

  return null;
}

export default () => {
  const name = "marshall walker";
  const age = new Date().getFullYear() - 1997;
  const bio = `I'm a ${age} year old Software Engineer from Canada, I've been interested in programming from the age of 12. I started programming in Java when Minecraft first came out. I have since expanded my passion into several disciplines ranging from backend infrastructure to frontend design.`;

  const projects = [
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
  ];

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
  ];

  const hobbies = [
    {
      title: "Scuba Diving",
      description: "PADI certified open water diver"
    },
    {
      title: "Go-Kart Racing",
      description: "info about that sport here"
    },
    {
      title: "Bouldering",
      description: "info about that sport here"
    },
    {
      title: "Working Out",
      description: "training for competition power lifting"
    },
    {
      title: "Bartending",
      description: "bartend at a racetrack for fun"
    },
    {
      title: "Learning",
      description: "always learning"
    },
    {
      title: "Coffee",
      description: "coffee hobbiest"
    }
  ];

  const institutes = [
    {
      name: "Self Taught",
      term: "1997 - Present",
      description: "No formal education outside of High School."
    }
  ];

  return (
    <Layout name={name} url={"marshallwalker.ca"}>
      <About 
        name={name}
        description={bio}
        photo="./assets/me.jpg"
      />

      <Experience />
      <OpenSource projects={projects} />
      <Employment employers={employers} />
      <Hobbies hobbies={hobbies} />
      <Education institutes={institutes}/>
      <Contact />
    </Layout>
  );
}
