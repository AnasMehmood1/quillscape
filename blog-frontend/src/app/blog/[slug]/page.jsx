'use client'

import React, { useEffect, useState } from "react"
import { client, urlFor } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { Card, CardContent, CardHeader } from "@/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { Badge } from "@/ui/badge"
import { Skeleton } from "@/ui/skeleton"
import { CalendarIcon, UserIcon } from 'lucide-react'

const components = {
  types: {
    image: ({ value }) => {
      if (value?.asset) {
        return (
          <div className="my-8">
            <img
              src={urlFor(value).width(800).url()}
              alt={value.alt || "Blog image"}
              className="rounded-lg object-cover w-full max-h-[600px]"
            />
          </div>
        )
      }
      return null
    },
  },
  block: {
    normal: ({ children }) => <p className="text-lg leading-relaxed mb-6">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-300 my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

const BlogDetailPage = ({ params }) => {
  const { slug } = params
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogData = async () => {
      const query = `*[_type == "blog" && slug.current == $slug][0]{
        _id,
        name,
        content,
        publishdate,
       "author": author->author,

        "authorAvatar": author->profilePicture.asset->url,
        "category": category->category,
        "tag": tag->tag,
        thumbnail,
        slug
      }`

      try {
        const data = await client.fetch(query, { slug })
        setBlog(data)
      } catch (error) {
        console.error("Error fetching blog data:", error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) fetchBlogData()
  }, [slug])

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  if (loading) {
    return <BlogSkeleton />
  }

  if (!blog) {
    return <div className="text-center py-12">Blog post not found</div>
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="overflow-hidden">
        {blog.thumbnail && (
          <div className="relative h-[400px]  mb-6">
            <img
              src={urlFor(blog.thumbnail).url()}
              alt={blog.name}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader className="space-y-4">
          <div className="space-y-2">
            {blog.category && <Badge variant="secondary">{blog.category}</Badge>}
            <h1 className="text-4xl font-bold leading-tight">{blog.name}</h1>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time dateTime={blog.publishdate}>{formatDate(blog.publishdate)}</time>
            </div>
            {blog.tag && (
              <div className="flex items-center">
                <Badge variant="outline">{blog.tag}</Badge>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={blog.authorAvatar ? urlFor(blog.authorAvatar).url() : undefined} alt={blog.author} />
              <AvatarFallback>{blog.author?.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{blog.author}</p>
              <p className="text-sm text-muted-foreground">Author</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={blog.content} components={components} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const BlogSkeleton = () => (
  <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <Card>
      <Skeleton className="h-[400px] w-full" />
      <CardHeader className="space-y-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  </div>
)

export default BlogDetailPage

