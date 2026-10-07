import React from "react";
import  Image  from "next/image";
import Datepage from "./Date";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="bg-white py-4  text-black">
      <nav>
        <div className="flex gap-4 items-center justify-between container mx-auto"><div className="flex gap-4 items-center">
         <div className="p-3 bg-green-600 w-fit rounded-2xl"><Image src="/logo-icon.png" alt="logo" width={50} height={50} /></div>

          <div>
            <h2 className="text-4xl font-black">বাজার দর</h2>
            <Datepage/>
            </div>
        </div>
        <div className="grid gap-3 grid-cols-2 w-fit">
            <button className="btn  bg-white text-black border-none">সাইন ইন </button>
            <button className="btn bg-green-600 border-none">সাইন আপ </button>
        </div>
        </div>
        <NavLink/>
      </nav>
    </div>
  );
};

export default Navbar;
