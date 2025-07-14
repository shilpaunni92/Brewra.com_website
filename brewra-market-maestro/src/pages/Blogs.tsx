
import React, { useState } from 'react';
import BlogsNavigation from '@/components/BlogsNavigation';
import BlogsHero from '@/components/BlogsHero';
import BlogCard from '@/components/BlogCard';
import BlogsPagination from '@/components/BlogsPagination';
import BlogsComingSoon from '@/components/BlogsComingSoon';

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4; // Show 4 blogs on page 1, then 3 per page after

  const allBlogPosts = [{
    id: 1,
    title: "Why Cultural Intelligence is the Missing Link in Global Sales",
    excerpt: "Understanding cultural nuances is crucial for successful international business expansion. Learn how Cultural Intelligence (CQ) can transform your global sales strategy.",
    author: "Ishani B",
    date: "May 5, 2025",
    readTime: "7 min read",
    category: "Global Sales",
    image: "/lovable-uploads/67b1dc24-00fa-4373-b2dc-118f68495cdb.png"
  }, {
    id: 2,
    title: "Different types of GTM strategies companies can adopt",
    excerpt: "So, you've got a great product or service, and you're ready to take over the world. But how do you get it out there and make it a success? That's where a go-to-market (GTM) strategy comes in.",
    author: "Dave Banerjee",
    date: "December 24, 2024",
    readTime: "8 min read",
    category: "GTM Strategy",
    image: "/lovable-uploads/080b68a8-99c0-4b6b-b11f-002eda1f8643.png"
  }, {
    id: 3,
    title: "Top Recurring GTM Mistakes SaaS Founders Should Avoid",
    excerpt: "The SaaS industry is booming in the current times, and we see B2B SaaS companies rely a lot on GTM strategies to launch and expand their businesses.",
    author: "Dave Banerjee",
    date: "March 21, 2025",
    readTime: "6 min read",
    category: "GTM Strategy",
    image: "/lovable-uploads/11696624-a3e5-4e1f-bafd-32523f4fdb14.png"
  }, {
    id: 4,
    title: "The year 2024 – has been a remarkable year for all of us @BrewraVentures...",
    excerpt: "Our financial growth was negligible in compared to our learnings. We are constantly exploring and rethinking as, \"Adam Grant\" would say...",
    author: "Sunny Ghosh",
    date: "December 26, 2024",
    readTime: "5 min read",
    category: "Company Updates",
    image: "/lovable-uploads/0e2bdea0-da16-4834-bc09-28c4bc6750a1.png"
  }, {
    id: 8,
    title: "AI in Sales: A Digital Assistant or a Human Touch Replacement?",
    excerpt: "Artificial Intelligence (AI) has undeniably revolutionized various industries, and sales is no exception.",
    author: "Dave Banerjee",
    date: "August 10, 2024",
    readTime: "10 min read",
    category: "AI & Sales",
    image: "/lovable-uploads/117cddb6-aeed-4b91-b30a-b2f9ca1194f1.png"
  }, {
    id: 6,
    title: "How to find your Total Addressable Market ( TAM)",
    excerpt: "Startups often face unique challenges in their early stages of growth. Limited resources, intense competition, and uncertainty in the market can make it difficult to gain traction and scale rapidly.",
    author: "Dave Banerjee",
    date: "October 10, 2024",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/lovable-uploads/c95c035b-09dd-478e-8c95-994746a8a4f2.png"
  }, {
    id: 7,
    title: "How do you develop a GTM Strategy for your B2B SaaS?",
    excerpt: "Go-to-Market (GTM) strategy serves as the roadmap for a company's journey to successfully introduce and sell its products or services in the marketplace.",
    author: "Dave Banerjee",
    date: "December 27, 2024",
    readTime: "12 min read",
    category: "GTM Strategy",
    image: "/lovable-uploads/f0478eae-3e9d-4ac5-a2c0-26013c79c1b4.png"
  }, {
    id: 9,
    title: "Part I: Acquiring 1 to 10 enterprise SaaS customers in a foreign land",
    excerpt: "It's not easy to go into a foreign market with a value prop and acquire customers. Be it SaaS or ai. Different customer categories exist in a market within different concentric circles.",
    author: "Sunny Ghosh",
    date: "June 21, 2024",
    readTime: "6 min read",
    category: "International Sales",
    image: "/lovable-uploads/18209a55-a737-45c5-90e2-8f459ca67679.png"
  }, {
    id: 10,
    title: "Part II: Acquiring 1 to 10 enterprise SaaS customers in a foreign land",
    excerpt: "In my earlier blog, named, \"Acquiring 1 to 10 enterprise SaaS customers in a foreign land\" - I wrote how to go about generating a targeted account list.",
    author: "Sunny Ghosh",
    date: "August 7, 2024",
    readTime: "5 min read",
    category: "International Sales",
    image: "/lovable-uploads/f6a38d11-9796-45cc-9549-605f15cc9d15.png"
  }, {
    id: 11,
    title: "Why have a GTM Partner for growing businesses globally?",
    excerpt: "So, you want to expand your business and take over the world? Well, that's awesome, but it's more complicated than it sounds, especially when trying to enter new markets. That's where a GTM (Go-To-Market) Partner comes in.",
    author: "Dave Banerjee",
    date: "June 19, 2024",
    readTime: "8 min read",
    category: "GTM Strategy",
    image: "/lovable-uploads/f4d34343-1d84-47a5-8c79-672567c02f2c.png"
  }, {
    id: 12,
    title: "Imagine buying qualified leads at $ 100 for the SEA market",
    excerpt: "Who says cold emails are dead? The more time we spend listening and communicating with our prospects, the better we get every day.",
    author: "Sunny Ghosh",
    date: "June 20, 2023",
    readTime: "4 min read",
    category: "Lead Generation",
    image: "/lovable-uploads/fd58eeb1-5cee-4423-835b-8215db38c111.png"
  }, {
    id: 13,
    title: "Secret sauce for recruiting your anchor customers",
    excerpt: "In this article, we are going to explain what we undergo doing during our Customer Discovery Service and why this is important for early-stage B2B SaaS startups, especially during the global expansion phase.",
    author: "Sunny Ghosh",
    date: "June 21, 2023",
    readTime: "5 min read",
    category: "Customer Discovery",
    image: "/lovable-uploads/d0cf4978-88b5-4a10-9740-e4797a04e608.png"
  }, {
    id: 15,
    title: "Market Expansion in the US or UK",
    excerpt: "Expanding your B2B SaaS business into new markets can be an expensive, thrilling, but intimidating journey, particularly when it comes to highly competitive markets such as the US or UK.",
    author: "Dave Banerjee",
    date: "June 19, 2024",
    readTime: "8 min read",
    category: "Market Expansion",
    image: "/lovable-uploads/b777b728-d3d2-4409-9d8b-65e6dfaa7d86.png"
  }, {
    id: 16,
    title: "Have you gained Product-Market-Fit? What are the key indicators",
    excerpt: "Often we get this wrong. Getting to your first 10 customers is not equivalent to achieving product market fit. But, it's the right step towards your journey.",
    author: "Sunny Ghosh",
    date: "June 21, 2024",
    readTime: "8 min read",
    category: "Product-Market Fit",
    image: "/lovable-uploads/786ec2d9-b9e6-432a-b2a3-388c1a8830fb.png"
  }];

  // Calculate pagination - now supports 4 pages
  const totalPages = 4;
  
  // Get current page blogs
  let currentBlogs;
  if (currentPage === 1) {
    currentBlogs = allBlogPosts.slice(0, 4);
  } else if (currentPage === 2) {
    currentBlogs = allBlogPosts.slice(4, 8);
  } else if (currentPage === 3) {
    currentBlogs = allBlogPosts.slice(8, 12); // 4 blogs on page 3
  } else if (currentPage === 4) {
    currentBlogs = allBlogPosts.slice(12, 14); // 2 blogs on page 4
  } else {
    currentBlogs = [];
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-brewra-dark text-white">
      <BlogsNavigation />
      <BlogsHero />
      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {currentBlogs.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <BlogsPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          
          <BlogsComingSoon />
        </div>
      </section>
    </div>
  );
};

export default Blogs;
