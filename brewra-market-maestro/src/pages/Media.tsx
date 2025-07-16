import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Play, ExternalLink, Calendar, Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
const Media = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const mediaItems = [{
    id: 1,
    type: "Podcast",
    title: "The Future of B2B SaaS Market Expansion",
    description: "Our CEO discusses the evolving landscape of international B2B SaaS expansion and the role of AI in sales.",
    thumbnail: "/lovable-uploads/3676c625-9917-4c0d-95bf-9dc30dd2ddcc.jpg",
    duration: "45 min",
    date: "December 2024",
    link: "#"
  }, {
    id: 2,
    type: "Webinar",
    title: "GTM Strategies That Actually Work in 2024",
    description: "A deep dive into proven go-to-market strategies for B2B SaaS companies looking to scale internationally.",
    thumbnail: "/lovable-uploads/053ec15a-d0c9-4ddd-bbbd-6ab8803bb35d.png",
    duration: "60 min",
    date: "November 2024",
    link: "#"
  }, {
    id: 3,
    type: "Interview",
    title: "Building Local Sales Teams in New Markets",
    description: "Learn from our experts about the challenges and opportunities of establishing local sales presence.",
    thumbnail: "/lovable-uploads/aecd682c-232a-4470-85b8-d424767df758.jpg",
    duration: "30 min",
    date: "October 2024",
    link: "#"
  }];
  const pressFeatures = [{
    id: 1,
    publication: "Press Release",
    title: "Brewra Ventures Partners with Datamotive to Revolutionize Enterprise Cloud Migration and Disaster Recovery Solutions",
    description: "Brewra Ventures has announced an exciting partnership with Datamotive to expand its market presence in the US enterprise customer segments.",
    date: "February 19, 2025",
    image: "/lovable-uploads/c4192138-568e-42bb-82bf-a81478c10560.png",
    link: "/media/brewra-datamotive-partnership"
  }, {
    id: 2,
    publication: "Press Release",
    title: "Mojro Technologies signs up Brewra Ventures for Southeast Asia expansion, Revolutionizing Logistics Planning & Optimization Across Emerging Markets",
    description: "Mojro, the logistics SaaS platform that helps in planning and optimization of logistics for FMCG, CPG, Dairy, CEP and eCommerce companies across the world, has announced a GTM/Sales partnership with Brewra Ventures, an Outcome-based Global Sales Execution firm for Southeast Asia.",
    date: "January 17, 2025",
    image: "/lovable-uploads/98ff2728-4e6e-45e9-b923-fccd37526b89.png",
    link: "/media/mojro-brewra-partnership"
  }];
  return <div className="min-h-screen bg-brewra-dark text-white">
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
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-brewra-blue hover:bg-brewra-blue-dark text-white transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-sm">
              <div className="px-4 py-6 space-y-4">
                <a href="/" className="block hover:text-brewra-blue transition-colors">Home</a>
                <a href="/about" className="block hover:text-brewra-blue transition-colors">About Us</a>
                <a href="/#services" className="block hover:text-brewra-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="/#approach" className="block hover:text-brewra-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Approach</a>
                <a href="/blogs" className="block hover:text-brewra-blue transition-colors">Blogs</a>
                <a href="/media" className="block text-brewra-blue font-medium">Media</a>
                <a href="/#cases" className="block hover:text-brewra-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
                <a href="/#contact" className="block hover:text-brewra-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            
            
          </div>
        </div>
      </section>

      {/* Video Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        
      </section>

      {/* Press Coverage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">BREWRA NEWS</h2>
          
          <div className="space-y-6">
            {pressFeatures.map(feature => <Card key={feature.id} className="bg-white border-slate-200 hover:border-brewra-blue/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <img src={feature.image} alt={feature.title} className="w-full h-80 lg:h-48 object-cover rounded-lg" />
                    </div>
                    <div className="lg:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="flex items-center space-x-3 text-sm text-slate-500 mb-4">
                          <span className="font-medium">{feature.publication}</span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{feature.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue" onClick={() => window.location.href = feature.link}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            
          </div>
        </div>
      </section>
    </div>;
};
export default Media;