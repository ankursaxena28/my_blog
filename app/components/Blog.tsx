'use client'

import React, { useState } from 'react'
import { Twitter, Linkedin, ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'  // Add this import

interface Article {
  title: string
  date: string
  type: string
  description: string
  url: string
}

const Blog = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const articles: Article[] = [
    {
      title: "Designing for Scale: A Product Perspective",
      date: "March 2025",
      type: "Essay",
      description: "Exploring how design decisions impact product scalability and user experience.",
      url: "#"
    },
    {
      title: "The Philosophy of Product Design",
      date: "February 2025",
      type: "Article",
      description: "Understanding the philosophical principles that guide effective product design.",
      url: "#"
    },
    {
      title: "Building Design Systems That Last",
      date: "January 2025",
      type: "Case Study",
      description: "A deep dive into creating maintainable and scalable design systems.",
      url: "#"
    }
  ]

  const about = `I&apos;m a product designer and writer exploring the intersections of design, 
    technology, and philosophy. Currently working on projects that bridge the gap 
    between user experience and strategic thinking.`

  return (
    <div className="min-h-screen selection:bg-gray-200">
      {/* Header/Nav */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <nav className="flex justify-between items-center h-16">
            <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
              Your Name
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link href="/writing" className="text-gray-600 hover:text-black transition-colors">Writing</Link>
              <button className="px-4 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">About</Link>
              <Link href="/writing" className="text-gray-600 hover:text-black transition-colors">Writing</Link>
              <button className="px-4 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-32 font-sans">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="relative">
            <h1 className="text-4xl font-normal mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: about }} />
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Writing */}
        <section className="mb-24">
          <h2 className="text-lg font-medium mb-8 flex items-center">
            Selected Writing
            <span className="ml-2 text-sm text-gray-500">({articles.length})</span>
          </h2>
          <div className="space-y-12">
            {articles.map((article, index) => (
              <article 
                key={index} 
                className="group relative"
              >
                <Link 
                  href={article.url}
                  className="block group-hover:bg-gray-50 -mx-6 px-6 py-4 rounded-xl transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium pr-8 group-hover:text-gray-600 transition-colors">
                      {article.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-600 mb-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="text-gray-500">{article.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{article.type}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Currently Section */}
        <section className="mb-24">
          <h2 className="text-lg font-medium mb-8">Currently</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="block w-2 h-2 mt-2 mr-4 rounded-full bg-green-400" />
              Working on [Your Current Project]
            </li>
            <li className="flex items-start">
              <span className="block w-2 h-2 mt-2 mr-4 rounded-full bg-blue-400" />
              Reading &quot;The Design of Everyday Things&quot;
            </li>
            <li className="flex items-start">
              <span className="block w-2 h-2 mt-2 mr-4 rounded-full bg-purple-400" />
              Writing about product philosophy
            </li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-lg font-medium mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-medium group-hover:text-gray-600 transition-colors">Senior Product Designer</h3>
                <span className="text-sm text-gray-500">2023—Present</span>
              </div>
              <p className="text-gray-600">Company Name</p>
            </div>
            <div className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-medium group-hover:text-gray-600 transition-colors">Product Designer</h3>
                <span className="text-sm text-gray-500">2020—2023</span>
              </div>
              <p className="text-gray-600">Previous Company</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>© 2025</span>
          <Link 
            href="mailto:your@email.com" 
            className="hover:text-black transition-colors"
          >
            your@email.com
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Blog