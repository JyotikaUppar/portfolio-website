import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      
      {/* Moving Gradient Orbs */}
      <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
      <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-bounce-slow delay-1000"></div>
      
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float-${i % 3}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        ></div>
      ))}
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-1/2 w-16 h-16 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-emerald-400/30 animate-spin-slow delay-2000"></div>
      <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-purple-400/20 rotate-45 animate-pulse"></div>
    </div>
  );
};

export default AnimatedBackground;
