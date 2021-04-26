import Header from "./Header";
import { Image } from "react-datocms";

export default function PostHeader({ title, headerImage }) {
  return (
    <div className="pt-8 lg:pt-16 xl:pt-24 lg:px-2 bg-accent-1">
      <div className="mx-auto container px-12 md:px-24 lg:px-40 2xl:px-48 flex flex-col">
        <p className="text-gray-400 text-xs xl:text-sm">{`Article > Health`}</p>
        <div className="pt-2 xl:pt-4 pb-4 xl:pb-8">
          <Header>{title}</Header>
        </div>
        <Image
          data={{
            ...headerImage.responsiveImage,
            alt: `Post Image for ${title}`,
          }}
          className="z-1 min-w-full"
        />
      </div>
    </div>
  );
}
