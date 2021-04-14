import Header from "./Header";

export default function HomePage({ title, coverImage, excerpt }) {
  return (
    <section>
      <div className="">
        <Image />
      </div>
      <div>
        <Header />
      </div>
    </section>
  );
}
