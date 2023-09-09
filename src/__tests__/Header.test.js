import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should contain Home",()=>{

    render(<BrowserRouter><Provider store={appStore}>
         <Header/>
        </Provider>
        </BrowserRouter>)

    const Home=screen.getByText("Home🏠");

    expect(Home).toBeInTheDocument();
})

it("should test theme",()=>{

    render(<BrowserRouter><Provider store={appStore}>
        <Header/>
       </Provider>
       </BrowserRouter>)

    const button=screen.getByRole("button",{name:"Dark"});
    
    //console.log(button);

    expect(button).toBeInTheDocument();

    fireEvent.click(button)
    
    const Afterbutton=screen.getByText("Light");

    // console.log(Afterbutton);

    expect(Afterbutton).toBeInTheDocument();

    fireEvent.click(Afterbutton);

    const lastButton=screen.getByText("Dark");
    expect(lastButton).toBeInTheDocument();
})