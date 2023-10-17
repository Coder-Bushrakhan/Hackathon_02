import Shop from "./Shop";


const Type = ({ params }: { params: { type: string } }) => {



    return (
        <div className="container">
            <Shop params={params} />
        </div>
    )
}
export default Type;