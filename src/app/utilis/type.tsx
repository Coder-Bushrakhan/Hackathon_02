import { StaticImageData } from "next/image"

export type Product ={
id:number,
title:string,
image:any,
slug: string,
price: number,
category:string;
description:string,
size:string[]
color: string[],
qty:number,
discount? : number,
_type:string,


};
export type Cart ={
    id:number,
    title:string,
    img?:StaticImageData|string | undefined
    slug: string,
    price: number,
    category:string
    description:string,
    size:string[]
    color: string[],
    qty:number,
discount? : number    

}