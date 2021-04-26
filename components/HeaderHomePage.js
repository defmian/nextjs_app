import Link from "next/link";

export default function HeaderHomePage({ title }) {
  return (
    <h2 className="py-4 tracking-wider text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
      <Link href="/">
        <a className="hover:underline">{title}</a>
      </Link>
    </h2>
  );
}
