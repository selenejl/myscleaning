import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ light = false, className = "", size = 'md' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: { main: 'text-lg', sub: 'text-[7px]' },
    md: { main: 'text-xl', sub: 'text-[9px]' },
    lg: { main: 'text-4xl', sub: 'text-[14px]' }
  };

  return (
    <div className={`group flex items-center gap-3 transition-all duration-500 ${className}`}>
      {/* Creative Geometric Mark */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0`}>
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Background Shape - Soft geometric 'M' path */}
          <path 
            d="M20 80V35L50 20L80 35V80" 
            stroke={light ? "rgba(255,255,255,0.1)" : "rgba(14, 165, 233, 0.1)"} 
            strokeWidth="12" 
            strokeLinecap="round" 
          />
          
          {/* Main 'M' Path */}
          <path 
            d="M25 75V40L50 25L75 40V75" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={light ? "text-white" : "text-sky-600"}
          />
          
          {/* Inner Fold - Making the M */}
          <path 
            d="M35 75V50L50 40L65 50V75" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={light ? "text-sky-300" : "text-sky-400"}
          />

          {/* The 'Spark' - Minimalist creative element */}
          <circle 
            cx="75" 
            cy="25" 
            r="8" 
            fill={light ? "#7dd3fc" : "#0ea5e9"} 
            className="animate-pulse"
          />
          <circle 
            cx="75" 
            cy="25" 
            r="12" 
            stroke={light ? "#7dd3fc" : "#0ea5e9"} 
            strokeWidth="1" 
            strokeDasharray="4 2"
            className="origin-center animate-[spin_10s_linear_infinite]"
          />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-0.5">
          <span className={`
            font-black tracking-tight
            ${textSizes[size].main}
            ${light ? 'text-white' : 'text-slate-900'}
          `}>
            MYS
          </span>
          {/* Subtle dot to add a "tech/pro" feel */}
          <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-sky-400' : 'bg-sky-500'} mb-1`}></span>
        </div>
        <span className={`
          font-bold tracking-[0.4em] uppercase
          ${textSizes[size].sub}
          ${light ? 'text-sky-300/80' : 'text-slate-500'}
          -mt-1
        `}>
          Cleaning
        </span>
      </div>
    </div>
  );
};

export default Logo;