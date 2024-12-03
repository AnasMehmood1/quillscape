import BlogCard from "@/Components/Blogcard/BlogCard"
import { getBlogPosts } from "@/lib/api"

const BlogPage = async () => {
  const blogPosts = await getBlogPosts()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
       <BlogCard
       key={post.slug}
       slug={post.slug}
       name={post.name}
       publishdate={post.publishdate}
       excerpt={post.excerpt}
       author={post.author}
       category={post.category}
       tag={post.tag}
       thumbnail={post.thumbnailUrl} // Pass 'thumbnail' as defined in BlogCardProps
     />
     
        ))}
      </div>
    </div>
  )
}

export default BlogPage

