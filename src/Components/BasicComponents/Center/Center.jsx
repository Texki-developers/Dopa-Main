import React from 'react';

export default function Center({ children, className, ...events }) {
  return (
    <div
      className={`flex items-center justify-center ${className || ''}`}
      {...events}
    >
      {children}
    </div>
  );
}
