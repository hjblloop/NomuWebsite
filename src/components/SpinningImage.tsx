import React from "react";

interface SpinningImageProps {
  src: string;
  alt?: string;
  className?: string;
  speed?: "slow" | "medium" | "fast";
}

const SpinningImage: React.FC<SpinningImageProps> = ({ src, alt = "", className = "" , speed = "slow"}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`spin-${speed} ${className}`}
    />
  );
};

export default SpinningImage;