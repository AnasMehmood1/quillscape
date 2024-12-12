'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/Components/ui/button'

export default function Header() {
  return (
    <header className='pt-2'>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
        
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 2C20 2 20 8 12 14C4 20 4 22 4 22" />
                <path d="M20 2C20 2 14 3 8 10" />
                <path d="M20 2L22 4" />
              </svg>
            </div>
            <span className="font-semibold text-xl">Quillscape</span>
          </Link>

        
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
          <Link href="/blog">
          <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600">
                <span>Blogs</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </Link>


            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium hover:text-gray-600">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <Link href="/pricing" className="text-sm font-medium hover:text-gray-600">
              Pricing
            </Link>
          </nav>
        </div>

      
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden md:inline-block text-sm font-medium hover:text-gray-600"
          >
            Log in
          </Link>
          <Button
            variant="default"
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-sm"
            asChild
          >
            <Link href="/signup">
              Sign up
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

