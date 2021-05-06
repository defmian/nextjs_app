import Link from "next/link";

export default function Header({ children }) {
  return (
    <h2 className="tracking-normal text-5xl md:text-6xl 2xl:text-7xl font-normal text-white">
      {children}
    </h2>
  );
}
