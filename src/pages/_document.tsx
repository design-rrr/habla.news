import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { asset } from "@habla/lib/basepath";

export default class Document extends NextDocument {
  render() {
    return (
      <Html dir="auto">
        <Head>
          <link rel="icon" type="image/png" href={asset("/favicon-96x96.png")} sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href={asset("/favicon.svg")} />
          <link rel="shortcut icon" href={asset("/favicon.ico")} />
          <link rel="apple-touch-icon" sizes="180x180" href={asset("/apple-touch-icon.png")} />
          <meta name="apple-mobile-web-app-title" content="HABLA" />
          <link rel="manifest" href={asset("/site.webmanifest")} />
          <meta name="apple-mobile-web-app-status-bar" content="#151220" />
          <meta name="theme-color" content="#151220" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
