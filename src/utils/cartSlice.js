import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    
    name:"cart",
    
    initialState:{
        items:JSON.parse(localStorage.getItem("cart_cartItems"))||[],
        totalAmount: JSON.parse(localStorage.getItem("cart_totalAmount")) || 0 ,
        selectedRestaurant: JSON.parse(localStorage.getItem("cart_selectedRestaurant")) || null      
    },

    reducers:{
        addItem:(state,action)=>{
          
           const{payload}=action;
           let index= state.items.findIndex(item=>item.id==payload?.id);
           //console.log(index);
           if(index!==-1)
           {
                state.items[index].itemCount++;
           } else {
            state.items.push({...payload, itemCount: 1});
           }
            
           localStorage.setItem("cart_cartItems", JSON.stringify(state.items));

           //console.log(current(state.items));
       
        },
        removeItem:(state,action)=>{
           
            const{payload}=action;
           let index= state.items.findIndex(item=>item?.card?.info?.id==payload?.card?.info?.id);
           //console.log(index);
           if(index!==-1)
           {
                if(payload.itemCount>1)
                {
                    state.items[index].itemCount--;
                }
                else{
                    state.items.splice(index,1);
                }
                localStorage.setItem("cart_cartItems", JSON.stringify(state.items));
           } 
        },
        clearCart:(state)=>{
           state.items.length=0;
           state.selectedRestaurant = null;
           state.totalAmount = 0;
        },
        computeTotal:(state)=>{
            let totalAmount = state.items.reduce((prevCount, item) => {
                return prevCount + item.price/100 * item.itemCount;
            }, 0); 
            state.totalAmount = parseFloat(totalAmount.toFixed(2));
            localStorage.setItem("cart_totalAmount", JSON.stringify(state.totalAmount));

        },
        setRestaurant:(state,action)=>{
            state.selectedRestaurant = action.payload;
            localStorage.setItem("cart_selectedRestaurant", JSON.stringify(state.selectedRestaurant));
        },
        removeRestaurant:(state)=>{
            state.selectedRestaurant = null
            localStorage.setItem("cart_selectedRestaurant", JSON.stringify(state.selectedRestaurant));
        }
    },

});

export const {addItem,removeItem,clearCart,computeTotal,setRestaurant,removeRestaurant}=cartSlice.actions;

export default cartSlice.reducer;
