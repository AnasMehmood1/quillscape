'use client';

import React, { useEffect, useState } from 'react';
import { client, urlFor } from "@/lib/sanity";
import Image from 'next/image';
import Link from 'next/link';
import { CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data
  const fetchBlogData = async () => {
    const query = `*[_type == 'blog']{
      _id,
      name,
      publishdate,
      excerpt,
      "author": author->author,    // Fetching author name
      "authorAvatar": author->profilePicture.asset->url,  // Fetching author's profile picture (avatar)
      "category": category->category,
      "tag": tag->tag,
      thumbnail,
      slug   // Ensure slug field is fetched
    }`;
    const data = await client.fetch(query);
    setBlogs(data);
  };
// using use effect hook
  useEffect(() => {
    fetchBlogData();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          // Conditionally check if slug exists
          blog.slug?.current ? (
            <Link href={`/blog/${blog.slug.current}`} key={blog._id}>
              <div className="overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="aspect-[16/10] relative">
                  {blog.thumbnail && (
                    <Image 
                      src={urlFor(blog.thumbnail).url()}
                      alt={blog.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-slate-100">
                      {blog.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(blog.publishdate)}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl leading-tight line-clamp-2">
                      {blog.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        {blog.authorAvatar ? (
                          <AvatarImage 
                            src={urlFor(blog.authorAvatar).url()} 
                            alt={blog.author} 
                          />
                        ) : (
                          <AvatarFallback>
                            {blog.author?.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <span className="text-sm font-medium">
                        {blog.author}
                      </span>
                    </div>
                    {blog.tag && (
                      <Badge variant="outline" className="text-xs">
                        {blog.tag}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </div>
            </Link>
          ) : (
            // Fallback for blogs without a slug
            <div key={blog._id} className="text-red-500">
              <p>Blog post without a slug</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
