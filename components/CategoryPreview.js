import Link from "next/link";
import { Image } from "react-datocms";

export default function CategoryPreview({
  name,
  excerpt,
  responsiveImage,
  id,
}) {
  return (
    <>
      <Link as={`/category/${id}`} href="/category/[id]">
        <a aria-label={name}>
          <div className="py-2 pr-8">
            <div className="h-full overflow-hidden">
              <Image
                data={{
                  ...responsiveImage,
                  alt: `Cover Image for ${name}`,
                }}
                className="z-2"
              />
              <div className="py-5">
                <h1 className="title-font text-2xl font-normal text-gray-50 mb-3">
                  {name}
                </h1>
                <p className="leading-relaxed text-sm font-normal text-gray-400 mb-3">
                  {excerpt}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
