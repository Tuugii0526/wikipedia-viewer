import { roboto } from "../fonts/fonts";


export default function Page() {
    
  return (
    <div className="w-full  h-[200px] flex flex-col items-center">
      <p className={`text-white ${roboto.className}`}>Seen wikis</p>
    </div>
  );
}
