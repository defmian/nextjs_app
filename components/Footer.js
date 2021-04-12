import Container from "./Container";
import LogoBlack from "../assets/LogoBlack.svg";

export default function Footer() {
  return (
    <footer className="min-w-full bg-green-500">
      <Container>
        <div className="bg-red-200 flex flex-row e">
          <div className="bg-green-200">
            <LogoBlack />
            <p>My blog about technologies</p>
          </div>
          <div>
            <div className="flex flex-col">Blog</div>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Articles
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Events
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Category
            </a>
          </div>
          <div>
            <div className="flex flex-col">Contact me</div>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Articles
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Events
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Category
            </a>
          </div>
          <div>
            <div className="flex flex-col">Stay up to date</div>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Articles
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Events
            </a>
            <a href="#" className="my-3 block text-gray-300 text-sm">
              Category
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
