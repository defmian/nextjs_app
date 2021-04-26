import Link from "next/link";

export default function Header({ children }) {
  return (
    <h2 className="tracking-normal text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-white">
      {children}
    </h2>
  );
}
