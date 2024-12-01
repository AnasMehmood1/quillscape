'use client';

import { useParams } from 'next/navigation';

const BlogPost = () => {
  const params = useParams();
 const {slug} = params

 

  return (
    <div className="container mx-auto text-center">
          <p>this is blog {slug}</p>
    </div>
  );
};

export default BlogPost;
