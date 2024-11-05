import { WikiResults } from "@/components/WikiResults";
import { roboto } from "./fonts/fonts";
import { SearchWiki } from "@/components/Search";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="w-full  h-full flex flex-col gap-10 items-center">
      <Link  href={"https://en.wikipedia.org/wiki/Special:Random"} className={`text-white ${roboto.className}`}>
        Clik here for a random article
      </Link>
      <SearchWiki/>
      <WikiResults/>
    </div>
    );
}
