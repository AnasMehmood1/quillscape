// src/app/blog/[slug]/page.jsx

import { client, urlFor } from '@/lib/sanity';
import Image from 'next/image';

// Fetch blog data based on the slug (using async function directly in the component)
async function getBlogData(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug });
  return blog;
}

const BlogPost = async ({ params }) => {
  const blog = await getBlogData(params.slug); // Fetching the blog post data directly

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <article>
      <h1>{blog.name}</h1>
      <p>{blog.excerpt}</p>
      {blog.thumbnail && (
        <Image
          src={urlFor(blog.thumbnail).url()}
          alt={blog.name}
          width={800}
          height={600}
        />
      )}
      <div>{blog.content}</div>
    </article>
  );
};

export default BlogPost;
