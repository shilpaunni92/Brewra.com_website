
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface AgentCardProps {
  name: string;
  function: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  capabilities?: string[];
  actionLabel?: string;
  onAction?: () => void;
}

const AgentCard = ({ name, function: agentFunction, icon: Icon, description, capabilities, actionLabel, onAction }: AgentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="card-hover bg-gradient-to-r from-brewra-dark to-brewra-dark-card border-brewra-blue/20 p-6 cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="flex items-center justify-between space-x-6">
        <div className="flex items-center space-x-6 flex-1">
          <Icon className={`h-12 w-12 transition-colors duration-300 flex-shrink-0 ${isHovered ? 'text-brewra-blue' : 'text-brewra-blue/80'}`} />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-brewra-blue mb-2">{name}</h3>
            <p className="text-lg text-gray-300">{agentFunction}</p>
            {description && (
              <p className="text-sm text-gray-400 mt-2">{description}</p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {capabilities && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="border-brewra-blue/30 text-brewra-blue hover:bg-brewra-blue/10">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-brewra-dark-card border-brewra-blue/20 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-brewra-blue text-2xl flex items-center space-x-3">
                    <Icon className="h-8 w-8" />
                    <span>{name}</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-300">{description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-brewra-blue rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{capability}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          {actionLabel && onAction && (
            <Button 
              onClick={onAction}
              className="bg-brewra-blue hover:bg-brewra-blue-dark text-white"
            >
              {actionLabel}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          
          <ExternalLink className={`h-5 w-5 transition-colors duration-300 ${isHovered ? 'text-brewra-blue' : 'text-gray-400'}`} />
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
