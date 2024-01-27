import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.info;

    return(
        <>
        <div className="m-4 p-4 w-52 rounded-xl bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>
            <h4>Rs {costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
        </>  
    );
}

export default RestaurantCard; 