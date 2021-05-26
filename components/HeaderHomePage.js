import Link from "next/link";

export default function HeaderHomePage({ title, slug }) {
  return (
    <h2 className="py-4 tracking-normal text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium text-gray-50">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="hover:underline">{title}</a>
      </Link>
    </h2>
  );
}
