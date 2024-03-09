import React from 'react';

export default function HStack({ children, className, ...events }) {
  return (
    <div
      className={`flex flex-row items-center ${className || ''}`}
      {...events}
    >
      {children}
    </div>
  );
}
