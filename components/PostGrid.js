import PostPreview from "./PostPreview";

export default function PostGrid({}) {
  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-2">
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </div>
  );
}
