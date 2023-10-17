import Image from "next/image"
import React from "react"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductCard({src , title ,description , price,category,slug}:
    {src : string,
         alt: string  ,
         title: string ,
         description: string ,
         category:string,
         slug:string,
          price : number})
{
    return(
        
<div className="flex justify-center border-4 w-64 mx-10   mt-10 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-700 ... ">

<Link href={`/${category}/${slug} `}>
<Image src={src} height="250" alt ="shirt1"width="250"/>
<div className="p-4"><h1>
    {title}
</h1>

<p>
    {description}
</p>
<p>
    ${price}
    </p> 

<div className="mt-6 mb-8">
<Button variant="outline">
<ShoppingCart />
Add To Card

</Button>
</div>
</div>
</Link>
</div>

    )
}