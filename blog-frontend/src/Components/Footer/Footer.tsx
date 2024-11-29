import React from 'react'

const Footer = () => {
  return (
   
  
 
        <footer className="relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-black" />
          
          {/* Content container */}
          <div className="relative px-6 py-12 mx-auto max-w-7xl">
            {/* CTA Section */}
            <div className="text-center text-white mb-16">
              <h2 className="text-4xl font-bold mb-4">Let's get started on something great</h2>
              <p className="text-xl mb-6">Join over 4,000+ startups already growing with Untitled.</p>
              <button className="px-6 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-purple-600 transition-colors">
                Start your 7-day free trial
              </button>
            </div>
    
            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-white mb-16">
              <div>
                <h3 className="font-medium mb-4">PRODUCT</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">Overview</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Features</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Solutions</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Tutorials</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Pricing</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Releases</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-medium mb-4">COMPANY</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">About us</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Careers</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Press</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">News</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Media kit</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Contact</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-medium mb-4">RESOURCES</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">Blog</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Newsletter</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Events</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Help centre</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Tutorials</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Support</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-medium mb-4">USE CASES</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">Startups</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Enterprise</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Government</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">SaaS</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Marketplaces</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Ecommerce</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-medium mb-4">SOCIAL</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">Twitter</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">LinkedIn</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Facebook</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">GitHub</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">AngelList</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Dribbble</a></li>
                </ul>
              </div>
    
              <div>
                <h3 className="font-medium mb-4">LEGAL</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white hover:opacity-80">Terms</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Privacy</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Cookies</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Licenses</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Settings</a></li>
                  <li><a href="#" className="text-white hover:opacity-80">Contact</a></li>
                </ul>
              </div>
            </div>
    
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-white">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                </div>
                <span className="font-medium">Untitled UI</span>
              </div>
              <div>
                <p>&copy; 2077 Untitled UI. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      
    
    
    
  )
}

export default Footer




