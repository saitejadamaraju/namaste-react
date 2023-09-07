import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import {Link} from "react-router-dom";

class About extends Component{
    

    constructor(props)
    {
        super(props);
        
        //console.log("parents constructor");
    }
    
    componentDidMount(){
        //console.log("parents component did mount");
    }

    render()
    {
        //console.log("parents render");
        return (
            <div>
               <h1>About Us</h1>
               <Link to="/contact"><h2>This is a Food App</h2></Link>
               <h2>This is a Food App</h2>
    
               <UserClass name={"Damaraju"}></UserClass>
               
            </div>
        )

    }
}


export default About;