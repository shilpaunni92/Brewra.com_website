

import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useParams } from 'react-router-dom';
import Logo from '@/components/Logo';

const MediaArticle = () => {
  const { slug } = useParams();

  // Article data - in a real app this would come from a database or API
  const articles = {
    'brewra-datamotive-partnership': {
      title: "Brewra Ventures Partners with Datamotive to Revolutionize Enterprise Cloud Migration and Disaster Recovery Solutions",
      image: "/lovable-uploads/c4192138-568e-42bb-82bf-a81478c10560.png",
      date: "February 19, 2025",
      content: `NEW JERSEY, Feb. 11, 2025 /PRNewswire/ -- Brewra Ventures has announced an exciting partnership with Datamotive to expand its market presence in the US enterprise customer segments. This collaboration underscores a shared commitment to driving innovation in cloud technology and empowering businesses with cutting-edge solutions.

Brewra Ventures, a pioneer in Outcome-as-a-Service (OaaS), empowers B2B SaaS and AI-first companies to succeed in global markets. Its expertise aligns business outcomes with innovative sales strategies, driving growth and value for partners.

Dave Banerjee, Founder of Brewra, stated: "Partnering with Datamotive opens new opportunities for enterprises needing effective cloud migration and disaster recovery solutions. It combines our results-driven approach with Datamotive's advanced technology for transformative business benefits."

According to Gartner, Inc., by 2028, 75% of enterprises will prioritize the backup of software-as-a-service (SaaS) applications as a critical requirement, compared to 15% in 2024.

Datamotive, recognized for its innovative cloud migration and disaster recovery technology, offers enterprises exceptional flexibility and efficiency. Their proprietary technology facilitates the seamless migration of workloads between any cloud with minimal downtime. With a 10-minute cutover SLA, Datamotive guarantees that businesses achieve operational efficiency and reliability.

"This expansion is a testament to our commitment to driving innovation in the cloud space; we are dedicated to empowering businesses in this region with the most advanced cloud migration and disaster recovery solutions, ensuring their success in the cloud and contributing to the overall growth of this vibrant digital ecosystem." — Sameer Zaveri, Founder of Datamotive.

About Datamotive: Datamotive is a leading cloud migration and disaster recovery solution provider. Its technology allows businesses to transfer workloads between cloud platforms quickly and efficiently. This ensures operational continuity while reducing downtime and costs, positioning it as a trustworthy partner in the digital transformation journey. For more information about Datamotive and its innovative solutions, visit www.datamotive.io

About Brewra Ventures: Brewra Ventures, headquartered in India, is a global sales execution firm that offers Outcome-as-a-Service (OaaS) to B2B SaaS and AI companies. Founded in 2022 by Sunny Ghosh and Dave Banerjee, Brewra helps businesses achieve measurable outcomes through strategic sales execution and industry expertise. With a robust presence in the US, EU, Scandinavia, Southeast Asia, and the GCC region, Brewra assists businesses in realizing their global ambitions by aligning solutions with market demands with its feet-on-the-street and AI genie approach.`
    },
    'mojro-brewra-partnership': {
      title: "Mojro Technologies signs up Brewra Ventures for Southeast Asia expansion, Revolutionizing Logistics Planning & Optimization Across Emerging Markets",
      image: "/lovable-uploads/98ff2728-4e6e-45e9-b923-fccd37526b89.png",
      date: "January 17, 2025",
      content: `BANGALORE, India, Jan. 17, 2025 /PRNewswire/ -- Mojro, the logistics SaaS platform that helps in planning and optimization of logistics for FMCG, CPG, Dairy, CEP and eCommerce companies across the world, has announced a GTM/Sales partnership with Brewra Ventures, an Outcome-based Global Sales Execution firm for Southeast Asia.

Commenting on the partnership, Sunny Ghosh, Founder & CEO at Brewra, said, "We are excited to partner with Mojro. Their platform is trusted by several enterprises such as Unilever, Godrej Consumer Products, Asian Paints, Lactalis Group and empowers them to drive efficiencies in their transportation, enabling new logistics models and realize cost savings. This partnership is in line with our focus of activating & selling for outstanding Indian enterprise B2B SaaS software in global markets."

Currently, more than 30 brands from industries such as CPG, Dairy, FMCG, and eCommerce utilize Mojro to plan, digitalize and automate their logistics operations.

This partnership will be augmenting Mojro's existing customer portfolio in SEA region which includes names such as, Century Pacific Food, Inc & Lineclear and harness Brewra's regional network and feet on the street sales and vertical experts' team from the region to tap into the growing demand of logistics planning software in countries such as Malaysia, Indonesia, Thailand, Philippines and Vietnam.

"This Southeast Asia expansion isn't just about world class technology as an offering — we aim to bring best practices from around the world related to logistics optimization and logistics delivery models to the market," said Kishan Aswath, CEO of Mojro.

About Mojro

Provider of SaaS-enabled logistics transportation planning and optimization solutions for enterprises. Mojro offers multi-dimensional optimization using heuristic algorithms, significantly increasing optimization within a finite compute time. The platform is highly scalable and customizable and caters to all the miles of the supply chain (both procurement & distribution). More information at https://www.mojro.com

About Brewra Ventures

Brewra Ventures is an Outcome based Global Sales Execution firm headquartered in Bangalore India with offices in the United States, EU, Scandinavia, Southeast Asia and the GCC region. Founded in 2022 by Sunny Ghosh and Dave Banerjee, Brewra engages with outstanding Enterprise B2B SaaS and AI first companies in activating and selling their products in global markets with team of sales and vertical experts. More thoughts at https://www.brewra.com/`
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-brewra-dark text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <a href="/media" className="text-brewra-blue hover:text-brewra-blue-dark">
            Back to Media
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brewra-dark text-white">
      {/* Navigation */}
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
              <a href="/blogs" className="hover:text-brewra-blue transition-colors">Blogs</a>
              <a href="/media" className="text-brewra-blue font-medium">Media</a>
              <a href="/#cases" className="hover:text-brewra-blue transition-colors">Case Studies</a>
              <a href="/#contact" className="hover:text-brewra-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <a href="/media" className="inline-flex items-center text-brewra-blue hover:text-brewra-blue-dark transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Media
            </a>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-gray-300 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaArticle;

