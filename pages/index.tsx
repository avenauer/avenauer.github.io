import type { NextPage } from "next";
import Intro from "../src/containers/sections/intro";
import Projects from "../src/components/projects/projects";
import Clients from "../src/containers/sections/clients";

export const email = "mbieszka@proton.me";

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
