import Date from "./Date";

export default function PostInfo({ author, date }) {
  return (
    <div className="flex flex-row justify-center">
      <div className="pr-24 pb-12">
        <p className="select-none uppercase text-accent-3">Written by</p>
        <p className="inline-block tracking-widest text-xs title-font font-normal ">
          {author}
        </p>
      </div>
      <div>
        <p className="select-none uppercase text-accent-3">Published on</p>
        <Date dateString={date} />
      </div>
    </div>
  );
}
