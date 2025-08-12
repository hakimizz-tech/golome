import React, { useMemo, useState, type CSSProperties } from 'react';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { cld } from '@/lib/cloudinary';
import { auto, limitFit } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';


interface OptimizedImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  highQuality?: boolean;
  onError?: (error: Error) => void;
  fallbackSrc?: string;
  style?: CSSProperties; // Added style prop support
}

export function OptimizedImage({ 
  publicId, 
  alt, 
  width, 
  height,
  className = '',
  objectFit = 'cover',
  highQuality = true,
  onError,
  fallbackSrc,
  style // Include style in destructured props
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  // Memoize the image configuration
  const img = useMemo(() => {
    const imageConfig = cld
      .image(publicId)
      .format('auto');
    
    // Set quality - reduced from 100% to 90% for better optimization
    if (highQuality) {
      imageConfig.quality(90); // Changed from 100 to 90 for better balance of quality/size
    } else {
      imageConfig.quality('auto:best');
    }
    
    if (width && height) {
      if (objectFit === 'cover') {
        // Use crop mode that preserves visual quality
        imageConfig.resize(auto().gravity(autoGravity()).width(width).height(height));
      } else {
        // For non-cover images, use limitFit to maintain aspect ratio
        imageConfig.resize(limitFit().width(width).height(height));
      }
    }
    
    return imageConfig;
  }, [publicId, width, height, objectFit, highQuality]);

  // Error handling
  const handleError = (e: Event) => {
    console.error(`Failed to load image: ${publicId}`, e);
    setHasError(true);
    if (onError) onError(new Error(`Failed to load image: ${publicId}`));
  };

  // If there's an error and a fallback is provided, show the fallback
  if (hasError && fallbackSrc) {
    return (
      <img 
        src={fallbackSrc} 
        alt={alt} 
        className={className}
        width={width}
        height={height}
        style={style} // Pass style to fallback image
      />
    );
  }

  // If there's an error and no fallback, show a placeholder
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}
        style={{ width: width || '100%', height: height || '300px', ...style }} // Merge styles
      >
        Image unavailable
      </div>
    );
  }

  return (
    <AdvancedImage
      cldImg={img}
      plugins={[
        placeholder({ mode: 'predominant-color' }),
        lazyload({
          rootMargin: '50px 0px',
          threshold: 0.01
        }),
        responsive()
      ]}
      alt={alt}
      className={className}
      style={style} // Pass style to AdvancedImage
      onError={handleError as unknown as React.ReactEventHandler}
    />
  );
}