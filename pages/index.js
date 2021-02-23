import Head from "next/head";
import App from "next/head";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My blog!</h1>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 10px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
