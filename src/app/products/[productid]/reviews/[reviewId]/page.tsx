import { error } from 'console';
import {notFound} from 'next/navigation';

function getRandomInt(count:number){
  return  Math.floor(Math.random()*count)
}
export default function ReviewDetail({ params, }: { params: { productid: string; reviewId: string; } })

{
    const random= getRandomInt(2)
    if (random==1){
        throw new Error("error in review id")
    }
    if (parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>Review {params.reviewId} of a product {params.productid}</h1>


}