"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const NavButton = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div>
      {user ? (
        <Link href={"/upDateProfile"} className="flex items-center gap-3">
          {user.image && (
            <img
              src={user.image  || 'https://via.placeholder.com/'}
              alt={user.name ?? "User"}
              width={50}
              height={50}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-lg object-cover"
            />
          )}

          <h4>{user.name}</h4>
        </Link>
      ) : (
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
      )}
    </div>
  );
};

export default NavButton;
