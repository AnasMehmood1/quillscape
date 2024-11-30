import Image from "next/image"
import { PenLine } from 'lucide-react'
import { Badge } from "@/ui/badge"

export default function BlogHero() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-sm text-muted-foreground">The blog</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex items-center justify-center gap-4">
          Writings from our team
          <PenLine className="h-8 w-8 text-black" />
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      {/* Featured Post */}
      <div className="relative">
        <div className="aspect-[2/1] w-full overflow-hidden rounded-lg">
          <Image
            src="/hero2.jpg"
            alt="Woman in black turtleneck looking to the side"
            width={1200}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <div className="absolute bottom-0 p-6 md:p-8 text-white">
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span>Olivia Rhye</span>
              <span>•</span>
              <span>20 Jan 2022</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold">UX review presentations</h2>
            <p className="text-lg text-gray-200">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
              Design
            </Badge>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
              Research
            </Badge>
            <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
              Presentation
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

