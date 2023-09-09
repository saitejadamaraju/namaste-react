import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem,computeTotal,setRestaurant } from "../utils/cartSlice";
import { useState } from "react";
import Alert from "./Alert";
const ItemList=({items,resData})=>{

    //console.log("resData in itemList ",resData);
     
    const [showAlert,setShowAlert]=useState(false);
    const selectedRestaurant=useSelector((store)=>store.cart.selectedRestaurant);
    const dispatch=useDispatch();

    const addCartItem=(item)=>
    {
        const { name, price, defaultPrice, description, imageId, isVeg}=item?.card?.info;
         //console.log("name is ",name+" "+price+" "+" "+defaultPrice+" "+description+" "+description+" "+imageId+" "+isVeg);
         //console.log("item is ",item);
        let dataToAdd;
        if(!price) {
             dataToAdd = {...item?.card?.info, price: defaultPrice};
         } else {
            dataToAdd = {...item?.card?.info};
        }

        
        if(selectedRestaurant && selectedRestaurant?.id !== resData?.id) {
               setShowAlert(true);
               //console.log("restaurant is different");
        } else if (selectedRestaurant && selectedRestaurant?.id === resData?.id) {
             dispatch(addItem(dataToAdd));
             dispatch(computeTotal());
        } else {
             dispatch(setRestaurant(resData));
             dispatch(addItem(dataToAdd));
            dispatch(computeTotal());
         }
    }
  

    return (
      <div>
        {items.map((item)=>(
            <div key={item?.card?.info?.id} data-testid="item" className="flex my-2 p-2 border-b-2 border-gray-100">
              <div className="w-9/12 text-left">
                <h3 className="text-sm font-semibold py-2">{item?.card?.info?.name}-  ₹ { (item?.card?.info?.price )? (item?.card?.info?.price/100):(item?.card?.info?.defaultPrice/100)}</h3>
                <p className="text-xs">{item?.card?.info?.description}</p>
              </div> 
              <div className="w-3/12">

                <div className="absolute">
                    <button className="w-16 mt-16 ml-12 font-bold text-white  bg-black rounded-lg"
                    onClick={()=>{
                        addCartItem(item);
                    }}>add</button>
                </div>

                <img
                className="rounded-lg "
                src={CDN_URL+item?.card?.info?.imageId}
                alt="logo"
                />
              </div>
            </div>
        ))}
        {showAlert && (<Alert onClose={()=>setShowAlert(false)}></Alert>)}
      </div>
    );

}


export default ItemList;