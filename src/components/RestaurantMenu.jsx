import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {useRestaurantMenu} from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {
    
    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer></Shimmer>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    
}