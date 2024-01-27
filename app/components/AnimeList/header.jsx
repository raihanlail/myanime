import Link from "next/link"
const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div>
            <div className=" flex flex-row justify-between p-4">

    
            <h1 className="text-2xl font-bold text-color-primary ">
      {title}
    </h1>
    <Link href={linkHref} className="text-xl underline hover:text-color-accent transition-all text-color-primary md:items-center ">{linkTitle}</Link>
</div>
        </div>
    )
}

export default Header