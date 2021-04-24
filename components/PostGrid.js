import PostPreview from "./PostPreview";

export default function PostGrid({ posts }) {
  console.log(posts);

  return (
    <div className="grid grid-flow-col grid-cols-3 auto-rows-auto">
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
