import Image from "next/image";
import Link from "next/link";
import Datepage from "./Date";
import NavButton from "./NavButton";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-white py-4 text-black">
      <nav>
        <div className="container mx-auto flex items-center justify-between gap-4">
          <Link href="/">
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-2xl bg-green-600 p-3">
                <Image
                  src="/logo-icon.png"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>

              <div>
                <h2 className="text-4xl font-black">বাজার দর</h2>
                <Datepage />
              </div>
            </div>
          </Link>

          <div className="grid w-fit grid-cols-2 gap-3">
           <NavButton/>
          </div>
        </div>

        <NavLink />
      </nav>
    </div>
  );
};

export default Navbar;