import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCart from "./ProductCart";

const Navbar = () => {
  return (
    <nav className="flex w-full">
      <Link href="/">
        <Image 
        src="/assets/images/logo1.avif"
        alt='nav-logo'
        width={50}
        height={30}
        className="object-contain mx-4 my-2 rounded-full"
         />
      </Link>
      <div className="nav-list-container  w-full flex justify-end text-[#413E65] ">
        <ul className="flex justify-center items-center " >
            <Link href='/'><li className="mx-7">Home</li></Link>
            <Link href='/about'><li className="mx-7">About</li></Link>
            <Link href='/products'><li className="mx-7 ">Products</li></Link>
            <Link href='/contact'><li className="mx-7 ">Contact</li></Link>
            <Link href='/signin'><li className="mx-7">Sign In</li></Link>
            <div className="text-2xl mx-7 cursor-pointer "><ProductCart/> </div>
            
            
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
