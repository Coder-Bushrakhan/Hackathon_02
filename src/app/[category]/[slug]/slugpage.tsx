"use client"
import Slugcomponent from "@/app/slugComponent"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Heart } from "lucide-react"
import { useAppSelector } from "@/app/store/hooks"

const Slugpage = ({ params }: { params: { slug: string } }) => {
    const product = useAppSelector((state) => state.products)
    const slug = product.filter((val) => val.slug == params.slug);

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <Slugcomponent image={slug[0].image} />
                <div className="mt-2 p-20">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">

                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {slug[0].title}                        
                    </h1>
                    <div className="flex mb-4">

                        <span className="text-gray-600 ml-3">4 Reviews</span>

                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                            <a className="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p className="leading-relaxed">
                       
{slug[0].description}
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3"> {slug[0].color.map((item,i)=>
                            <button key={i} className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" 
                            
                        style={{backgroundColor:item}}    
                            />
                        
                            
                            )} </span>
                           
                        </div>
                        <div className="flex ml-6 items-center">
                         
                            <div className="relative">
                                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                {slug[0].size.map((item,i)=>
                                
                                <option key={i}>{item}</option>

                                )}
                                    



                                </select>

                                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>



                            </div>

                            {/* icons starts here */}

                            <Button variant="outline" className="ml-5">

                                <Plus />

                            </Button>
                            <h3 className="ml-3 "> {slug[0].qty}    </h3>
                            <Button variant="outline" className=" ml-5">
                                <Minus />
                            </Button>
                        </div>

                    </div>


                    {/* add to acrd and buy now */}
                    <div className="flex justify-evenly">
                        <span className="title-font font-medium text-2xl text-gray-900">
                            {/* {slug[0].price} */}
                        </span>
                        <Button variant="outline" className="">
                            <Heart />
                            Add To Card

                        </Button>
                        <Button variant="outline" className="">
                            <ShoppingCart />
                            Buy Now

                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slugpage;