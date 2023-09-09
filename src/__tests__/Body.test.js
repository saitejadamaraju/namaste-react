import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../components/Body";
import Header from "../components/Header";
import RestaurantInfo from "../components/RestaurantInfo";
import Cart from "../components/Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/RestaurantListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import RestaurantCategories from "../components/RestaurantCategories";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
       return Promise.resolve(MOCK_DATA);},
    })
});

it("should test Body", async ()=>{

    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));

    const BeforeCards=screen.getAllByTestId("ResCard");

    //console.log(BeforeCards.length);

    expect(BeforeCards.length).toBe(9);

    const inputBox=screen.getByRole("textbox");

    fireEvent.change(inputBox,{target:{value:"Dhaba"}});

    const button=screen.getByRole("button",{name:"Search"});

    fireEvent.click(button);

    const afterCards=screen.getAllByTestId("ResCard");
  
    //console.log(afterCards.length);

    expect(afterCards.length).toBe(2);

    fireEvent.change(inputBox,{target:{value:""}})

    const finalCards=screen.getAllByTestId("ResCard");
     
    //console.log(finalCards.length);

    expect(finalCards.length).toBe(9);


})

