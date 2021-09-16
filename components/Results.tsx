import React from "react";
import Thumbnail from "./Thumbnail";
import IResults from "@interfaces/results.interfaces";
import { AnimatePresence } from "framer-motion";

const Results: React.FC<IResults> = ({ results }) => {
  return (
    <div className="flex-wrap justify-center px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
      <AnimatePresence>
        {results.map((result, idx) => (
          <Thumbnail key={idx} result={result} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Results;
