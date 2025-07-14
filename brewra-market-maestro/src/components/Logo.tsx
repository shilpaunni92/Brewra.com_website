
import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 32, className = "" }: LogoProps) => {
  return (
    <img 
      src="/lovable-uploads/29738efe-4440-48fd-b526-61f7da1211e3.png"
      alt="Brewra Ventures Logo"
      width={size} 
      height={size}
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;
