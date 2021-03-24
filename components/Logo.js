import LogoCannonTech from "../assets/Logo.svg";
import LogoCannonTechBlack from "../assets/LogoBlack.svg";

export default function Logo({ colorLogo }) {
  return (
    <div className="inline-block">
      <a href="#">
        {colorLogo == "white" ? <LogoCannonTech /> : <LogoCannonTechBlack />}
      </a>
    </div>
  );
}
