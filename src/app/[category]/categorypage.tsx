"use client"
import ProductCard from "../productCard";
import { useAppSelector } from "../store/hooks";
const Categorypage=({params}:{params:{category: string} })=>{
    const product=useAppSelector((state)=>state.products)

    console.log(params);
    
    
    
    
    const productlist= product.filter((val)=>val.category==params.category );


    return(
        <div>
        
   {/* <h1 className="mt-10 mb-10 text-4xl font-sans font-bold underline">{params.category }</h1> */}

<div className="container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mx-auto">
{productlist.map((item : any,i)=>(
<ProductCard key={i} src={item.image} alt={item.title} title = {item.title} description={item.description} price={item.price} category={item.category} slug={item.slug} />

  ))
  
   
  }

</div>
</div>
    )
}
export default Categorypage;