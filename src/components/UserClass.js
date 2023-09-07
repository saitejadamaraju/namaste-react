import React from "react";

class UserClass extends React.Component {
     
    constructor(props)
    {
       super(props);
       this.array=['saiteja','damaraju','vamshi','teja'];
       this.state ={
        count:0,
         userInfo:{
            user:'dummy',
            location:'dummy',
         },
        
         
       }

       console.log("childs constructor");
    }

    async componentDidMount()
    {
        console.log("childs component did mount");
        this.timer=setInterval(()=>{
           console.log("interval");
        },1000);
        await this.fetchData(this.state.count);

    }
    
    componentDidUpdate(prevProps,prevState)
    {
        console.log("new state",this.state.userInfo.user);
        console.log("prevstate is ",prevState.userInfo.user);
       if(this.state.count!==prevState.count)
        {
            this.fetchData(this.state.count);
        }
        console.log("component did update");
    }

    async fetchData(count)
    {   
        console.log("count in fetchData is ",count);
        const data=await fetch("https://api.github.com/users/"+this.array[count]);
        const json= await data.json();
        console.log("json is",json);
        this.setState({
            userInfo:{
                user:json.login,
                location:json.location,
            },
        })
 
    }
    componentWillUnmount()
    {
        console.log("component unmounted");
        clearInterval(this.timer);
    }

  
    render()
    {
        
        const {user,location} =this.state.userInfo;
        console.log("child name",user);
        console.log("childs location",location);
        console.log("childs render");
        return (
            <div className="user-card">
                <h1>{user}</h1>
                <h2>{location!=null?location:"NA"}</h2>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{
                    if(this.state.count >=4)
                    {
                        this.setState({
                            count:0,
                            // user:this.array[this.state.count],                 
                        });
                    }
                    else{
                        this.setState({
                            count:this.state.count+1,
                            // user:this.array[this.state.count],                 
                        });
                    }
                    
                }}>count 

                </button>

                <button onClick={()=>{
                    history.back();
                }}>back

                </button>

                <button onClick={()=>{
                    history.go(0);
                }}>forward

                </button>
            
            </div>
        )    
    }

}

export default UserClass;