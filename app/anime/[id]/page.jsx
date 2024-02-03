import { getAnimeResponse, getNestedAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import AnimeList from "@/app/components/AnimeList";
import CharacterList from "@/app/components/CharacterList";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const animeFull = await getAnimeResponse(`anime/${id}/full`);
  const character = await getAnimeResponse(`anime/${id}/characters`);
  const genre = await getAnimeResponse("genres/anime");

  let recommendation = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const generateNumberMin = () => {
    let firstNum = Math.floor(Math.random() * recommendation.length);
    let secondNum = firstNum + 4;
    const ArrRandomNumb = [];
    ArrRandomNumb.push(firstNum);
    ArrRandomNumb.push(secondNum);
    return ArrRandomNumb;
  };
  const randomArr = generateNumberMin();

  recommendation = { data: recommendation.slice(randomArr[0], randomArr[1]) };

  return (
    <>
      <div className="relative h-96 bg-gradient-to-t from-gray-900  via-gray-500 to-gray-900 bg-cover bg-center  ">
        <Image
          src={anime.data.images.webp.large_image_url}
          width={1200}
          height={1200}
          alt={anime.data.images.jpg.image_url}
          className="w-full h-full object-cover mix-blend-overlay overflow-hidden absolute"
        ></Image>
        <div
          className=" pt-64  md:pt-80
       "
        >
          <div className=" pt-4 px-12 opacity-100 flex flex-row">
            <Image
              src={anime.data.images.webp.image_url}
              width={100}
              height={100}
              alt={anime.data.images.jpg.image_url}
              className="w-40  h-60 z-10"
            ></Image>
            <div className="flex flex-wrap  md:flex-col">
              <h1 className=" text-color-primary font-extrabold text-2xl md:text-4xl opacity-100 px-4">
                {anime.data.title} - {anime.data.year}
              </h1>
              <div className="pt-4 px-4 flex flex-wrap md:flex-row text-xs text-color-dark font-extrabold gap-8 md:gap-4 overflow-x-auto">
                <div className=" w-24 flex flex-col justify-center items-center rounded border bg-color-bright border-color-primary p-4">
                  <h3>RANK:</h3>
                  <p>{anime.data.rank}</p>
                </div>
                <div className="w-24  flex flex-col justify-center items-center rounded-lg border  bg-color-bright border-color-primary p-2">
                  <h3>SCORE:</h3>
                  <p>{anime.data.score}</p>
                </div>

                <div className="w-36 hidden sm:flex flex-col justify-center items-center rounded-lg border  bg-color-bright border-color-primary p-1">
                  <h3>RATING:</h3>
                  <p>{anime.data.rating}</p>
                </div>

                <div className="w-36 hidden sm:flex flex-col justify-center items-center rounded-lg border  bg-color-bright border-color-primary p-1">
                  <h3>EPISODES:</h3>
                  <p>{anime.data.episodes}</p>
                </div>

                <div className="w-36 hidden  sm:flex flex-col justify-center items-center rounded-lg border  bg-color-bright border-color-primary p-1">
                  <h3>DURATION:</h3>
                  <p>{anime.data.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-4 flex flex-wrap sm:flex-nowrap text-color-primary gap-2">
          <p className="text-justify text-md px-8 pb-10">
            {anime.data.synopsis}
          </p>
        </div>

        <div>
          <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
        <div className="flex flex-row gap-4 text-sm px-10 font-extrabold">
          <div className="w-24  flex flex-col justify-center items-center rounded border bg-color-bright border-color-primary p-4">
            <h3>Genre:</h3>

            {anime.data.genres.map((genre, index) => {
              return (
                <div className="flex items-center text-xs">
                  <p key={index}>{genre.name},</p>
                  
                </div>
              );
            })}
          </div>
          <div className="w-24 max-w-72  flex flex-col justify-center items-center rounded-lg border  bg-color-bright border-color-primary p-2">
            <h3>Studio:</h3>
            {anime.data.studios.map((studio, index) => {
              return (
                <div className="flex  items-center text-xs">
                  <p key={index}>{studio.name}</p>
                  
                </div>
              );
            })}

            
          </div>
         
        </div>
        <section className="pt-8 px-8">
          <h1 className="text-2xl font-bold text-color-primary px-4 py-2">
            Characters
          </h1>
          <CharacterList api={character} />
        </section>
        <section className="pt-8 px-8">
          <h1 className="text-2xl font-bold text-color-primary px-4 py-2">
            Recommended For You
          </h1>
          <AnimeList api={recommendation} />
        </section>
      </div>
    </>
  );
};

export default Page;
