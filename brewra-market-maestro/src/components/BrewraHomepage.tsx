import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronRight, ChevronDown, Mail, Phone, ExternalLink, Target, Users, Zap, Network, Brain, ArrowRight, Search, FileText, Rocket, TrendingUp, Shield, Globe, Clock, Trophy, Contact, MapPin } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import ProcessedImage from './ProcessedImage';
import GTMScorecardForm from './GTMScorecardForm';
import Logo from './Logo';

const BrewraHomepage = () => {
  const services = [{
    title: 'Market Research & Validation',
    description: 'We map your market and test demand before you invest.',
    icon: Target,
    details: 'Deep market analysis, competitor mapping, demand validation, and ICP refinement to ensure product-market fit before expansion.',
    deliverables: ['Market sizing report', 'Competitor analysis', 'ICP validation', 'Entry strategy roadmap'],
    cta: 'Get Market Assessment',
    ctaAction: 'mailto:team@brewra.com?subject=Market Research Request&body=Hi, I\'d like to discuss market research and validation for expanding into new markets.'
  }, {
    title: 'GTM Strategy & Sales Playbooks',
    description: 'Targeting, messaging, and workflows tailored to your ICP.',
    icon: Users,
    details: 'Custom go-to-market strategies with proven sales playbooks, messaging frameworks, and conversion-optimized workflows.',
    deliverables: ['GTM strategy document', 'Sales playbooks', 'Messaging framework', 'Conversion workflows'],
    cta: 'Build GTM Strategy',
    ctaAction: 'mailto:team@brewra.com?subject=GTM Strategy Request&body=Hi, I\'d like to develop a go-to-market strategy and sales playbooks for my B2B SaaS.'
  }, {
    title: 'Local Sales Talent & Execution',
    description: 'In-market SDRs and BDRs who get deals done.',
    icon: Zap,
    details: 'Experienced local sales professionals who understand cultural nuances and have established networks in your target markets.',
    deliverables: ['Dedicated SDR/BDR team', 'Local market expertise', 'Cultural adaptation', 'Network access'],
    cta: 'Hire Sales Team',
    ctaAction: 'mailto:team@brewra.com?subject=Sales Team Request&body=Hi, I\'d like to discuss hiring local sales talent for market expansion.'
  }, {
    title: 'Channel & Partner Development',
    description: 'Build indirect sales models that scale.',
    icon: Network,
    details: 'Strategic partnership development, channel partner recruitment, and scalable indirect sales models for sustainable growth.',
    deliverables: ['Partner strategy', 'Channel recruitment', 'Partnership agreements', 'Scaling frameworks'],
    cta: 'Develop Partnerships',
    ctaAction: 'mailto:team@brewra.com?subject=Partnership Development Request&body=Hi, I\'d like to explore channel and partner development opportunities.'
  }, {
    title: 'AI-Enhanced Sales Support',
    description: 'Our specialists are backed by Brewra.AI agents for speed and precision.',
    icon: Brain,
    details: 'Human expertise amplified by AI agents for prospecting, lead qualification, messaging optimization, and sales process automation.',
    deliverables: ['AI-powered prospecting', 'Lead qualification', 'Message optimization', 'Process automation'],
    cta: 'Explore AI Support',
    ctaAction: 'mailto:team@brewra.com?subject=AI Sales Support Request&body=Hi, I\'d like to learn more about AI-enhanced sales support services.'
  }, {
    title: 'Brewra.ai',
    description: 'Discover our AI-powered GTM Dream team: 9 specialized agents for 10x workflow.',
    icon: Brain,
    details: 'Access our full suite of AI agents including market mappers, script builders, ICP validators, and conversion optimizers.',
    deliverables: ['9 specialized AI agents', 'Workflow automation', 'Performance analytics', '24/7 availability'],
    link: 'https://www.brewra.ai/',
    cta: 'Try Brewra.AI',
    ctaAction: 'https://www.brewra.ai/'
  }];
  const workingSteps = [{
    step: 'Discover',
    description: 'Deep market analysis and readiness assessment to validate your expansion opportunity.',
    icon: Search,
    details: 'We start by thoroughly understanding your business, current market position, and expansion goals. Our team conducts comprehensive market research, competitor analysis, and readiness assessment to ensure you\'re prepared for successful international expansion.',
    deliverables: ['Market opportunity assessment', 'Competitor landscape mapping', 'Readiness scorecard evaluation', 'Risk and opportunity analysis'],
    duration: '2-3 weeks',
    cta: 'Start Discovery Phase',
    ctaAction: 'mailto:team@brewra.com?subject=Discovery Phase Request&body=Hi, I\'d like to begin the discovery phase for market expansion. Please send me details about the assessment process.'
  }, {
    step: 'Plan',
    description: 'Custom go-to-market strategy with detailed execution roadmap and resource allocation.',
    icon: FileText,
    details: 'Based on discovery insights, we develop a comprehensive GTM strategy tailored to your target market. This includes positioning, messaging, channel strategy, partnership opportunities, and detailed execution timelines with clear milestones.',
    deliverables: ['Complete GTM strategy document', 'Market entry roadmap', 'Resource allocation plan', 'Success metrics framework'],
    duration: '3-4 weeks',
    cta: 'Get GTM Blueprint',
    ctaAction: 'mailto:team@brewra.com?subject=GTM Strategy Request&body=Hi, I\'d like to discuss developing a comprehensive go-to-market strategy for my target market expansion.'
  }, {
    step: 'Launch',
    description: 'Execute market entry with local specialists and AI-powered outreach campaigns.',
    icon: Rocket,
    details: 'Our experienced local teams and AI agents work together to execute your market entry strategy. We handle everything from initial outreach and lead generation to partnership development and deal closure, ensuring rapid market penetration.',
    deliverables: ['Local SDR team deployment', 'AI-powered prospecting campaigns', 'Partnership outreach execution', 'Initial customer acquisition'],
    duration: '6-12 weeks',
    cta: 'Launch Market Entry',
    ctaAction: 'mailto:team@brewra.com?subject=Market Launch Request&body=Hi, I\'m ready to launch into my target market. Please provide details about the execution process and timeline.'
  }, {
    step: 'Scale',
    description: 'Optimize performance and establish sustainable growth systems for long-term success.',
    icon: TrendingUp,
    details: 'Once initial traction is achieved, we focus on scaling your operations. This includes optimizing conversion rates, expanding successful channels, building local partnerships, and establishing processes for sustainable growth in the new market.',
    deliverables: ['Performance optimization report', 'Scaling strategy recommendations', 'Partnership network expansion', 'Sustainable growth systems'],
    duration: 'Ongoing',
    cta: 'Scale Operations',
    ctaAction: 'mailto:team@brewra.com?subject=Scaling Strategy Request&body=Hi, I\'d like to discuss scaling strategies for sustainable growth in my new market. Please share your approach.'
  }];
  const caseStudies = [{
    title: 'Indian B2B SaaS → US Market',
    quote: 'Booked three enterprise clients in the US within six months.',
    details: 'A hybrid standalone cloud workload migration and recovery platform, B2B SaaS needed to activate the US enterprise market in just 90 days. With limited leads, no local presence, and stalled sales conversations, ARR growth was at risk. We stepped in to redefine the ICP, recalibrate pricing, and deploy a fresh go-to-market strategy. While our local team built on-the-ground trust, Agentic AI streamlined pipeline decisions and uncovered high-intent accounts. Within weeks, B2B SaaS shifted from reactive selling to outcome-as-a-service execution. In under 90 days, the US market started to open up.',
    results: ['20,000+ ICPs engaged', '6-month market entry timeline', '40% faster than industry average', 'Established partner network']
  }, {
    title: 'South East Asian Market entry for logistic B2B SaaS',
    quote: 'They gave us an entry plan, local SDR, and helped lock our first three enterprise deal.',
    details: 'A logistics B2B SaaS platform, needed to activate the SEA enterprise market with minimal spend. But with no leads, no local presence, and stagnant sales, growth was stalling. We stepped in to conduct market analysis, refining the ICP, realigning GTM, and deploying on-ground sales with Agentic AI. In weeks, B2B SaaS cut through gatekeepers, built key partnerships, and opened enterprise doors, while keeping execution lean and focused.',
    results: ['First partner deal closed', 'Local SDR team established', 'Trade compliance processes', 'Multi-country market entry in 120 days']
  }];
  const growthData = [{
    month: 'Month 1',
    clients: 0,
    revenue: 0
  }, {
    month: 'Month 2',
    clients: 1,
    revenue: 25
  }, {
    month: 'Month 3',
    clients: 2,
    revenue: 55
  }, {
    month: 'Month 4',
    clients: 4,
    revenue: 120
  }, {
    month: 'Month 5',
    clients: 7,
    revenue: 210
  }, {
    month: 'Month 6',
    clients: 12,
    revenue: 350
  }];
  const differentiators = [{
    feature: 'Human-first, not just AI-first',
    benefit: 'Relationships and context come first'
  }, {
    feature: 'On-the-ground local presence',
    benefit: 'Faster learning, better results'
  }, {
    feature: 'Powered by Brewra.AI',
    benefit: 'You get precision, speed, and scale'
  }, {
    feature: 'Only B2B SaaS clients',
    benefit: 'We deeply understand your model'
  }];
  const customerLogos = [{
    name: 'Mondee',
    logo: '/lovable-uploads/b2b1574b-c246-42b8-90d9-494f42b34d69.png'
  }, {
    name: 'IS Solutions',
    logo: '/lovable-uploads/de72e1b2-0593-41bd-ad86-1b5b0223c20b.png'
  }, {
    name: 'Datamotive',
    logo: '/lovable-uploads/5711ab0c-780d-4c7c-9a92-e0e6b931ef39.png'
  }, {
    name: 'Volio Technologies',
    logo: '/lovable-uploads/47fef418-f04d-4f37-aa8f-2fcc75a47302.png'
  }, {
    name: 'ZeroTag',
    logo: '/lovable-uploads/69a21c69-f71f-49b6-b26e-fdc20512aa3f.png'
  }, {
    name: 'MOJRO',
    logo: '/lovable-uploads/a010c2e6-e3ea-445f-9828-20574e623836.png'
  }];
  const pressLogos = [{
    name: 'Business Today',
    logo: '/lovable-uploads/967723c3-afaa-4c26-8499-d32bc4cab941.png'
  }, {
    name: 'Business Standard',
    logo: '/lovable-uploads/ed81ab8c-229b-4918-90ee-488c1e8046d7.png'
  }, {
    name: 'India Today',
    logo: '/lovable-uploads/74fdae4a-9a6d-417d-87e3-6d647274c810.png'
  }, {
    name: 'CIO',
    logo: '/lovable-uploads/8a4ed1f0-8918-4df6-963c-2d7ddf2447c1.png'
  }, {
    name: 'The Tribune',
    logo: '/lovable-uploads/699eeb1e-efac-412a-8c6c-5a552e1c1c8c.png'
  }, {
    name: 'Yahoo Finance',
    logo: '/lovable-uploads/2096d236-1208-4d31-b394-8deae4b1d887.png'
  }];
  const brewraDifference = [{
    title: 'Engaged contacts across ICPs',
    description: '450,000+',
    icon: Contact,
    details: '450,000+'
  }, {
    title: 'AI-Powered Precision',
    description: 'Human expertise amplified by our proprietary AI agents for faster, more accurate results.',
    icon: Globe,
    details: 'Brewra.AI agents handle prospecting, lead qualification, and messaging optimization at scale.'
  }, {
    title: 'Proven B2B SaaS Focus',
    description: 'Exclusively serving B2B SaaS companies means we deeply understand your unique challenges.',
    icon: Shield,
    details: 'Every strategy, playbook, and process is tailored specifically for SaaS business models.'
  }, {
    title: 'Rapid Market Entry',
    description: 'Get from market research to first customers faster than traditional expansion methods.',
    icon: Clock,
    details: 'Our streamlined process and established networks accelerate your time to market.'
  }];
  const globalOffices = [{
    country: 'United States',
    address: '38803 Altura St',
    city: 'Fremont, CA 94536',
    email: 'Team@Brewra.com'
  }, {
    country: 'India',
    address: '107 West, Trinity Woods, Sarjapur Road',
    city: 'Bangalore 560102',
    email: 'Team@Brewra.com'
  }, {
    country: 'Philippines',
    address: '61 Verona Drive, Camella Alabang 2D, Brgy Putatan',
    city: 'Muntinlupa City',
    email: 'Team@Brewra.com'
  }, {
    country: 'EU/Scandinavia',
    address: 'Hamborggata 5',
    city: '3018 Drammen, Norway',
    email: 'Team@Brewra.com'
  }, {
    country: 'Malaysia',
    address: 'Jalan Kemuning Indah 32/143, Kemuning Utama Indah',
    city: '40460, Selangor, Malaysia',
    email: 'Team@Brewra.com'
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
              <a href="/about" className="hover:text-brewra-blue transition-colors">About Us</a>
              <a href="#services" className="hover:text-brewra-blue transition-colors">Services</a>
              <a href="#approach" className="hover:text-brewra-blue transition-colors">Approach</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-brewra-blue transition-colors flex items-center gap-1">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-slate-800 border border-slate-200 shadow-lg">
                  <DropdownMenuItem className="hover:bg-brewra-blue hover:text-white transition-colors">
                    <a href="/blogs" className="w-full hover:text-brewra-blue transition-colors">Blogs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/media" className="w-full">Media</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#cases" className="hover:text-brewra-blue transition-colors">Case Studies</a>
              <a href="#contact" className="hover:text-brewra-blue transition-colors">Contact</a>
              <a href="https://calendly.com/brewra_ventures/discovery-call" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue">
                  Book a Strategy Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Win New Markets with{' '}
              <span className="gradient-text">Local Experts Backed by AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">Brewra Ventures helps B2B SaaS companies break into new markets with tailored strategy, local presence, and execution powered by an in-house agentic AI platform.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="https://calendly.com/brewra_ventures/discovery-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glow-button bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  📞 Book a Strategy Call
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <GTMScorecardForm>
                <Button variant="outline" size="lg" className="border-2 border-white/20 text-white px-8 py-4 text-lg font-semibold rounded-xl bg-[brewra-blue-light] bg-fuchsia-700 hover:bg-fuchsia-600">🗂️ Get Your GTM Scorecard</Button>
              </GTMScorecardForm>
            </div>
            <div className="mt-16 relative">
              <div className="relative overflow-hidden rounded-xl">
                <img src="/lovable-uploads/053ec15a-d0c9-4ddd-bbbd-6ab8803bb35d.png" alt="Global network with business professionals" className="mx-auto max-w-full h-auto rounded-xl shadow-2xl" />
                <div className="absolute inset-0 rounded-xl" style={{
                background: 'radial-gradient(ellipse at center, transparent 60%, rgba(15, 23, 42, 0.8) 100%)'
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Changed to light slate */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 gradient-text">Trusted by B2B SaaS Scaleups Across the Globe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-slate-200 p-6 shadow-lg">
              <CardContent>
                <blockquote className="text-xl italic text-slate-700">"Booked zero to three enterprise clients in the US within six months."  - Fredrik Wendt, Digital, France.</blockquote>
              </CardContent>
            </Card>
            <Card className="bg-white border-slate-200 p-6 shadow-lg">
              <CardContent>
                <blockquote className="text-xl italic text-slate-700">"Having feet on the street in a remote country is super advantage. Highly recommended." - Rohit Gupta, Crux-labs, Singapore.</blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 gradient-text">What We Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end market expansion services designed specifically for B2B SaaS companies ready to scale globally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExternalLink = service.link;
            return <Card key={index} className="bg-white border-slate-200 hover:border-brewra-blue/40 transition-all duration-300 hover:scale-105 h-full group shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        {service.title}
                        {isExternalLink && <ExternalLink className="h-4 w-4 text-brewra-blue" />}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                      <p className="text-slate-500 text-sm mb-4">{service.details}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-brewra-blue mb-2">Key Deliverables:</h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((item, idx) => <li key={idx} className="text-slate-500 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-brewra-blue rounded-full"></div>
                              {item}
                            </li>)}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a href={isExternalLink ? service.ctaAction : service.ctaAction} target={isExternalLink ? '_blank' : undefined} rel={isExternalLink ? 'noopener noreferrer' : undefined}>
                        <Button variant="outline" size="sm" className="w-full bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue font-semibold">
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need a custom solution or want to discuss your specific market expansion challenge?
            </p>
            <a href="mailto:team@brewra.com?subject=Custom Solution Request&body=Hi, I'd like to discuss a custom market expansion solution for my B2B SaaS company.">
              <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl">
                📞 Book a Custom Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Approach Section - Changed to light slate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="approach">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 gradient-text">How We Work</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At Brewra, we combine boots on the ground with brains in the cloud.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {workingSteps.map((item, index) => {
            const IconComponent = item.icon;
            return <Card key={index} className="bg-white border-slate-200 hover:border-brewra-blue/40 transition-all duration-300 hover:scale-105 h-full group shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-brewra-blue to-brewra-blue-light rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          
                          <h3 className="text-2xl font-bold text-brewra-blue">{item.step}</h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                      <p className="text-slate-500 text-sm mb-4">{item.details}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-brewra-blue mb-2">Key Deliverables:</h4>
                        <ul className="space-y-1 mb-3">
                          {item.deliverables.map((deliverable, idx) => <li key={idx} className="text-slate-500 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-brewra-blue rounded-full"></div>
                              {deliverable}
                            </li>)}
                        </ul>
                        <div className="text-xs text-slate-400 mb-4">
                          <span className="font-medium">Timeline:</span> {item.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <a href={item.ctaAction}>
                        <Button variant="outline" size="sm" className="w-full bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue font-semibold">
                          {item.cta}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
          
          <div className="text-center mb-8">
            <div className="relative">
              <img alt="AI-powered team collaboration" src="/lovable-uploads/3676c625-9917-4c0d-95bf-9dc30dd2ddcc.jpg" className="mx-auto max-w-full h-auto rounded-xl object-fill" />
              
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-slate-500 leading-relaxed"></p>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-slate-500 italic max-w-4xl mx-auto mb-6">
              Behind every Brewra expert is a digital GTM team of AI agents: market mappers, script builders, ICP validators, and more.
            </p>
            <a href="mailto:team@brewra.com?subject=Complete Process Consultation&body=Hi, I'd like to understand the complete market expansion process and discuss how Brewra can help with each phase of my B2B SaaS expansion journey.">
              <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl">
                📞 Discuss Complete Process
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-brewra-dark bg-[brewra-blue-light]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Client Success Stories</h2>
            
            <div className="mb-12">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-xl font-semibold text-brewra-blue mb-6 text-center">Typical Client Growth Timeline</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={growthData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{
                      fill: '#94a3b8',
                      fontSize: 12
                    }} />
                      <YAxis axisLine={false} tickLine={false} tick={{
                      fill: '#94a3b8',
                      fontSize: 12
                    }} />
                      <Line type="monotone" dataKey="clients" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{
                      r: 4,
                      stroke: '#3b82f6',
                      strokeWidth: 2
                    }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center mt-4">
                  <p className="text-gray-300 text-sm">Enterprise clients acquired over 6 months</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {caseStudies.map((caseStudy, index) => <Collapsible key={index}>
                <Card className="bg-brewra-dark-card border-brewra-blue/20 overflow-hidden">
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <h3 className="text-2xl font-bold text-brewra-blue mb-2">{caseStudy.title}</h3>
                          <blockquote className="text-lg text-gray-300 italic">
                            "{caseStudy.quote}"
                          </blockquote>
                        </div>
                        <ChevronRight className="h-6 w-6 text-brewra-blue transition-transform group-data-[state=open]:rotate-90" />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 border-t border-white/10 pt-6">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {caseStudy.details}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-brewra-blue mb-4">Key Results:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {caseStudy.results.map((result, resultIndex) => <div key={resultIndex} className="bg-brewra-dark/50 rounded-lg p-4 border border-brewra-blue/10">
                              <span className="text-gray-200 font-medium">{result === 'First partner deal closed' && resultIndex === 0 && index === 1 ? '8000+ ICPs engaged' : result}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>)}
          </div>
        </div>
      </section>

      {/* Customer Logos Marquee Section - Changed to light slate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Trusted by Leading B2B SaaS Companies</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join these innovative companies that have successfully expanded into new markets with Brewra
            </p>
          </div>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee space-x-12 rounded-none">
              {/* First set of logos */}
              {customerLogos.map((customer, index) => <div key={`first-${index}`} className="flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200 p-6 hover:border-brewra-blue/30 transition-all duration-300 group shadow-md">
                    <img src={customer.logo} alt={`${customer.name} logo`} className="w-32 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>)}
              {/* Duplicate set for seamless loop */}
              {customerLogos.map((customer, index) => <div key={`second-${index}`} className="flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200 p-6 hover:border-brewra-blue/30 transition-all duration-300 group shadow-md">
                    <img src={customer.logo} alt={`${customer.name} logo`} className="w-32 h-16 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>)}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-6">
              Ready to join these successful companies in expanding globally?
            </p>
            <a href="mailto:team@brewra.com?subject=Market Expansion Consultation&body=Hi, I'd like to discuss how Brewra can help my B2B SaaS company expand into new markets like the companies shown on your website.">
              <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl">
                📞 Discuss Your Expansion
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Image Section - Changed to light slate */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <img src="/lovable-uploads/f49b83f7-0765-4b4e-8438-f28da38ce97f.png" alt="Brewra Difference Statistics" className="mx-auto max-w-full h-auto rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Why Brewra Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[brewra-dark-card] bg-brewra-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-10 gradient-text text-[brewra-dark-card] text-brewra-blue">Why Brewra?</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-brewra-blue/20">
                  <th className="text-center py-4 px-6 text-xl font-bold text-brewra-blue">What Sets Us Apart</th>
                  <th className="text-center py-4 px-6 text-xl font-bold text-brewra-blue">What It Means for You</th>
                </tr>
              </thead>
              <tbody>
                {differentiators.map((item, index) => <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300 font-medium text-center">{item.feature}</td>
                    <td className="py-4 px-6 text-gray-300 text-center">{item.benefit}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* As Featured On Section - Changed to light slate */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 gradient-text">As Featured On</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our expertise and success stories have been recognized by leading industry publications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {pressLogos.map((press, index) => <div key={index} className="flex items-center justify-center group">
                <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200 p-6 hover:border-brewra-blue/30 transition-all duration-300 group-hover:scale-105 shadow-md">
                  <img src={press.logo} alt={`${press.name} logo`} className="w-full h-16 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>)}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-500 mb-6">
              Want to learn more about our featured success stories and industry recognition?
            </p>
            <a href="mailto:team@brewra.com?subject=Press and Media Inquiry&body=Hi, I'd like to learn more about Brewra's media coverage and featured success stories.">
              <Button size="lg" className="bg-brewra-blue hover:bg-brewra-blue-dark text-white px-8 py-4 text-lg font-semibold rounded-xl">
                📰 View Press Coverage
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brewra-blue-dark to-brewra-blue" id="book">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Enter New Markets with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Let's build your international GTM engine — with strategy, execution, and smart AI support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:team@brewra.com?subject=Strategy Call Request&body=Hi, I'd like to schedule a strategy call to discuss market expansion opportunities for my B2B SaaS company.">
              <Button size="lg" className="glow-button bg-white text-brewra-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                📞 Book a Call
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <GTMScorecardForm>
              <Button variant="outline" size="lg" className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-xl bg-fuchsia-700 hover:bg-fuchsia-600"> 🗂️ Get your GTM Scorecard</Button>
            </GTMScorecardForm>
          </div>
        </div>
      </section>

      {/* Footer - Changed to light slate */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-100 border-t border-slate-200" id="contact">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-brewra-blue" />
                <a href="mailto:team@brewra.com" className="text-slate-600 hover:text-brewra-blue transition-colors">
                  team@brewra.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-brewra-blue" />
                <a href="tel:+16502697937" className="text-slate-600 hover:text-brewra-blue transition-colors">
                  +1 650 269 7937
                </a>
              </div>
            </div>
            
            <div className="mb-6">
              <a href="https://brewra.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-slate-500 hover:text-brewra-blue transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span>Powered in part by Brewra.AI</span>
              </a>
            </div>
          </div>

          {/* Global Offices Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Our Global Offices</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center">
              {globalOffices.map((office, index) => <Card key={index} className="bg-white border-slate-200 hover:border-brewra-blue/40 transition-all duration-300 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="h-5 w-5 text-brewra-blue mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-brewra-blue mb-2">{office.country}</h4>
                        <p className="text-slate-600 text-sm mb-1">{office.address}</p>
                        <p className="text-slate-600 text-sm mb-3">{office.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
          
          <div className="text-center">
            <nav className="flex flex-wrap justify-center items-center space-x-6 mb-8">
              <a href="/about" className="text-slate-500 hover:text-brewra-blue transition-colors">About Us</a>
              <span className="text-slate-400">|</span>
              <a href="#services" className="text-slate-500 hover:text-brewra-blue transition-colors">Services</a>
              <span className="text-slate-400">|</span>
              <a href="#approach" className="text-slate-500 hover:text-brewra-blue transition-colors">Approach</a>
              <span className="text-slate-400">|</span>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-500 hover:text-brewra-blue transition-colors flex items-center gap-1">
                  Resources
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-slate-800 border border-slate-200 shadow-lg">
                  <DropdownMenuItem className="hover:bg-brewra-blue hover:text-white transition-colors">
                    <a href="/blogs" className="w-full hover:text-brewra-blue transition-colors">Blogs</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/media" className="w-full">Media</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-slate-400">|</span>
              <a href="#cases" className="text-slate-500 hover:text-brewra-blue transition-colors">Case Studies</a>
              <span className="text-slate-400">|</span>
              <a href="#contact" className="text-slate-500 hover:text-brewra-blue transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <div className="mb-4 flex items-center justify-center space-x-2">
              <Logo size={42} />
              <span className="text-2xl font-bold gradient-text px-[5px]">Brewra Ventures</span>
            </div>
            <p className="text-slate-500">© 2025 Brewra Ventures. Market expansion for B2B SaaS.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default BrewraHomepage;
