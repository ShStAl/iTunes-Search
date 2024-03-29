import { InfiniteData, QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import SearchBtn from "./SearchBtn";
import SearchInput from "./SearchInput";
import FetchedItem from "../../interfaces/app.interface";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<InfiniteData<FetchedItem[], unknown>, Error>>;
}

export default function SearchBar({ search, setSearch, refetch }: Props): JSX.Element {
  return (
    <div className="flex items-center my-5 p-1 h-16 w-[350px] md:w-96 border border-gray-200 rounded-lg">
      <span className="absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" strokeWidth="1" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </span>
      <SearchInput search={search} setSearch={setSearch} />
      <SearchBtn search={search} refetch={refetch} />
    </div>
  )
}
