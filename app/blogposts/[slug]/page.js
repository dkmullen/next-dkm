import { getPost } from "@/lib/posts";

export default async function BlogPost({ params }) {
  const { content, frontmatter } = getPost(params.slug);

  return (
    <article className="prose">
      <h1>{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">{frontmatter.date}</p>
      {content}
    </article>
  );
}
