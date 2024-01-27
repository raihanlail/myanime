import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"
import VideoPlayer from "@/app/components/Utilities/VideoPlayer"

const Page = async({params: {id}}) => {
    const anime = await getAnimeResponse (`anime/${id}`)
   
    return (
        <>
        <div className="pt-4 px-4">
            <h1 className=" text-color-primary font-bold text-2xl">{anime.data.title} - {anime.data.year}</h1>
        </div>
        <div className="pt-4 px-4 flex text-color-primary gap-2 overflow-x-auto">

            <div className=" w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>RANK:</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>SCORE:</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>SCORED BY:</h3>
                <p>{anime.data.scored_by}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>RATING:</h3>
                <p>{anime.data.rating}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>POPULARITY:</h3>
                <p>{anime.data.popularity}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>EPISODES:</h3>
                <p>{anime.data.episodes}</p>
            </div>

            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>DURATION:</h3>
                <p>{anime.data.duration}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex flex-wrap sm:flex-nowrap text-color-primary gap-2">

            <Image src={anime.data.images.webp.image_url}
             width={150}
              height={150}
              alt={anime.data.images.jpg.image_url}></Image>
              <p className="text-justify text-xl">{anime.data.synopsis}</p>

        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </div>
        </>
    )
}

export default Page