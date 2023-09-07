import {redirect, useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantInfo=()=>{
    
    const {resId}=useParams();

    const [showIndex,setShowIndex]=useState(null);
    
    
    const resInfo=useRestaurantMenu(resId);

    console.log("res Info is",resInfo?.cards[0]?.card?.card?.info);

    
    if(resInfo===null) return <Shimmer></Shimmer>

    const {name,cuisines,costForTwoMessage,avgrating,totalRatingsString,locality}=resInfo?.cards[0]?.card?.card?.info;
    const {deliveryTime}=resInfo?.cards[0]?.card?.card?.info?.sla;
    //const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;   

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
      c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||  
      c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    //console.log("categories are",categories);
    

    return (
        
        <div className="text-center">
        
         <h2 className="font-bold">{name}</h2>  
         <h2 className="font-semibold">{cuisines.join(", ")}-{costForTwoMessage}</h2>  
        
            {categories.map((category,index)=>(
              <RestaurantCategories 
              key={category?.card?.card?.title}
              resData={resInfo?.cards[0]?.card?.card?.info}
              data={category?.card?.card}
              showItems={index===showIndex && true}
              setshowIndex={()=>setShowIndex(index)}
              setcloseIndex={()=>setShowIndex(null)}
              ></RestaurantCategories>
            ))}
        
        </div>
       
       
    );
}

export default RestaurantInfo;