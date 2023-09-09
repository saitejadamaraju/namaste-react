import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategories=({data,showItems,setshowIndex,setcloseIndex,resData})=>{

   
   const [isOpen,setIsOpen]=useState(null); 
//    console.log("data is",data);
   const itemCards=data.itemCards ? data.itemCards:data?.categories[0]?.itemCards
   //console.log("itemcards are",itemCards); 

   const handleClick=()=>{
      
      if(showItems===true)  
        setcloseIndex();
      else
        setshowIndex();
   }


    return(
        <>
        
        <div data-testid="category" className=" w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between my-4 cursor-pointer" onClick={()=>{
                
                handleClick();
              
            }}>
                <span className="font-semibold">{data.title}({itemCards.length})</span>
                <span>⬇</span>
            </div>
            
            {showItems && <ItemList key={data.title} items={data.itemCards ? data.itemCards: data?.categories[0]?.itemCards} resData={resData}></ItemList>}
                     
        </div>
        
        </>

    );
}

export default RestaurantCategories;