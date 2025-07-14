
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
    <Card className="bg-brewra-dark-card border-brewra-blue/20 hover:border-brewra-blue/40 transition-all duration-300 px-0 my-0 py-0 mx-[10px]">
      <CardContent className="p-8 px-[32px] py-[32px] mx-[40px] my-px">
        <div className="mb-4">
          <span className="inline-block bg-brewra-blue/20 text-brewra-blue text-sm font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6 hover:text-brewra-blue transition-colors cursor-pointer">
          {post.title}
        </h2>
        
        {post.image && (
          <div className="mb-6 mx-[74px] my-[20px] px-0">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
          </div>
        )}
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <Link to={`/blogs/${post.id}`}>
            <Button variant="outline" size="sm" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue">
              Read More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
