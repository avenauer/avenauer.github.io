import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export const isProd = process.env.NODE_ENV === "production";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/*TODO: Meta description*/}
        <meta name="description" content="Typescript Application" />
        <link rel="apple-touch-icon" href={`/logo_sm.jpg`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href={`/static/favicon_light.ico`} rel="icon" media="(prefers-color-scheme: light)" />
        <link href={`/static/favicon_dark.ico`} rel="icon" media="(prefers-color-scheme: dark)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
