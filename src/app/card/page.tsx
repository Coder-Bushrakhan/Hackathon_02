import Cart from "../Cart"
import { Button } from "@/components/ui/button"
export default function Card() {
    return (
        ///main div///
        <div className=" grid lg:grid-cols-3 grid-cols-1">
            {/* cart */}
            <div className="grid col-span-2">
                <Cart title = "Men shirt"  src="/shirt1.webp" price={1500} size="large"/>
            </div>
            {/* order summary */}
            <div className="p-5 bg-slate-50 drop-shadow-lg rounded-xl">
                <h1>
                    Order Summary
                </h1>
                {/* Divider */}
                <div className="divider mt-0 mb-1" >
                </div>
                {/* orders and pricing */}
                <div className="flex justify-between ">
                    <h1>
                        Sub Total
                    </h1>
                    <h1>
                        $1500
                    </h1>
                </div>


                {/* Delivery Charges */}
                <div className="flex justify-between ">
                    <h1>
                        Delivery Charges
                    </h1>
                    <h1>
                        $15
                    </h1>
                </div>

                {/* Services Charges */}
                <div className="flex justify-between ">
                    <h1>
                        Services Charges
                    </h1>
                    <h1>
                        $10
                    </h1>
                </div>
                {/* Divider */}
                <div className="divider mt-0 mb-1" >
                </div>
                {/* Estimated Total */}
                <div className="flex justify-between ">
                    <h1 className="font-bold">
                        Estimated Total
                    </h1>
                    <h1 className="font-bold">
                        $1525
                    </h1>
                </div>
                    <div className=" flex justify-center mt-4 border-2 bg-transparent text-black border-black text-lg font-semibold hover:bg-black hover:text-white">
                    <Button className="text-sm" >Proceed to Check Out </Button>
                </div>
         {/* Divider */}
         <div className="divider mt-2 mb-1" >
                </div>
        <p className="italic font-semibold flex justify-center">
            {`*No Return No Exchange Policy! *`}
        </p>
            </div>


        </div>
    )
}