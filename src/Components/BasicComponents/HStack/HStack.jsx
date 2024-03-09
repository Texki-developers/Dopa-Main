import React from 'react';
import { IDivProps } from '../../../types/components/basic/basicTypes.data';

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
