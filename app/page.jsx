import Link from "next/link";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse } from "./libs/api-libs";
import Carousel from "./components/Carousel";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  
  let recommendation = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const generateNumberMin = () => {
    let firstNum = Math.floor(Math.random() * recommendation.length  );
    let secondNum = firstNum + 5
    ;
    const ArrRandomNumb = [];
    ArrRandomNumb.push(firstNum);
    ArrRandomNumb.push(secondNum);
    return ArrRandomNumb;
  };

  const randomArr = generateNumberMin();

  recommendation = { data: recommendation.slice(randomArr[0], randomArr[1]) };

  return (
    <div className="pb-4 pt-4">
      <section>
        <Header
          className="text-color-primary"
          title="Most Popular"
          linkTitle="See All"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="pt-12">
        <h1 className="text-2xl font-bold text-color-primary px-4 py-2">
          Recommendation
        </h1>
        <AnimeList api={recommendation} />
      </section>
    </div>
  );
};

export default Page;
