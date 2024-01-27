import Image from "next/image"
import Link from "next/link"
const AnimeList = ({api}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-4 ">
            {api.data?.map((anime, index) => {
                const image = anime.images.webp.image_url
                const title = anime.title
                return (
                    <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer shadow-xl text-color-primary hover:text-color-accent transition-all">
        
                    <Image src={image} width={350} height={350} className="w-full max-h-64 object-cover" />
                    <h3 className="font-bold text-sm  md:text-xl ">{title}</h3>
                   
                    </Link>

                )
            })}

    
       
    </div>
            
               
            
        
    )
}

export default AnimeList