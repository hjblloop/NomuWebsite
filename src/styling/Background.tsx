import React from 'react';

interface GradientBackgroundProps {
  colors?: string[];
  gradientHeight?: string;
  children?: React.ReactNode;
}

 const GradientBackground: React.FC<GradientBackgroundProps> = (
  {
   children,}
  ) => {
  return (
    <div className="relative min-h-screen glow-circle flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default GradientBackground;