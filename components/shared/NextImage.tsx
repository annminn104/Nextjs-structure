import Image from 'next/image';
import { useRef, useState } from 'react';

interface NextImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  width,
  height,
  quality,
}) => {
  // Create a ref to the image element
  const imageRef = useRef<HTMLImageElement>(null);

  // Use a state variable to track whether the image has finished loading
  const [isLoading, setIsLoading] = useState(true);

  // When the image finishes loading, set isLoading to false
  const handleImageLoad = () => setIsLoading(false);

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
      }}
    >
      {isLoading && (
        <div
          className="animate-shimmer"
          style={{
            width,
            height,
            position: 'absolute',
            inset: 0,
          }}
        />
      )}
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        quality={quality ? quality : 100}
      />
    </div>
  );
};

export { NextImage };
