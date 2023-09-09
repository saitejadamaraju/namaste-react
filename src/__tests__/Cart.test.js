import Header from "../components/Header";
import RestaurantInfo from "../components/RestaurantInfo";
import Cart from "../components/Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/RestaurantCategoriesMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../components/Body";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
       return Promise.resolve(MOCK_DATA);},
    })
});

it("should test Add to Cart", async ()=>{
   
    await act(async ()=> render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantInfo/>
                <Cart/>
            </Provider>
        </BrowserRouter>
        ));
   

    const card=screen.getByText("Agrawala Sweets");

    //console.log(card);

    fireEvent.click(card);

    const accordionHeader=screen.getByText("Recommended(34)");


    fireEvent.click(accordionHeader);

    const items=screen.getAllByTestId("item");
    
    console.log(items.length);
    expect(items.length).toBe(34);

    const addBtn=screen.getAllByRole("button",{name:"add"})

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const cartStatus=screen.getByText("cart🛒-(2)")

    expect(cartStatus).toBeInTheDocument();

    const cartItems=screen.getAllByTestId("cart-item");

    expect(cartItems.length).toBe(2);

    const clearCart=screen.getByText("Clear cart");

    fireEvent.click(clearCart);

    const aftercartStatus=screen.getByText("cart🛒-(0)")

    expect(aftercartStatus).toBeInTheDocument();






    





})