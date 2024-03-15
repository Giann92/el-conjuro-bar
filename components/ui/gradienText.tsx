import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({ children }) => {
  return (
    <span className="gradient-text">
      {children}
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(#0000ff 0%, #00ffff 90%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </span>
  );
};

export default GradientText;



