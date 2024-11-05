"use client";

import "dotenv/config";
import { useEffect, useState } from "react";
import { useQuery } from "./context/ContextProvider";
import { ResultsDisplaying } from "./ResultsDisplaying";

export const WikiResults = () => {
  const { query } = useQuery();
  const [results, setResults] = useState([]);
  console.log('query is:',query)
  console.log('reselts:',results)
  useEffect(() => {
    async function fetchResults() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ROUTE_POINT}?query=${query}`
        );
        const data = await res.json();
        setResults(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    if (query) {
      fetchResults();
    }
  }, [query]);
  return (
        results.length>0 && <ResultsDisplaying results={results} />
  );
};

