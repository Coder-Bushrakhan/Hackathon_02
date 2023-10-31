import Image from "next/image";
import { useState } from "react";

const Slugcomponent = () => {
 const [path, setpath] = useState("/shirt1.webp");

 const handleClick = (src:any) => {
    setpath(src);
 };

 return (
    <div className="container">
      <div className="mx-10">
        {/* main image */}
        <Image src={path} alt=" ecommerce" height={350} width={550} />
      </div>
      {/* side images */}
      <div className="flex items-center justify-evenly mx-auto mt-4">
        <Image
          src="/shirt1.1.webp"
          alt=" ecommerce"
          height={60}
          width={60}
          onClick={() => handleClick("/shirt1.1.webp")}
        />
        <Image
          src="/shirt1.2.webp"
          alt=" ecommerce"
          height={60}
          width={60}
          onClick={() => handleClick("/shirt1.2.webp")}
        />
      </div>
    </div>
 );
};

export default Slugcomponent;