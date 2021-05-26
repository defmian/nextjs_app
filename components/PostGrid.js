import PostPreview from "./PostPreview";

export default function PostGrid({ posts }) {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 auto-rows-max">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
