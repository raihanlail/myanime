import Link from "next/link"
import InputSearch from "./inputSearch.jsx"
import DropdownButton from "./dropdown.jsx"

const Navbar = () => {
    return (
        <header className="bg-color-dark ">
            <div className="flex flex-col md:flex-row justify-between p-4">
                <Link href="/" className="text-2xl hover:scale-105 transition-all font-bold text-color-primary md:px-4 "> MYANIME</Link>
                
                <DropdownButton/>
                
                <InputSearch/>
                
                
            </div>
        </header>
    )
}

export default Navbar