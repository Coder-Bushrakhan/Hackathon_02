import * as React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="container ">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  ">
        <div className=" ">
          <Link href="./men">
            <Image src="/men.webp" height={900} width={900}alt="hero"  />
          </Link>
        </div>
        <div>
          <Link href="./women">
            <Image src="/women.webp" height={900} width={900}alt="hero" />
          </Link>
        </div>
      </div>

    
    </div> 
  );
}
