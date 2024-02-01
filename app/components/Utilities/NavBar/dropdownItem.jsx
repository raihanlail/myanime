import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/app/libs/api-libs";

const DropdownItem = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getAnimeResponse("genres/anime");
        setGenres(response); // Assuming the response is an array of genres
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <ul className="grid grid-cols-3 md:grid-cols-8   gap-4">
        {genres.data?.map((genre, index) => (
          <li key={index} className="flex-none text-xs w-1/5 mb-4">
            <a href={`/genre/${genre.name}`}>{genre.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownItem;
