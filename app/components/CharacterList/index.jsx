import Image from "next/image"
import Link from "next/link"
const CharacterList = ({api}) => {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-4  px-4 rounded-sm ">
            {api.data?.map((char, index) => {
                const image = char.character.images.webp.image_url
                const title = char.character.name
                return (
                    <Link href={`/characterDetail/${char.character.mal_id}`} key={index} className="cursor-pointer hover:scale-105 shadow-xl text-color-primary hover:text-color-bright  transition-all">
        
                    <Image src={image} width={350} height={350} className="w-full max-h-64 object-cover rounded-sm" />
                    <h3 className="font-bold text-sm  ">{title}</h3>
                   
                    </Link>

                )
            })}

    
       
    </div>
            
               
            
        
    )
}

export default CharacterList