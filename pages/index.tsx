import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/containers/header/header";
import Intro from "../src/containers/sections/intro";
import Projects from "../src/components/projects/projects";
import Paragraph from "../src/components/common/Paragraph";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marcin Bieszka - portfolio</title>
        {/*TODO: Meta description*/}
        <meta name="description" content="Typescript Application" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo_sm.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="/favicon_light.ico" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/favicon_dark.ico" rel="icon" media="(prefers-color-scheme: dark)" />
      </Head>
      <div className="bg-zinc-100 duration-200 ease-smooth dark:bg-zinc-900">
        <Header />
        <Intro />
        <Projects />
      </div>
      <div id="section_1"></div>
    </>
  );
};

export default Home;
