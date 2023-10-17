import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import {Menu } from "lucide-react";
import Link from "next/link";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Search } from "lucide-react";

export default function Nav() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col lg:flex-row items-center p-5 mb-2">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="./">
          <Image src="/logo.jpg" alt="logo" height={80} width={80} />
          <h1 className="font-extrabold text-2xl font-bold">ValuBridge</h1>
        </a>
      
        <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">

          <li className="hidden lg:block"> <Link href={"men"} className=" mr-5 hover:text-gray-900">Men</Link></li>
          <li className="hidden lg:block"> <Link href={"women"} className="mr-5 hover:text-gray-900">Women</Link></li>
          <li className="hidden lg:block"> <Link href="./ " className="mr-5 hover:text-gray-900">Kids</Link></li>
          <li className="hidden lg:block"> <Link href={"./"} className="mr-5 hover:text-gray-900">All products</Link></li>
          </ul>
          <div className="relative mx-auto hidden lg:block">
            <Input
              type="search"
              placeholder="Search"
              className="flex-grow focus:outline-none"
            />
          </div>

          <div className=" hidden lg:flex items-center flex justify-evenly rounded-full h-10 w-10 bg-black text-white">
            <ShoppingBag/>
          </div>

 <div className="bg-white block flex items-center flex justify-center lg:hidden ">
<Sheet>
  <SheetTrigger><Menu /></SheetTrigger>
  <SheetContent>
  <ul className=" flex-row space-y-10">

<li> <Link href="./" className="mr-5 mt-5 hover:text-black">Men</Link></li>
<li> <Link href="./" className="mr-5 mt-5 hover:text-black">Women</Link></li>
<li> <Link href="./" className="mr-5 mt-5 hover:text-black">Kids</Link></li>
<li> <Link href="./" className="mr-5 mt-5 hover:text-black">All products</Link></li>
</ul>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

</div> 

        
      </div>
    </header>
  );
}
