import { roboto } from "@/app/fonts/fonts";
import { getText } from "@/app/lib/getText";
import Link from "next/link";

export const OneResult = ({ wiki }) => {
  return (
    <Link href={`https://en.wikipedia.org/?curid=${wiki?.pageid}`}>
      <div className="w-full h-fit flex flex-col p-4 gap-4 bg-white">
        <p className={`${roboto.className} text-lg`}>{wiki.title}</p>
        <p>{getText(wiki?.snippet)}</p>
      </div>
    </Link>
  );
};
