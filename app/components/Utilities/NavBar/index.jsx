import Link from "next/link"
import InputSearch from "./inputSearch.jsx"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col md:flex-row justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-color-primary"> MyAnime</Link>
                <InputSearch/>
                
                
            </div>
        </header>
    )
}

export default Navbar