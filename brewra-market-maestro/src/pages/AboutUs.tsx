import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Users, Brain, Target, Lightbulb } from 'lucide-react';
import Logo from '@/components/Logo';
const AboutUs = () => {
  return <div className="min-h-screen bg-brewra-dark text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brewra-dark/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Logo size={32} />
              <a href="/" className="text-2xl font-bold gradient-text">Brewra Ventures</a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-brewra-blue transition-colors">Home</a>
              <a href="/about" className="text-brewra-blue">About Us</a>
              <a href="/#services" className="hover:text-brewra-blue transition-colors">Services</a>
              <a href="/#approach" className="hover:text-brewra-blue transition-colors">Approach</a>
              <a href="/#cases" className="hover:text-brewra-blue transition-colors">Case Studies</a>
              <a href="/#contact" className="hover:text-brewra-blue transition-colors">Contact</a>
              <a href="mailto:hello@brewra.com?subject=Strategy Call Request&body=Hi, I'd like to schedule a strategy call to discuss market expansion opportunities for my B2B SaaS company.">
                <Button size="sm" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white transition-colors">
                  Book a Strategy Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Us Content */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">About Brewra Ventures</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">We're the bridge between ambitious B2B SaaS/AI first companies and their next growth frontier.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-brewra-blue mb-6">Our Goal</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Brewra, we believe that breaking into new markets shouldn't be a shot in the dark. Every B2B SaaS company deserves local expertise, proven strategies, and the power of AI working together to unlock international growth.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                We've built the only market expansion service that combines boots-on-the-ground local presence with cutting-edge AI agents, specifically designed for B2B SaaS companies ready to scale globally.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of market expansion specialists, sales professionals, and AI engineers work as one integrated unit to turn your international ambitions into measurable results.
              </p>
            </div>
            <div className="relative">
              <img alt="Brewra team collaboration" className="mx-auto max-w-full h-auto rounded-xl shadow-lg" src="/lovable-uploads/aecd682c-232a-4470-85b8-d424767df758.jpg" />
            </div>
          </div>

          <div className="bg-brewra-dark-card rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-brewra-blue mb-6 text-center">The Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                After years of watching brilliant B2B SaaS companies struggle with international expansion, we realized the market needed a fundamentally different approach. Traditional consulting was too slow and generic. Pure AI solutions lacked the human insight that drives real relationships and deals.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                So we built Brewra: the perfect fusion of local market expertise and AI-powered efficiency. We're not just consultants, and we're not just a tech platform. We're your dedicated international growth team, combining the best of human intelligence with cutting-edge AI capabilities.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Every day, we help B2B SaaS companies turn their global ambitions into local success stories. Because great software deserves to reach the world.
              </p>
            </div>
          </div>

          {/* Why We Started Brewra Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-brewra-dark-card border-brewra-blue/20 text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brewra-blue mb-3">Mission</h3>
                <p className="text-gray-300">
                  Unlock winning customer trust and building scale.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-brewra-dark-card border-brewra-blue/20 text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brewra-blue mb-3">Vision</h3>
                <p className="text-gray-300">
                  To inspire organization leaders to dream and achieve beyond boundaries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-brewra-dark-card border-brewra-blue/20 text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brewra-blue mb-3">Values</h3>
                <p className="text-gray-300">
                  Trust, Inspiration, Joy Inclusion, Clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brewra-dark-card border-brewra-blue/20 text-center p-6">
              <CardContent>
                <div className="w-16 h-16 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brewra-blue mb-3">Our Mantra</h3>
                <p className="text-gray-300">
                  Taking Ventures Global.
                </p>
              </CardContent>
            </Card>
          </div>


          {/* Ready to Work Together Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brewra-blue mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Brewra can accelerate your market expansion journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:hello@brewra.com?subject=About Brewra - Strategy Call Request&body=Hi, I'd like to learn more about Brewra and schedule a strategy call to discuss market expansion opportunities for my B2B SaaS company.">
                <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
                  📞 Schedule a Call
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/#services">
                <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
                  Explore Our Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutUs;