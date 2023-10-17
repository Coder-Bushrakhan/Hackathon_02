"use client"

import Slugpage from "./slugpage";
const Slug =({params}:{params:{slug: string} })=>{




    return(
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
<Slugpage params={params}/>
</section>

        </div>
    )
}
export default Slug;