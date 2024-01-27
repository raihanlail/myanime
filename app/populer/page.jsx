"use client"
import HeaderMenu from "../components/Utilities/headerMenu"
import Pagination from "../components/Utilities/pagination"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse } from "../libs/api-libs"
import { useEffect, useState } from "react"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async() => {

       // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
       const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    
        setTopAnime(popularAnime)
    }
    
    useEffect(()=> {
        fetchData()
    }, [page])
    return (
        <div>
            <HeaderMenu title={`Popular Animes #${page}`}/>
            
            <AnimeList api={topAnime}  />
            <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_anime} />
        </div>
    )
}

export default Page