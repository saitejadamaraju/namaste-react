import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter,RouterProvider,Outlet,createHashRouter,createMemoryRouter } from "react-router-dom"; 
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Shimmer } from "react-shimmer";
import {Provider} from "react-redux";
import appStore from "./utils/appStore"; 
import Cart from "./components/Cart";


const About=lazy(()=> import ("./components/About"));


const AppLayout=()=>{
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header></Header>
                <Outlet></Outlet>      
            </div>
        </Provider>
    )
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>,
        children:[
             {
                 path:"/",
                 element:<Body></Body>
             },
             {
                path:"/about",
                element:<Suspense fallback={<>Loading</>}>
                
                <About />
               </Suspense>
                
           },
           {
                 path:"/contact",
                 element:<Contact></Contact>
           },
           {
            path:"/restaurant/:resId",
            element:<RestaurantInfo></RestaurantInfo>
           },
           {
             path:"/cart",
             element:<Cart></Cart>
           } ,   
             
        ],
        errorElement:<Error></Error>
        
    },
   
])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);  






