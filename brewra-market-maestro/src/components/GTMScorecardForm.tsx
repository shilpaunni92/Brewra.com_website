import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { FileText, Send } from 'lucide-react';
interface GTMScorecardFormProps {
  children: React.ReactNode;
}
const GTMScorecardForm = ({
  children
}: GTMScorecardFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    currentMarket: '',
    targetMarket: '',
    productDescription: '',
    annualRevenue: '',
    teamSize: '',
    expansionTimeline: '',
    primaryChallenge: '',
    specificGoals: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('GTM Scorecard Request - ' + formData.companyName);
      const body = encodeURIComponent(`
GTM Scorecard Request

Company Information:
- Company Name: ${formData.companyName}
- Contact Name: ${formData.contactName}
- Email: ${formData.email}

Market Information:
- Current Market: ${formData.currentMarket}
- Target Market: ${formData.targetMarket}
- Product/Service: ${formData.productDescription}

Business Metrics:
- Annual Revenue: ${formData.annualRevenue}
- Team Size: ${formData.teamSize}
- Expansion Timeline: ${formData.expansionTimeline}

Goals & Challenges:
- Primary Challenge: ${formData.primaryChallenge}
- Specific Goals: ${formData.specificGoals}

Please send me the GTM Readiness Scorecard based on this information.
      `);
      const mailtoLink = `mailto:team@brewra.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      toast({
        title: "Request Sent!",
        description: "Your GTM Scorecard request has been prepared. Please send the email to complete your request."
      });
      setIsOpen(false);

      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        currentMarket: '',
        targetMarket: '',
        productDescription: '',
        annualRevenue: '',
        teamSize: '',
        expansionTimeline: '',
        primaryChallenge: '',
        specificGoals: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-50 border-2 border-blue-100">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-blue-900">
            <FileText className="h-6 w-6 text-blue-600" />
            GTM Readiness Scorecard
          </DialogTitle>
        </DialogHeader>
        
        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="px-0 pb-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-t-lg border border-blue-100">
            <p className="text-gray-700 font-medium">
              Help us understand your business so we can provide a comprehensive GTM readiness assessment.
            </p>
          </CardHeader>
          <CardContent className="px-0 bg-white border-x border-b border-blue-100 rounded-b-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Company Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName" className="text-gray-700 font-medium">Company Name *</Label>
                    <Input id="companyName" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" />
                  </div>
                  <div>
                    <Label htmlFor="contactName" className="text-gray-700 font-medium">Your Name *</Label>
                    <Input id="contactName" value={formData.contactName} onChange={e => handleInputChange('contactName', e.target.value)} required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" />
                </div>
              </div>

              {/* Market Information */}
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  Market Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currentMarket" className="text-gray-700 font-medium">Current Market/Geography *</Label>
                    <Input id="currentMarket" value={formData.currentMarket} onChange={e => handleInputChange('currentMarket', e.target.value)} placeholder="e.g., India, US West Coast" required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" />
                  </div>
                  <div>
                    <Label htmlFor="targetMarket" className="text-gray-700 font-medium">Target Expansion Market *</Label>
                    <Input id="targetMarket" value={formData.targetMarket} onChange={e => handleInputChange('targetMarket', e.target.value)} placeholder="e.g., US Enterprise, SEA" required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="productDescription" className="text-gray-700 font-medium">Product/Service Description *</Label>
                  <Textarea id="productDescription" value={formData.productDescription} onChange={e => handleInputChange('productDescription', e.target.value)} placeholder="Brief description of your B2B SaaS product or service" required className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" rows={3} />
                </div>
              </div>

              {/* Business Metrics */}
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Business Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="annualRevenue" className="text-gray-700 font-medium">Annual Revenue Range</Label>
                    <Select onValueChange={value => handleInputChange('annualRevenue', value)}>
                      <SelectTrigger className="mt-1 bg-white text-black border-gray-300 focus:ring-0 focus:ring-offset-0 focus:border-blue-500">
                        <SelectValue placeholder="Select revenue range" className="text-gray-500" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300 z-50">
                        <SelectItem value="under-100k" className="text-black hover:bg-gray-100 focus:bg-gray-100">Under $100K</SelectItem>
                        <SelectItem value="100k-500k" className="text-black hover:bg-gray-100 focus:bg-gray-100">$100K - $500K</SelectItem>
                        <SelectItem value="500k-1m" className="text-black hover:bg-gray-100 focus:bg-gray-100">$500K - $1M</SelectItem>
                        <SelectItem value="1m-5m" className="text-black hover:bg-gray-100 focus:bg-gray-100">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m" className="text-black hover:bg-gray-100 focus:bg-gray-100">$5M - $10M</SelectItem>
                        <SelectItem value="over-10m" className="text-black hover:bg-gray-100 focus:bg-gray-100">Over $10M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="teamSize" className="text-gray-700 font-medium">Team Size</Label>
                    <Select onValueChange={value => handleInputChange('teamSize', value)}>
                      <SelectTrigger className="mt-1 bg-white text-black border-gray-300 focus:ring-0 focus:ring-offset-0 focus:border-blue-500">
                        <SelectValue placeholder="Select team size" className="text-gray-500" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-300 z-50">
                        <SelectItem value="1-10" className="text-black hover:bg-gray-100 focus:bg-gray-100">1-10 employees</SelectItem>
                        <SelectItem value="11-25" className="text-black hover:bg-gray-100 focus:bg-gray-100">11-25 employees</SelectItem>
                        <SelectItem value="26-50" className="text-black hover:bg-gray-100 focus:bg-gray-100">26-50 employees</SelectItem>
                        <SelectItem value="51-100" className="text-black hover:bg-gray-100 focus:bg-gray-100">51-100 employees</SelectItem>
                        <SelectItem value="101-250" className="text-black hover:bg-gray-100 focus:bg-gray-100">101-250 employees</SelectItem>
                        <SelectItem value="over-250" className="text-black hover:bg-gray-100 focus:bg-gray-100">Over 250 employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="expansionTimeline" className="text-gray-700 font-medium">Expansion Timeline</Label>
                  <Select onValueChange={value => handleInputChange('expansionTimeline', value)}>
                    <SelectTrigger className="mt-1 bg-white text-black border-gray-300 focus:ring-0 focus:ring-offset-0 focus:border-blue-500">
                      <SelectValue placeholder="When do you plan to expand?" className="text-gray-500" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300 z-50">
                      <SelectItem value="immediate" className="text-black hover:bg-gray-100 focus:bg-gray-100">Immediately (0-3 months)</SelectItem>
                      <SelectItem value="short-term" className="text-black hover:bg-gray-100 focus:bg-gray-100">Short-term (3-6 months)</SelectItem>
                      <SelectItem value="medium-term" className="text-black hover:bg-gray-100 focus:bg-gray-100">Medium-term (6-12 months)</SelectItem>
                      <SelectItem value="long-term" className="text-black hover:bg-gray-100 focus:bg-gray-100">Long-term (12+ months)</SelectItem>
                      <SelectItem value="exploring" className="text-black hover:bg-gray-100 focus:bg-gray-100">Just exploring options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Goals & Challenges */}
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  Goals & Challenges
                </h3>
                <div>
                  <Label htmlFor="primaryChallenge" className="text-gray-700 font-medium">Primary Challenge *</Label>
                  <Select onValueChange={value => handleInputChange('primaryChallenge', value)}>
                    <SelectTrigger className="mt-1 bg-white text-black border-gray-300 focus:ring-0 focus:ring-offset-0 focus:border-blue-500">
                      <SelectValue placeholder="What's your biggest challenge?" className="text-gray-500" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300 z-50">
                      <SelectItem value="market-research" className="text-black hover:bg-gray-100 focus:bg-gray-100">Market research and validation</SelectItem>
                      <SelectItem value="local-presence" className="text-black hover:bg-gray-100 focus:bg-gray-100">Lack of local presence</SelectItem>
                      <SelectItem value="lead-generation" className="text-black hover:bg-gray-100 focus:bg-gray-100">Lead generation and prospecting</SelectItem>
                      <SelectItem value="cultural-differences" className="text-black hover:bg-gray-100 focus:bg-gray-100">Understanding cultural differences</SelectItem>
                      <SelectItem value="regulatory-compliance" className="text-black hover:bg-gray-100 focus:bg-gray-100">Regulatory and compliance issues</SelectItem>
                      <SelectItem value="pricing-strategy" className="text-black hover:bg-gray-100 focus:bg-gray-100">Pricing strategy for new market</SelectItem>
                      <SelectItem value="partner-network" className="text-black hover:bg-gray-100 focus:bg-gray-100">Building partner network</SelectItem>
                      <SelectItem value="sales-process" className="text-black hover:bg-gray-100 focus:bg-gray-100">Establishing sales processes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="specificGoals" className="text-gray-700 font-medium">Specific Goals & Expectations</Label>
                  <Textarea id="specificGoals" value={formData.specificGoals} onChange={e => handleInputChange('specificGoals', e.target.value)} placeholder="What do you hope to achieve with market expansion? Any specific targets or milestones?" className="mt-1 bg-white text-black placeholder:text-gray-500 border-gray-300 focus:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none" rows={3} />
                </div>
              </div>

              <div className="flex gap-4 pt-4 bg-gradient-to-r from-blue-50 to-gray-50 p-4 rounded-lg border border-blue-100">
                <Button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200">
                  {isSubmitting ? 'Preparing Request...' : <>
                      <Send className="mr-2 h-4 w-4" />
                      Get My GTM Scorecard
                    </>}
                </Button>
                <Button type="button" onClick={() => setIsOpen(false)} className="px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>;
};
export default GTMScorecardForm;