import resList from "../utils/mockData";
import ResCards from "../components/ResCards";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";

const Body=()=>{


  const [ListOfRestaturants,setListOfRestaturants] = useState([]);

  const [filterList,setfilterList]=useState(ListOfRestaturants);
  
  const [SearchValue,setSearchValue]=useState([]);

   useEffect(()=>{
      fetchData();
    },[])
   
   const fetchData= async ()=>{
     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");

     const json= await data.json();
     console.log(json);
     setListOfRestaturants(json?.data?.cards[2]?.data?.data?.cards);
     setfilterList(json?.data?.cards[2]?.data?.data?.cards);
}

// if(ListOfRestaturants.length===0)
// {
//   return <Shimmer/>;
// }


    return ListOfRestaturants.length===0? <Shimmer/>: (
       
      <div className="body">
        <div className="body-header">

        <div className="filter">

          <input type="checkbox" 
          onChange={(e)=>{
              console.log(e.target.checked);
              if(e.target.checked){
                let filteredListOfRestaturants=ListOfRestaturants.filter(
              
                  (res) => res.data.avgRating > 4
                  
                  );
                setfilterList(filteredListOfRestaturants);
              }
              else{
                setfilterList(ListOfRestaturants);
              }
              
          }}/>Top Restaturants
{/*           

          <button
          className="filter-btn"
          onClick={() => {
            let filteredListOfRestaturants=ListOfRestaturants.filter(
              
              (res) => res.data.avgRating > 4
              
              );
            setfilterList(filteredListOfRestaturants);
          }}
          >
            Top Rated Restaurants
          </button> */}
        </div>

        <div className="search">
         <input className="search-input"
           type="text"
           value={SearchValue}
          onChange={(event)=>{

            if(event.target.value==="")
            {
              setfilterList(ListOfRestaturants);
            }

            console.log("on change ");
            setSearchValue(event.target.value);
            
            // setListOfRestaturants(ListOfRestaturants.filter(
            //   (res) => (res.data.name).toLowerCase().includes((event.target.value).toLowerCase()))); 
           
          
            
          }}
         
         ></input>

        </div>
        <button 
        onClick={()=>{
          console.log("button clicked");
          let filteredListOfRestaturants=ListOfRestaturants.filter(
              (res) => (res.data.name).toLowerCase().includes((SearchValue).toLowerCase()));
          //setListOfRestaturants(filteredListOfRestaturants);
          setfilterList(filteredListOfRestaturants);

        }}>Search</button>
        </div>
        <div className="res-container">
         {
           filterList.map((restaurant)=> <ResCards key={restaurant.data.id} resData={restaurant}/> )
         }
           
        </div> 
      </div>
    )
  }

export default Body;