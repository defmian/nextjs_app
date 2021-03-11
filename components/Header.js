import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-3xl font-bold tracking-tight leading-tight text-left mb-12 mt-4">
      <Link href="/">
        <a className="hover:underline">Blog</a>
      </Link>
    </h2>
  );
}
