import * as React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container ">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <div className=" ">
          <Link href="./men">
            <img src="men.webp" className="sm:max-w-screen-sm rounded-lg" />
          </Link>
        </div>
        <div>
          <Link href="./women">
            <img src="women.webp" className="sm:max-w-screen-sm rounded-lg" />
          </Link>
        </div>
      </div>

    
    </div> 
  );
}
