
import React from 'react';
import Logo from '@/components/Logo';

const BlogsNavigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 ml-4">
            <Logo size={48} />
            <span className="text-2xl font-bold gradient-text">Brewra Ventures</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-brewra-blue transition-colors">Home</a>
            <a href="/about" className="hover:text-brewra-blue transition-colors">About Us</a>
            <a href="/#services" className="hover:text-brewra-blue transition-colors">Services</a>
            <a href="/#approach" className="hover:text-brewra-blue transition-colors">Approach</a>
            <a href="/blogs" className="text-brewra-blue font-medium">Blogs</a>
            <a href="/media" className="hover:text-brewra-blue transition-colors">Media</a>
            <a href="/#cases" className="hover:text-brewra-blue transition-colors">Case Studies</a>
            <a href="/#contact" className="hover:text-brewra-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogsNavigation;
