
"use client";

import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const NavButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex items-center justify-end">
      {user ? (
        <Link
          href="/upDateProfile"
          className="flex max-w-full items-center gap-2 rounded-xl p-2 transition hover:bg-gray-100 sm:gap-3 sm:px-3"
        >
          {user.image ? (
            <img
              src={user.image}
              alt={user.name ?? "User"}
              width={48}
              height={48}
              referrerPolicy="no-referrer"
              className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-11 sm:w-11"
            />
          ) : (
            <FaUserCircle className="h-9 w-9 shrink-0 text-gray-500 sm:h-11 sm:w-11" />
          )}

          <span className="max-w-[100px] truncate text-sm font-medium sm:max-w-[150px] sm:text-base">
            {user.name ?? "User"}
          </span>

          <FaChevronDown className="h-3 w-3 shrink-0 text-gray-500" />
        </Link>
      ) : (
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="btn btn-sm border-none bg-white px-3 text-xs text-black hover:bg-gray-200 sm:btn-md sm:px-5 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="btn btn-sm border-none bg-green-600 px-3 text-xs text-white hover:bg-green-700 sm:btn-md sm:px-5 sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavButton;
