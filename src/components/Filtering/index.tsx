import { Icon } from "@/components/Icons";
import { useState } from 'react';
import prefectureJson from 'public/data/prefectures.json';
import genresJson from 'public/data/genres.json';

const Filtering = () => {
  const prefecturesData = prefectureJson.prefectures;
  const genresData = genresJson.genres;
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedGenre, setSelectedGenres] = useState("");
  return (
    <>
      <div className="flex justify-center p-2">
        <div className="flex items-center bg-gray-100 rounded-l-lg">
          <input className=" bg-gray-100 outline-none rounded-l-lg p-4 space-x-4" type="text" placeholder="Keyword..." />
          <button className="bg-blue-700 rounded-r-lg p-4 space-x-4"><Icon name="Search" stroke="white" /></button>
        </div>
      </div>
      <select
        value={selectedGenre}
        onChange={e => setSelectedGenres(e.target.value)}>
        <option value={0}>すべて</option>
        {genresData.map((genre) => (
          <option key={genre.code} value={genre.name}>{genre.name}</option>
        ))}
      </select>
      <select
        value={selectedArea}
        onChange={e => setSelectedArea(e.target.value)}>
        <option value={0}>すべて</option>
        {prefecturesData.map((prefecture) => (
          <option key={prefecture.code} value={prefecture.name}>{prefecture.name}</option>
        ))}
      </select>
    </>
  );
};

export default Filtering;;