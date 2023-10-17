import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
export default function Cart({ title, src, price, size }: {
    title: string,
    src: string,
    price: number,
    size: string

}) {
    return (
        <div className="flex p-12">
            <Image src="/shirt1.webp" alt="this is image" height={60} width={100} />
            {/* some info */}
            <div className="px-8 py-8 ">

                <h1>
                    {title}
                </h1>
                <p>
                    size : {size}
                </p>
                <div><p className="font-semibold">
                    Price : ${price}
                </p>
                </div>
                <div className="flex px py-8">
                    <Button variant="outline" className="">

                        <Plus />

                    </Button>
                    <h3 className="ml-3 ">1 </h3>
                    <Button variant="outline" className=" ml-5">
                        <Minus />
                    </Button>

                  
                </div>

            </div>

            <div className="text-red-400 cursor-pointer" >
            <Trash2 />

              
                
                    </div>
        
        </div>
    )
}