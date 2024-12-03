'use client'

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/ui/card"
import { Badge } from "@/ui/badge"
import { CalendarIcon } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

interface BlogCardProps {
  slug: string
  name: string
  publishdate: string
  excerpt: string
  author?: {
    name: string
    avatar?: any // Sanity image reference
  }
  category: string
  tag: string
  thumbnail: any // Sanity image reference
}

const BlogCard = ({ 
  slug,
  name, 
  publishdate, 
  excerpt, 
  author, 
  category, 
  tag, 
  thumbnail 
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden h-full transition-transform hover:scale-[1.02]">
        <div className="aspect-video relative">
        <Image
  src={thumbnail} // Directly use the resolved URL
  alt={name}
  width={600}
  height={400}
  className="object-cover"
/>
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4" />
            {new Date(publishdate).toLocaleDateString()}
          </div>
          <h2 className="text-xl font-semibold line-clamp-2">{name}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {author && (
              <>
                {author.avatar && (
                  <div className="w-8 h-8 rounded-full overflow-hidden relative">
                    <Image
      src={author.avatar} // Use resolved URL directly
      alt={author.name || 'Author'}
      width={32}
      height={32}
      className="object-cover"
    />
                  </div>
                )}
                <span className="text-sm font-medium">{author.name || 'Anonymous'}</span>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">{category}</Badge>
            <Badge variant="outline">{tag}</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default BlogCard

