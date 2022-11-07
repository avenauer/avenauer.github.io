import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="og:description"
          content="Hello there, I'm Marcin! Gdańsk / Poland based UI Developer & Designer. I love to design unique, clean, minimalistic things & turning them into reality."
        />
        <meta property="og:image:secure_url" content="https://marcinbieszka.com/logo_sm.jpg" />
        <link rel="apple-touch-icon" href={`/logo_sm.jpg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href={`/favicon_light.ico`} rel="icon" media="(prefers-color-scheme: light)" />
        <link href={`/favicon_dark.ico`} rel="icon" media="(prefers-color-scheme: dark)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
