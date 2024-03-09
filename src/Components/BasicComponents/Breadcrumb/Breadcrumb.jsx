import React from 'react';
import HStack from '../HStack/HStack';
import Link from 'next/link';

export default function Breadcrumb({
  items,
  seperator,
}) {
  return (
    <HStack className='gap-1'>
      {items.map((item, index) => (
        <Link
          href={item.path || ''}
          className={`text-basic flex gap-1 ${items.length - 1 === index ? '' : 'after:content-["/"]'} ${items.length - 1 === index && 'pointer-events-none font-semibold after:content-[""]'}`}
        >
          {item.title}
        </Link>
      ))}
    </HStack>
  );
}
