import type { ActionFunction } from "@remix-run/node";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { ContributionContainer } from "~/components/contribution";
import { Education } from "~/components/education";
import { Employment } from "~/components/employment";
import { Experience } from "~/components/experience";
import { Hobbies } from "~/components/hobbies";
import { Layout } from "~/components/layout";

export const action: ActionFunction = async ({request}) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data);

  if (data.op === "contact") {
    //TODO: do something with contact data
  }

  return null;
}

export default () => {
  return (
    <Layout>
      <About />
      <Experience />
      <ContributionContainer />
      <Employment />
      <Hobbies/>
      <Education/>
      <Contact />
    </Layout>
  );
}
