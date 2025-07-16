
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="bg-brewra-dark-card border-brewra-blue/20 hover:border-brewra-blue/40 transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block bg-brewra-blue/20 text-brewra-blue text-sm font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 hover:text-brewra-blue transition-colors cursor-pointer line-clamp-3">
          {post.title}
        </h2>
        
        {post.image && (
          <div className="mb-4 sm:mb-6">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg" 
            />
          </div>
        )}
        
        <p className="text-gray-300 mb-6 leading-relaxed flex-grow line-clamp-4">
          {post.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span className="truncate">{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span className="whitespace-nowrap">{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span className="whitespace-nowrap">{post.readTime}</span>
            </div>
          </div>
          
          <Link to={`/blogs/${post.id}`} className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue w-full sm:w-auto"
            >
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;