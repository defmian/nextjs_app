import Head from "next/head";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About me</h1>
        <p>
          Hi! My name is Damian and I’m Junior Front-End Developer. I love
          develop and design web and mobile application for startups, small and
          medium businesses. I’d love to work for you.
        </p>
        <p>If you want to watch my work, check out my github profil.</p>
        <button>Check out</button>
      </main>
    </div>
  );
}
