import { getAnimeResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const char = await getAnimeResponse(`characters/${id}`);
  const charFull = await getAnimeResponse(`characters/${id}/full`);
  const anime = await getAnimeResponse(`characters/${id}/anime`);
  const va = await getAnimeResponse(`characters/${id}/voices`);
  console.log(charFull);

  return (
    <div className="text-color-primary flex flex-nowrap md:flex-wrap flex-col md:flex-row">
      <Image
        src={char.data.images.webp.image_url}
        width={1000}
        height={1000}
        className="p-4 w-80 items-center  h-100 z-10 rounded-sm border border-black"
      ></Image>
      <div className="flex flex-col">
        <h1 className="text-3xl p-4 font-bold">
          {char.data.name} / {char.data.name_kanji}
        </h1>
        <p className="p-4 text-justify">{char.data.about}</p>
        <div className="p-4">
          <p>Voice Actors:</p>

          {va.data.map((voice, index) => {
            return (
              <li key={index}>
                {" "}
                {voice.person.name} ({voice.language})
              </li>
            );
          })}
        </div>
        <div className="p-4">
          <p>Animes and Roles</p>

          {charFull.data.anime.map((anime, index) => {
            return (
              <a href={`/anime/${anime.anime.mal_id}`}>
                <li key={index}>
                  {" "}
                  {anime.anime.title} ({anime.role})
                </li>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
