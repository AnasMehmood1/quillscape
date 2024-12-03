interface BlogPost {
    slug: string
    name: string
    publishdate: string
    excerpt: string
    author?: {
      name: string
      avatar?: string
    }
    category: string
    tag: string
    thumbnailUrl: string
  }
  
  export async function getBlogPosts(): Promise<BlogPost[]> {
    // In a real application, you would fetch this data from your API or CMS
    return [
      {
        slug: "getting-started-with-nextjs",
        name: "Getting Started with Next.js",
        publishdate: "2023-05-15",
        excerpt: "Learn how to build modern web applications with Next.js",
        author: {
          name: "John Doe",
          avatar: "/hero1.jpg?height=80&width=80"
        },
        category: "Web Development",
        tag: "Next.js",
        thumbnailUrl: "/hero1.jpg?height=400&width=600"
      },
      {
        slug: "mastering-react-hooks",
        name: "Mastering React Hooks",
        publishdate: "2023-05-20",
        excerpt: "Dive deep into React Hooks and learn how to use them effectively",
        author: {
          name: "Jane Smith",
          avatar: "/hero1.jpg?height=80&width=80"
        },
        category: "React",
        tag: "Hooks",
        thumbnailUrl: "/hero2.jpg?height=400&width=600"
      },
      // Add more mock blog posts as needed
    ]
  }
  
  