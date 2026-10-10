import React from 'react';
import Link from 'next/link';

interface ItemsType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLink = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");
  const data: ItemsType[] = await res.json();

  return (
    <div className="w-full border-b border-gray-300 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto touch-pan-x active:cursor-grabbing whitespace-nowrap py-2 no-scrollbar">
          {data.map((items) => (
            <Link
              href={`/product/${items.slug}`}
              key={items.id}
              className="flex items-center gap-2 cursor-pointer transition-colors hover:text-green-600 shrink-0 text-sm sm:text-base font-medium py-1 select-none"
            >
              <span>{items.icon}</span>
              <span>{items.nameBn}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavLink;