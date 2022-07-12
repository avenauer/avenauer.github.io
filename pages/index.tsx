import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/containers/header/header";
import Intro from "../src/containers/sections/intro";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="/favicon_light.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon_dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <div className="ease-smooth duration-200 bg-zinc-100 dark:bg-zinc-900">
        <Header />
        <Intro />
        {/*<Headline text="Headline" size="lg" />
          <Headline text="Headline" size="xl" />
          <Paragraph text="Paragraph" size="xl" />
          <Paragraph text="Paragraph" size="lg" />
          <Paragraph text="Paragraph" size="md" />
          <Paragraph text="Paragraph" size="sm" />
          <Paragraph text="Paragraph" size="xs" />*/}
      </div>
    </>
  );
};

export default Home;
