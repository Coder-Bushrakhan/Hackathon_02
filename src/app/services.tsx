import { CheckSquare } from "lucide-react"
import { PersonStanding } from "lucide-react"
import { Flag } from "lucide-react"
export default function Services()
{
    return(
<div className="container">

      
<h1 className="mt-10 mb-10 text-center text-4xl font-sans font-bold underline">What We Offer?</h1>
   {/* div for men cat  */}
    <div className="flex flex-wrap sm:-m-4 -mx-12 -mb-10 -mt-4 md:space-y-0 md:flex-row space-y-6 bg-black">
     
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0">
        <CheckSquare size={48}/>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-2xl title-font font-bold mb-3">
          Top Quality Fabric

          </h2>
          <p className="leading-relaxed text-base text-white">
          Sclothers credits its origin to a simple yet industry disrupting realization, "Quality should never be a privilege". We Synthesize the best of both worlds; Quality, Fashionable apparel that does not form craters in your wallet.
          </p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0">
        <PersonStanding size={50} />
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-2xl title-font font-bold bg-black  mb-3">
          All Sizes Matter

          </h2>
          <p className="leading-relaxed text-base text-white">
          The best part of being human is that we are uniquely different. We come in all shapes and sizes; So, every design we make, is always a plus design as well. Everything we create is created with love, style, and equality.
          </p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0">
        <Flag size={48} />
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-2xl title-font font-bold  mb-3">
          Proudly Made in Pakistan

          </h2>
          <p className="leading-relaxed text-white text-base">
          Our textile industry manufactures fabric for the most loved brands over the globe. Thus, we produce every piece of fabric with the same export spirit. Yet, we take pride in being a Pakistani owned and produced entity.
          </p>

        </div>
      </div>
    </div>
  
</div>
    )
}