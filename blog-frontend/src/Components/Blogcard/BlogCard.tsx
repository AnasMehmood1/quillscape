'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import sanityClient from '@/sanityClient'; // Create and import your Sanity client here.

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog posts from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(`
        *[_type == "post"] | order(_createdAt desc) {
          _id,
          "src": mainImage.asset->url,
          alt,
          "slug": slug.current
        }
      `);
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center gap-4 my-5">
      {blogs.map((blog) => (
        <Link key={blog._id} href={`/blog/${blog.slug}`}>
          <div className="overflow-hidden rounded-lg shadow-md cursor-pointer">
            <img 
              src={blog.src} 
              alt={blog.alt || 'Blog Image'} 
              className="w-72 h-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
