import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="overflow-hidden"> 
      <Head>
        <script
          src="https://kit.fontawesome.com/a7908c27f8.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <body className="bg-gradient-to-t from-gray-300 to to-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
