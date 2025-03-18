// import { Metadata } from "next"
// type Props = {
//     params: {
//         productid: string;
//     }
// }

// export const generateMetadata= async({
//     params,
// }: Props): Promise<Metadata> => {
//     const title= await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`IPhone ${params.productid}`)
//         }, 100)
//     }
//     )
//     return {
//         title:`product ${title}`
//     }
// }
// export default function ProductDetails(
//     {params}: Props) {
// return <h1>Details about product {params.productid}</h1>
// }


import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100);
  });
  return {
    title: `Product - ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Details about product {productId}</h1>;
}