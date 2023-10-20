"use client"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

const Slugcomponent = ({
    image,
}: string | string[] | StaticImageData | any) => {
    const [path, setpath] = useState("");
    return (
        <div className="container">
            <div className="mx-10">
                <Image src={path ? path : image} alt=" ecommerce" height={350} width={550} />
            </div>
            <div className="flex items-center justify-evenly mx-auto mt-4">

                        {
                            image && 
                            <Image src={image} alt="shirt1.0" height={60} width={60}/>
                        }
            </div>
        </div>
    );
};
export default Slugcomponent;