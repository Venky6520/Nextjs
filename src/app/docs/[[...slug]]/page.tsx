export default function Docs({params,}:
    {params: {slug: string[]}}
)
 {
    if (params.slug?.length==2){
         return(
            <h1>view docs and feature {params.slug[0]} and concept {params.slug[1]}</h1>
         )
    }
    else if(params.slug?.length==1){
        return(
            <h1>view docs and feature {params.slug[0]}</h1>
        )
    }
    return <h1>Docs homepage</h1>
}