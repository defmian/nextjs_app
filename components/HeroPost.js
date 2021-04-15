import Header from "./Header";
import Container from "./Container";
import CoverImage from "./CoverImage";

export default function HeroPage({ title, coverImage, excerpt, slug }) {
  return (
    <section className="py-40 h-3/4 bg-accent-1 text-white ">
      <Container>
        <div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-9/12 top-0 z-10 flex flex-col">
              <h2 className="font-bold text-6xl">{title}</h2>
              <p className="font-light text-gray-500 text-lg">{excerpt}</p>
            </div>
            <div className=" max-w-xl right-0 z-1">
              <CoverImage
                title={title}
                responsiveImage={coverImage.responsiveImage}
                slug={slug}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
