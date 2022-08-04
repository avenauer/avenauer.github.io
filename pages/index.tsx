import type { NextPage } from "next";
import Header from "../src/containers/header/header";
import Intro from "../src/containers/sections/intro";
import Projects from "../src/components/projects/projects";
import Clients from "../src/containers/sections/clients";

const Home: NextPage = () => {
  return (
    <div className="bg-zinc-100 duration-200 ease-smooth dark:bg-zinc-900">
      <Header />
      <Intro />
      <Projects />
      <Clients />
    </div>
  );
};

export default Home;
