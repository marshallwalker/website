import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { ContributionContainer } from "~/components/contribution";
import { Education } from "~/components/education";
import { Employment } from "~/components/employment";
import { Experience } from "~/components/experience";
import { Hobbies } from "~/components/hobbies";
import { Layout } from "~/components/layout";

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
