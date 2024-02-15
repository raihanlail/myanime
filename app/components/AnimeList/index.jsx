import Image from "next/image"
import Link from "next/link"
import { CiStar } from "react-icons/ci";

const AnimeList = ({api}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6 px-2 md:px-8 rounded-sm ">
            {api.data?.map((anime, index) => {
                const image = anime.images.webp.large_image_url
                const title = anime.title
                return (
                    <div className="p-1">

                    <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer hover:scale-[102%] shadow-xl text-color-primary hover:text-color-bright  transition-all">
        
                    <Image src={image} width={350} height={450} alt="image" className="w-full max-h-80 object-cover rounded-xl" />
                    <div className="flex flex-row justify-between ">

                    <h3 className="font-bold text-xl line-clamp-1 w-full pt-1  ">{title}</h3>
                    <div className="text-green-400 pt-1 flex flex-row text-base font-bold ">
                        <div className="p-1">

                        <CiStar  />
                        </div>
                        <p>{anime.score}</p>
                        </div>
                    </div>
                   
                    </Link>
                    
                    </div>

                )
            })}

    
       
    </div>
            
               
            
        
    )
}

export default AnimeList