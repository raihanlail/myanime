import Navbar from "@/app/components/Utilities/NavBar";
import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";

const Page = async ({ params: { id } }) => {
  const char = await getAnimeResponse(`characters/${id}`);
  const charFull = await getAnimeResponse(`characters/${id}/full`);
  const anime = await getAnimeResponse(`characters/${id}/anime`);
  const va = await getAnimeResponse(`characters/${id}/voices`);
  console.log(charFull);

  return (
    <div>
      <Navbar/>

    <div className="text-color-primary flex flex-nowrap md:flex-wrap flex-col md:flex-row">
      <Image
        src={char.data.images.webp.image_url}
        width={1000}
        height={1000}
        className="p-4 w-80 items-center  h-100 z-10 rounded-sm "
      ></Image>
      <div className="flex flex-col">
        <h1 className="text-3xl p-4 font-bold">
          {char.data.name} / {char.data.name_kanji}
        </h1>
        <p className="p-4 text-justify">{char.data.about} <br></br></p>
        <div className="p-4">
          <p>Voice Actors:</p>

          {va.data.map((voice, index) => {
            return (
              <li key={index}>
                {" "}
                {voice.person.name} ({voice.language})
              </li>
            );
          })}
        </div>
        <div className="px-4 pb-8">
          <p className="px-2">Animes and Roles</p>

          <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-2 sm:gap-4 md:gap-6 px-4 rounded-sm">
            {charFull.data.anime.map((anime, index) => {
              return (
                <Link
                  href={`/anime/${anime.anime.mal_id}`}
                  key={index}
                  className="cursor-pointer hover:scale-105 shadow-xl text-color-primary hover:text-color-bright  transition-all"
                >
                  <Image
                    src={anime.anime.images.webp.large_image_url}
                    width={350}
                    height={350}
                    className="w-full max-h-64 object-cover rounded-sm"
                  />
                  <h3 className="font-bold text-sm  ">
                    {" "}
                    {anime.anime.title} ({anime.role})
                  </h3>
                  <div className="text-green-400 p-1 flex flex-row text-sm font-bold">
                        <div className="p-1">

                        <CiStar  />
                        </div>
                        <p>{anime.anime.score}</p>
                        </div>
                    
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
