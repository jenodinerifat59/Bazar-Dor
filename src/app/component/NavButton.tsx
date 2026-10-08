'use client';
import Link from 'next/link';
const NavButton = () => {
    return (
        <div>
             <button className="btn border-none bg-white text-black">
              সাইন ইন
            </button>

            <Link href={"/sign-up"} className="btn border-none bg-green-600">
              সাইন আপ
            </Link>
        </div>
    );
};

export default NavButton;