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
  const bio = `I'm ${age} years old, from Canada with what some might call an obsession for programming. I started with Java at the age of 14. I have since expanded my passion into several disciplines within the industry.`;

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
    },
    {
      name: "Speech To Text",
      description: "A Minecraft mod for forge that allows a person to type in chat and issue commands with their voice, using Microsoft Azure Cognative Speech Services. Written especially for my friend who is an amputee.",
      repository: "https://github.com/marshallwalker/stt",
      role: "owner"
    },
    {
      name: "UpDNS",
      description: "A small utlity to update CloudFlare records when an IPV4 address changes.",
      repository: "https://github.com/marshallwalker/updns",
      role: "owner"
    }
  ];

  const employers = [
    {
      company: "Island Health",
      title: "Logistics Services",
      term: "2016 - Present",
      description: "I'm the level headed guy that keeps the 24/7 365 machine that is a hospital running (overnight). Anything from blood to the operating rooms, patient equipment, medications, charts, or stores items goes through me.",
    },
    {
      company: "Oreville Studios",
      title: "Senior Software Engineer",
      term: "2018 - Present",
      description: "Wrote and actively maintain a online work-from-home environment / build pipeline that enables a team of roughly 20 people to produce custom content for the Minecraft Marketplace in record time.",
    },
    {
      company: "AnubisMC",
      title: "Software Engineer",
      term: "2020 - 2021",
      description: "Deployed and managed a large scale Minecraft Network on kubernetes, as well as wrote custom build tools and plugins.",
    },
    {
      company: "FlexTerm",
      title: "Owner / Software Engineer",
      term: "2022 - Present",
      description: "Wrote a browser based terminal to access servers anywhere in the world via SSH, from any device without needing to copy SSH keys or session information.",
    },
    {
      company: "GSaaS",
      title: "Owner / Software Engineer",
      term: "2022 - Present",
      description: "Wrote a Game Servers as a Service solution allowing people to deploy vastly complex game server networks with ease.",
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
      description: "PADI certified open water diver."
    },
    {
      title: "Kart Racing",
      description: "Raced 2 & 4 stroke karts in Canada, United Kingdom & Russia, non-professionally."
    },
    {
      title: "Bouldering",
      description: "Occasionally climb rocks with colleauges from the hospital."
    },
    {
      title: "Working Out",
      description: "Training for competition power lifting."
    },
    {
      title: "Bartending",
      description: "I bartend various events for fun."
    },
    {
      title: "Learning",
      description: "Always trying to pickup a new subject or play with the latest software."
    },
    {
      title: "Coffee",
      description: "I enjoy brewing and drinking coffee."
    },
    {
      title: "Piano",
      description: "Casual pianist with an interest for classical. I own a Yamaha P-125 and have the pleasure of playing on a steinway baby grand at the hospital."
    },
    {
      title: "Gamer",
      description: "I casually play Rust, Call Of Duty, Ranbow Six Seige, Valorant and a few other FPS games."
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
