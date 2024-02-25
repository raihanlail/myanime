import Image from "next/image"
import Link from "next/link"
import { CiStar } from "react-icons/ci";

const AnimeList = ({api}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-2 sm:gap-4 md:gap-4 px-2 md:px-8 rounded-sm ">
            {api.data?.map((anime, index) => {
                const image = anime.images.webp.large_image_url
                const title = anime.title
                return (
                    <div className="p-1 overflow-hidden">

                    <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer  shadow-xl text-color-primary hover:text-color-bright  transition-all">
        
                    <Image src={image} width={150} height={250} alt="image" className="w-full hover:scale-105 transition-all  h-64 object-cover " />
                    <div className="flex flex-row justify-between ">

                    <h3 className="font-bold text-base line-clamp-1 w-full pt-1  ">{title}</h3>
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