
import React, { useEffect, useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface ProcessedImageProps {
  originalSrc: string;
  alt: string;
  className?: string;
}

const ProcessedImage: React.FC<ProcessedImageProps> = ({ originalSrc, alt, className }) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Fetch the original image
        const response = await fetch(originalSrc);
        const blob = await response.blob();
        
        // Load as HTMLImageElement
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (err) {
        console.error('Error processing image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke object URLs
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [originalSrc]);

  if (isProcessing) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 rounded-xl ${className}`}>
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brewra-blue mx-auto mb-2"></div>
          <p className="text-gray-600">Processing image...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <img 
        src={originalSrc} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImageUrl || originalSrc} 
      alt={alt} 
      className={className}
    />
  );
};

export default ProcessedImage;
