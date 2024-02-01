import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6 px-4 rounded-sm ">
            {api.data?.map((anime, index) => {
                const image = anime.images.webp.image_url
                const title = anime.title
                return (
                    <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer hover:scale-105 shadow-xl text-color-primary hover:text-color-bright  transition-all">
        
                    <Image src={image} width={350} height={350} className="w-full max-h-64 object-cover rounded-sm" />
                    <h3 className="font-bold text-sm  ">{title}</h3>
                   
                    </Link>

                )
            })}

    
       
    </div>
            
               
            
        
    )
}

export default AnimeList