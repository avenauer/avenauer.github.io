import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Marcin Bieszka - portfolio</title>
        {/*TODO: Meta description*/}
        <meta name="description" content="" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo_sm.jpg" />
        <link
          href="%PUBLIC_URL%/favicon_light.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="%PUBLIC_URL%/favicon_dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
      </main>*/}

      <footer></footer>
    </div>
  );
};

export default Home;
