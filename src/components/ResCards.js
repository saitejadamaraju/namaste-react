import { CDN_URL } from "../utils/constants";

const ResCards=(props)=>{

   
    const {resData}=props;
 
    const {name,cuisines,avgRating,deliveryTime} = resData?.data;
 
   return (
     <div className="res-card">
       <img
        className="res-logo"
        src={CDN_URL+resData.data.cloudinaryImageId}
        alt="res-logo"
       />
       <h4>{name}</h4>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{deliveryTime} minutes</h4>
     </div>
 
   )
 }

 export default ResCards;