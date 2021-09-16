import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { IResult } from "@interfaces/results.interfaces";
import { motion } from "framer-motion";

interface Props {
  result: IResult;
}

const Thumbnail: React.FC<Props> = ({ result }) => {
  const BASE_IMAGE_PATH: String = "https://image.tmdb.org/t/p/original/";
  return (
    <motion.div
      className="p-2 transition duration-200 ease-in transform cursor-pointer group sm:hover:scale-105 hover:z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        layout="responsive"
        src={`${BASE_IMAGE_PATH}${result.backdrop_path || result.poster_path}` || `${result.poster_path}`}
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type}`} &bull; {result.release_date || result.first_air_date} &bull;
          <ThumbUpIcon className="h-2 mx-2" /> {result.vote_count}
        </p>
      </div>
    </motion.div>
  );
};
export default Thumbnail;
