import { addItem, removeItem ,computeTotal} from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const CartItem=({item})=>{
  
    const dispatch=useDispatch();

    const addIntoCart=(item)=>{
       
        dispatch(addItem(item));
        dispatch(computeTotal());
    }

    const removefromCart=(item)=>{
        dispatch(removeItem(item));
        dispatch(computeTotal());
    }


    return(
        <div  data-testid="cart-item" className="flex">
        
        <div className="w-9/12 p-2 m-2">
           <h4 className="font-semibold">{item?.name}</h4>
           <p className="font-semibold">Price-₹{item.price? (item?.price)/100 :item?.defaultPrice/100}</p>
        </div>
        <div className="w-3/12 m-2" >
            <div className="w-16 border-2 border-black bg-white absolute mt-10 mx-4">
                <button className="" onClick={()=>{
                    removefromCart(item);
                }}>➖</button>
                <span className="">{item?.itemCount}</span>
                <button className="" onClick={()=>{
                    addIntoCart(item);
                }}>➕</button>
           </div>
           <img
                className="rounded-lg "
                src={CDN_URL+item?.imageId}
                alt="logo"
                />
        </div>
    </div>
)

}

export default CartItem;