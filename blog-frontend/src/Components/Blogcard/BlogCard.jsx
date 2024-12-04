'use client';
import React, { useEffect, useState } from 'react';
import { client } from "@/lib/sanity";

const BlogCard = () => {
  // State to store blog data
  const [blogData, setBlogData] = useState([]);

  // Fetch blog data
  const fetchBlogData = async () => {
    const query = `*[_type == 'blog']{
      name,
      publishdate,
      excerpt,
      "author": author->author,
      "category": category->category,
      "tag": tag->tag,
      "thumbnailUrl": thumbnail.asset->url,
    }`;  
    const data = await client.fetch(query);
    setBlogData(data); 
  };

 
  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div>
      {/* Render blog names */}
      {blogData.map((blog, index) => (
        <p key={index}>{blog.name}</p>
      ))}
    </div>
  );
};

export default BlogCard;
