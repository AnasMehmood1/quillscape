import Image from "next/image"
import { PenLine } from 'lucide-react'
import { Badge } from "@/Components/ui/badge"
import Link from "next/link"

export default function BlogHero() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-sm text-muted-foreground">The blog</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center justify-center gap-4">
          Writings from our team
          <PenLine className="h-8 w-8 text-primary" />
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      {/* Featured Post */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
        <Image
          src="/hero2.jpg"
          alt="Featured Post"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 p-4 md:p-6 lg:p-8 text-white z-10">
          <div className="space-y-1 md:space-y-2 mb-2 md:mb-4">
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-200">
              <span>Anas Mehmood</span>
              <span>•</span>
              <span>12 Dec 2024</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              <Link href="/blog" className="hover:underline">UX review presentations</Link>
            </h2>
            <p className="text-sm md:text-lg text-gray-200 line-clamp-2 md:line-clamp-none">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs md:text-sm bg-white/20 hover:bg-white/30 text-white px-2 md:px-[10px] py-[2px] border-2 border-white rounded-[67px]">
              Design
            </Badge>
            <Badge variant="secondary" className="text-xs md:text-sm bg-white/20 hover:bg-white/30 text-white px-2 md:px-[10px] py-[2px] border-2 border-white rounded-[67px]">
              Research
            </Badge>
            <Badge variant="secondary" className="text-xs md:text-sm bg-white/20 hover:bg-white/30 text-white px-2 md:px-[10px] py-[2px] border-2 border-white rounded-[67px]">
              Presentation
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

