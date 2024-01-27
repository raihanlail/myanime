
import Link from "next/link"
import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/header.jsx"
import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async({params}) => {
const { keyword } = params
const decodeKeyword = decodeURI(keyword)
 // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)
  
  return (

  <div className="">
    <section>

    <Header className="text-color-primary"  title={`Results for "${decodeKeyword}"`} linkTitle="" linkHref=""/>
    <AnimeList api={searchAnime} />
    </section>
    
  </div>
  )

}


export default Page

