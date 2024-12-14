
import BlogCard from "@/Component/Blogcard/BlogCard"
import { Pagination } from "@/Components/ui/pagination"

export default function BlogPage() {
  return (
   <>
   
   <header className="text-center space-y-4 pt-4">
        <h1 className="text-4xl font-bold tracking-tight">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest insights, tips, and stories from our team of experts.
        </p>
      </header>
     <BlogCard/> 
   </>

  )
}