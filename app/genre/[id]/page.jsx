import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/header";
const { getAnimeResponse } = require("@/app/libs/api-libs");

const Page = async ({ params: { id } }) => {
  const apiData = await getAnimeResponse("anime", `q=${id}`);
  const decodeKeyword = decodeURI(id)

  const response = await getAnimeResponse("genres/anime");

  console.log(response);

  return (
    <div className="text-white pt-4">
      <h1></h1>
      <Header className="text-color-primary"  title={`Results for "${decodeKeyword}"`} linkTitle="" linkHref=""/>

      <AnimeList api={apiData} />
    </div>
  );
};
export default Page;
