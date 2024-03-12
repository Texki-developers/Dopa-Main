import React from 'react';

export default function VStack({ children, className, ...events }) {
  return (
    <div className={`flex flex-col ${className || ''}`} {...events}>
      {children}
    </div>
  );
}
