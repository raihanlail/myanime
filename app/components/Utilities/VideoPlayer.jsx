"use client"


import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const {isOpen, setIsOpen} = useState(true)

    const handleClose = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250"
    }

    
           

        
    
    return (
        <div className="fixed bottom-2 right-2">
        <button className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        onClick={handleClose}>X</button>
        <YouTube videoId={youtubeId} 
        onReady={(event) => event.target.pauseVideo()}
        opts={option}/>
    </div>
    )
}

export default VideoPlayer