import {notFound} from 'next/navigation';
export default function ReviewDetail({ params, }: { params: { productid: string; reviewId: string; } })

{
    if (parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>Review {params.reviewId} of a product {params.productid}</h1>
}