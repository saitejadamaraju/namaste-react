import { CDN_URL } from "../utils/constants";

const ResCards=(props)=>{

    //console.log("props are",props.resData);
    const {resData}=props;
 
    const {name,cuisines,avgRating,deliveryTime} = resData;

    //console.log("name is ",name);
 
   return (
     <div className="w-[300px] p-4 m-4 bg-gray-300 rounded-lg hover:bg-gray-400 hover:border-2 hover:border-black dark:bg-slate-500">
      <div className="m-2">
      <img
        className="rounded-lg "
        src={CDN_URL+resData.cloudinaryImageId}
        alt="res-logo"
       />
      </div>
      
       <h4 className="font-bold">{name}</h4>
       <h4 >{cuisines.join(", ")}..</h4>
       <h4 >{avgRating} stars</h4>
       <h4 >{deliveryTime} minutes</h4>
     </div>
 
   )
 }

 export const withVegLabel=(ResCards)=>{

  return (props)=>{
    return (
      
      <>
     
       <label className="absolute p-2 m-2 bg-green-500 rounded-lg font-bold">vegetarian</label>
       <ResCards {...props}></ResCards>
      </>
    )
  }

 }

 export default ResCards;