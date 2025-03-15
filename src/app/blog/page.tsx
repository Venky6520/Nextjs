import { Metadata } from "next"
import { resolve } from "path"

export const metadata: Metadata={
    title:{
absolute:"blog",
    },

}
export default async function Blog() {        // This is the Blog component
    await new Promise(resolve=>{
        setTimeout(()=>{resolve("intentional delay")},2000)
    })
    return <h1>My Blog</h1>                        // This is the JSX that will be rendered
}                                               // This is the end of the Blog component