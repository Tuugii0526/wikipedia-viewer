import { OneResult } from "./OneResult"

export const ResultsDisplaying=({results})=>{
    return <div className="flex flex-col flex-grow w-full gap-4 overflow-scroll">
    {
      results.map((result) => (
      <OneResult key={result?.pageid} wiki={result} />
    ))}
  </div>
}