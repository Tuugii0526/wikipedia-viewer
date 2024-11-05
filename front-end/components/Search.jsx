"use client";

import { roboto } from "@/app/fonts/fonts";
import { Search, XCircleIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "./context/ContextProvider";

export const SearchWiki = () => {
  const { setQuery } = useQuery();
  const inputRef = useRef(null);
  const [isInputOpen, setIsInputOpen] = useState(false);
  useEffect(() => {
    function onEnter(e) {
      if (e.key == "Enter") {
        setQuery(inputRef.current.value);
      }
    }
    window.addEventListener("keydown", onEnter);
    return () => {
      window.removeEventListener("keydown", onEnter);
    };
  }, []);
  return (
    <>
      {isInputOpen ? (
        <label htmlFor="search" className="relative">
          <input
            ref={inputRef}
            id="search"
            type="text"
            className={`border-[3px] border-yellow-600  px-3 py-2 rounded-2xl text-white bg-[#092b40] outline-none ${roboto.className}`}
          />
          <button
            onClick={() => {
              setIsInputOpen(false);
              setQuery("");
            }}
          >
            <XCircleIcon className="text-yellow-600 absolute right-2 top-[20%] bg-[#092b40]" />
          </button>
        </label>
      ) : (
        <Search
          className="text-yellow-600 h-5 w-5 scale-[3] hover:cursor-pointer"
          onClick={() => {
            setIsInputOpen(true);
          }}
        />
      )}
    </>
  );
};
