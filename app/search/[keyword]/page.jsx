
import Link from "next/link"
import AnimeList from "@/app/components/AnimeList"
import Header from "@/app/components/AnimeList/header.jsx"
import { getAnimeResponse } from "@/app/libs/api-libs"
import Navbar from "@/app/components/Utilities/NavBar"
import InputSearch from "@/app/components/Utilities/NavBar/inputSearch"


const Page = async({params}) => {
const { keyword } = params
const decodeKeyword = decodeURI(keyword)
 // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`)
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)
  
  return (

  <div className="">
    <section>
      <div className="bg-hero bg-no-repeat bg-cover h-48">
      <header className=" ">
          <div className="flex flex-col md:flex-row justify-between p-4">
            <Link
              href="/"
              className="text-2xl hover:scale-105 transition-all font-bold text-color-primary md:px-4 "
            >
              {" "}
              MYANIME⭐
            </Link>

            <InputSearch />
          </div>
        </header>

      

    <Header className="text-color-primary"  title={`Results for "${decodeKeyword}"`} linkTitle="" linkHref=""/>
      </div>
    <AnimeList api={searchAnime} />
    </section>
    
  </div>
  )

}


export default Page

