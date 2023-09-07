import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";



const Cart=()=>{

    const items=useSelector((store)=>store.cart.items);

    const totalAmount=useSelector((store)=>store.cart.totalAmount);

    const dispatch=useDispatch();

    const clearCartt=()=>{

        dispatch(clearCart());
    }

    return (
        <>
        <div className="w-4/12 mx-auto border-solid border-2 border-black ">
            <div className="">
                
                {/* list of items */}
                {items.length==0?<h1 className="text-center font-bold">Cart is empty</h1>:
                items.map((item)=><CartItem key={item?.id} item={item}></CartItem>)}

            </div>
            <div className="text-left">
               <h3 className="font-bold">Bill Details    </h3>
               <h4 className="font-semibold">Item Total   : <span className="font-extrabold">₹{totalAmount}</span></h4>
               <h4 className="font-semibold">Delivery Fee | 4.5 Kms  : ₹45</h4>
               <h4 className="font-semibold" >Delivery Tip : ₹0</h4>
               <h4 className="font-semibold" >Platform fee : ₹3</h4>
               <h4 className="font-semibold" >GST and Restaurant Charges : ₹19 </h4>
               <h2 className="font-bold" >TO PAY : ₹{totalAmount>0?totalAmount+45+3+19:0}</h2>             
            </div>
        </div>
        <div className="w-3/12 mx-auto  p-4">
               <button className="text-black bg-green-400 rounded-lg border-2 border-black"
               onClick={()=>{
                 clearCartt();
               }}>Clear cart</button>
        </div>

        </>
    )

}

export default Cart;