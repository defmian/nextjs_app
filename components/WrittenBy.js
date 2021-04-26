import { Image } from "react-datocms";

export default function WrittenBy({ author, aboutAuthor, picture }) {
  return (
    <div className="pb-12 w-4/5 lg:w-3/5 mx-auto flex flex-row">
      <div className="">
        <img
          className="rounded-full"
          src={picture.url}
          alt={`picture ${author}`}
        />
      </div>
      <div className="pl-4 flex flex-col">
        <p className="select-none uppercase text-base text-accent-3">
          written by
        </p>
        <h3 className="font-robotomono font-normal text-2xl">{author}</h3>
        <p className="leading-normal text-sm text-accent-3 font-lighter">
          {aboutAuthor}
        </p>
      </div>
    </div>
  );
}
