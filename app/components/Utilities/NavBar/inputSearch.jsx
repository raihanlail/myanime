"use client"


import { useRouter } from "next/navigation"

import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        
        const keyword = searchRef.current.value
        if(!keyword) return;
        router.push(`/search/${keyword}`)
        
    }
    const handleKeyPress =(event) => {
        event.preventDefault
        if (event.key== "Enter") {
            handleSearch();
        }

    };
    return (
        <div className="relative border border-black">
            <input placeholder="🔎search..." className="p-2 rounded-sm w-full" ref={searchRef} onKeyPress={handleKeyPress}></input>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
            
            </button>

        </div>
    )
}

export default InputSearch