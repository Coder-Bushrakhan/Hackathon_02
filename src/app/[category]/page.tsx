import Categorypage from "./categorypage";



const Category=({params}:{params:{category: string} } )=>
{



    return(
     <div className="container">
<Categorypage params={params}/>
     </div>
)
}
export default Category;