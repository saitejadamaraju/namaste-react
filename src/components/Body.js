import ResCards,{ withVegLabel} from "../components/ResCards";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{

  //console.log("body rendered");

  const obj=[{lat:"17.385044",lon:"78.486671"},{lat:"12.9715987",lon:"77.5945627"}]

  const [ListOfRestaturants,setListOfRestaturants] = useState([]);

  const [filterList,setfilterList]=useState(ListOfRestaturants);
  
  const [SearchValue,setSearchValue]=useState([]);

  const [Location,setLocation]=useState(0);

  const PromotedResCard=withVegLabel(ResCards);


   useEffect(()=>{
     
      fetchData();

      return ()=>{
        //console.log("body unmounted");
      }
    },[Location])
   
    //lat=12.9715987&lng=77.5945627
    
   const fetchData= async ()=>{
     const data= await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${obj[Location]?.lat}&lng=${obj[Location]?.lon}&page_type=DESKTOP_WEB_LISTING`);

     const json= await data.json();
     //console.log(json);
    //  setListOfRestaturants(json?.data?.cards[2]?.data?.data?.cards);
    //  setfilterList(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
}

const onlineStatus=useOnlineStatus();

if(onlineStatus==false){
  return (<p>Your are Offline Please Check your internet connection.</p>)
}

if(ListOfRestaturants.length===0)
{
  return <Shimmer></Shimmer>;
}



    return (
      

      <div className="dark:bg-slate-700">

        <div className="flex">

          <div className="px-4">

                  <input type="checkbox"
                    onChange={(e)=>{
                    //console.log(e.target.checked);
                    if(e.target.checked){
                          let filteredListOfRestaturants=ListOfRestaturants.filter(
              
                            (res) => res?.info?.avgRating > 4
                  
                        );
                    setfilterList(filteredListOfRestaturants);
                 }
              else{
                setfilterList(ListOfRestaturants);
              }
              
              }}/> <span className="font-semibold dark:text-white">Top Restaturants</span>
          </div>

          <div className="px-4 ">
              <input className="border-solid border-2 border-black rounded-lg"
                type="text"
            value={SearchValue}
            onChange={(event)=>{

            if(event.target.value==="")
            {
              setfilterList(ListOfRestaturants);
            }

            //console.log("on change ");
            setSearchValue(event.target.value);            
            }}
         
            ></input>

          </div>

          <div className="px-4 border-solid border-2 border-black rounded-lg bg-blue-200">
            <button 
            onClick={()=>{
            //console.log("button clicked");
            let filteredListOfRestaturants=ListOfRestaturants.filter(
                (res) => (res?.info?.name).toLowerCase().includes((SearchValue).toLowerCase()));
          
            setfilterList(filteredListOfRestaturants);

            }}>Search</button>
          </div>

          <div className="px-4">
            <select name="location" className=" w-[200px] border-solid border-2 border-black"
                onChange={(e)=>{
                //console.log(e.target.value);
                setLocation(e.target.value);
            }}>
              <option >Select</option>
              <option value="0">Hyderabad</option>
              <option value="1">Bangalore</option>
            </select>
          </div>

        </div>

        
        <div className="flex flex-wrap m-2">
         {
           filterList.map((restaurant)=> <Link to={"/restaurant/"+restaurant?.info.id}  key={restaurant?.info.id} className="card-link">

            {restaurant.info.veg ? (<PromotedResCard resData={restaurant?.info} ></PromotedResCard>):(<ResCards resData={restaurant?.info}/>)}
             
            </Link> )
         }
           
        </div>  

      </div>
      
    )
  }

export default Body;