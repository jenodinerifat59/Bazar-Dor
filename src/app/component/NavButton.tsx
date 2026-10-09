'use client';

import Link from 'next/link';

const NavButton = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/sign-in"
        className="btn border-none bg-white text-black hover:bg-gray-200"
      >
        সাইন ইন
      </Link>

      <Link
        href="/sign-up"
        className="btn border-none bg-green-600 text-white hover:bg-green-700"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default NavButton;