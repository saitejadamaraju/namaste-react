import { sum } from "../components/sum";

test("calculate sum of two numbers",()=>{

    const result=sum(3,5);

    expect(result).toBe(8);
})