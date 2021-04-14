import Link from "next/link";
import LogoCannonTech from "../assets/Logo.svg";
import LogoCannonTechBlack from "../assets/LogoBlack.svg";

export default function Logo({ colorLogo }) {
  return (
    <div className="inline-block">
      <Link href="/">
        <a>
          {colorLogo == "white" ? <LogoCannonTech /> : <LogoCannonTechBlack />}
        </a>
      </Link>
    </div>
  );
}
