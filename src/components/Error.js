import { useRouteError } from "react-router-dom";

const Error=()=>{
   
    const err= useRouteError();
    //console.log(err);

    return (
        <div>
            <h1>OOPS!!!1</h1>
            <h1>{err.status}</h1>
        </div>
    )
}

export default Error;