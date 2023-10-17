import Image from "next/image"
import Link from "next/link"
export default function Shopbycat()
{
    return(
<div className="container">


   <h1 className="mt-10 mb-10 text-center text-4xl font-sans font-bold underline">Shop By Category</h1>
   {/* div for men cat  */}
<div className="flex-wrap lg:flex flex justify-evenly space-x-4 mb-4 "> 
    <div className="mb-4  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-700 ...">
   <Link href={"/abc/shirt"}   > <Image src="/cat1.webp" height={300}width={300}alt=""/> 
  </Link>  </div>
      
    <div className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-700 ...">
    <Link href={"/abc/chino"}   > <Image src="/cat3.webp" height={300}width={300}alt=""/> 
    </Link> </div>
    <div className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-700 ...">
    <Link href={"/abc/tunic"}   ><Image src="/cata6.webp" height={300}width={300}alt=""/> 
    </Link></div>
    <div className="mb-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-700 ...">
    <Link href={"/abc/trouser"}   ><Image src="/cata7.webp" height={300}width={300}alt=""/> 
    </Link></div>
    
</div >


  
</div>
    )}