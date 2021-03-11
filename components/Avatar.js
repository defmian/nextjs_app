export default function Avatar({ author, picture }) {
  return (
    <div className="m-2">
      <img
        src={picture.url}
        alt={author}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="text-sm">{author}</div>
    </div>
  );
}
