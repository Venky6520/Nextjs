"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router=useRouter()
    const handleClick=()=>{
        console.log("order is placed");
        router.push("/")
        
    }
    return(
        <>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order</button>
        </>
    )
}