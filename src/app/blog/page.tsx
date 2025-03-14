import { Metadata } from "next"

export const metadata: Metadata={
    title:{
absolute:"blog",
    },

}
export default function Blog() {        // This is the Blog component
    return <h1>My Blog</h1>                        // This is the JSX that will be rendered
}                                               // This is the end of the Blog component