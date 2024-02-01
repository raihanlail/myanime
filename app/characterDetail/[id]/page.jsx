"use client"

import { getAnimeResponse } from "@/app/libs/api-libs";
import { useEffect, useState } from "react";


const Page = ( { params: {id} } ) => {
    const [response, setResponse] = useState([])

    const getDatas = async( params )=> {
        const char = await getAnimeResponse(`anime/${id}/characters`, `q=${id}`);
        const result = char.data.map(datas => {
            return{
                name: datas.results.character.name
                

            }
        } )
        setResponse(result)
    }
    
    useEffect(()=> {
        getDatas()
    }, [])
    console.log(response)
  
    
    
    return(
        <div className="text-color-primary">

            <h1></h1>
        </div>
    )
}

export default Page