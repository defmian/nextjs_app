import Head from "next/head";

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Contact - Cannon Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Contact</h1>
        <p>Let me know about your idea for interesting article</p>
        ////////////////////////////////
        {/* form here */}
        ////////////////////////////////
        <button>Submit</button>
      </main>
    </div>
  );
}
