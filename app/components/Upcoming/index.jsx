const { getAnimeResponse } = require("@/app/libs/api-libs")

const Upcoming = async() => {
    const upAnime = await getAnimeResponse("seasons/upcoming")
    console.log(upAnime)
}

export default Upcoming