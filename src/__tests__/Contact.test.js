import Contact from "../components/Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should load contact us Page",()=>{
   
    render(<Contact></Contact>);

    const text=screen.getByText("Contact");

    expect(text).toBeInTheDocument();

})