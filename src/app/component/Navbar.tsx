import Image from "next/image";
import Link from "next/link";
import Datepage from "./Date";
import NavButton from "./NavButton";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-white py-3 text-black sm:py-4">
      <nav>
        {/* Main Navbar */}
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 lg:px-6">
          {/* Logo and Title */}
          <Link href="/" className="min-w-0">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="shrink-0 rounded-xl bg-green-600 p-2 sm:rounded-2xl sm:p-3">
                <Image
                  src="/logo-icon.png"
                  alt="বাজার দর লোগো"
                  width={50}
                  height={50}
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                  priority
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-black sm:text-3xl lg:text-4xl">
                  বাজার দর
                </h2>

                <div className="text-xs sm:text-sm">
                  <Datepage />
                </div>
              </div>
            </div>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <NavButton />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-3 border-t border-gray-200 sm:mt-4">
          <div className="container mx-auto px-4 lg:px-6">
            <NavLink />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
