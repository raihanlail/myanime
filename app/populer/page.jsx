"use client";
import HeaderMenu from "../components/Utilities/headerMenu";
import Pagination from "../components/Utilities/pagination";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../libs/api-libs";
import { useEffect, useState } from "react";
import Navbar from "../components/Utilities/NavBar";
import Link from "next/link";
import InputSearch from "../components/Utilities/NavBar/inputSearch";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);

    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      <div className="bg-hero  bg-no-repeat bg-cover h-48">
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

        <HeaderMenu title={`Popular Animes #️⃣${page}`} />
      </div>

      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_anime}
      />
    </div>
  );
};

export default Page;
