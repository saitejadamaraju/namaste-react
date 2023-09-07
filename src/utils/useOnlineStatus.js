import { useEffect, useState } from "react";


const useOnlineStatus=()=>{
   // console.log("inside useonline status");
    const[onlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{

        window.addEventListener("offline",()=>{

            setOnlineStatus(false);
        });
    
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

    },[])

    // window.addEventListener("offline",()=>{

    //     setOnlineStatus(false);
    // });

    // window.addEventListener("online",()=>{
    //     setOnlineStatus(true);
    // })

    

    
    return onlineStatus;
}

export default useOnlineStatus;