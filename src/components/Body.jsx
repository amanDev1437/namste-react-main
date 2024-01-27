
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () =>{

    const [listOfRestaurants, setListOfRestaurants]= useState([]);

    const[searchText, setSearchText] = useState("");

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {

        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer></Shimmer>
    }

    
    if(onlineStatus === false){
        return(<h1>Looks like your offline!!</h1>);
    }

    return(
        <div className="body">
           <div className="search">
                <input type="text" className="search h-1 m-4 p-4 border border-solid border-black" value={searchText} onChange={(e) =>{
                    setSearchText(e.target.value)
                }}></input>
                <button className="rounded-lg px-4 py-2 bg-green-100 border border-black" onClick={()=>{
                    console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText)
                    );
                    setFilteredRestaurants(filteredRestaurants);
                }}>search</button>

                 <button className="rounded-lg m-4 px-4 py-2 bg-gray-50 border border-black " onClick={() =>{
                let filteredList= listOfRestaurants.filter((res)  => res.info.avgRating>4.3);
                setFilteredRestaurants(filteredList);
                
                }}>Top rated Restaurant</button>
           </div>
           <div className="flex flex-wrap"> 
                {filteredRestaurants.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>
                ))}
           </div> 
        </div>
    );
}

export default Body;