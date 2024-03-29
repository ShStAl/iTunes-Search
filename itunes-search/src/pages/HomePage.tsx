import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import SearchBar from "../components/Search/SearchBar";
import ResultList from "../components/Result/ResultList";
import { useState } from "react";
import FetchedItem from "../interfaces/app.interface";


interface FetchedItemsResponse {
  results: FetchedItem[];
}

export default function Homepage() {

  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

  const fetchItems = async ({ pageParam }: { pageParam: number | undefined }) => {
    const response = await axios.get<FetchedItemsResponse>(`https://itunes.apple.com/search?term=${search}&media=music&limit=5&offset=${pageParam}`);
    return response.data.results;
  };

  const { data, error, status, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: fetchItems,
    initialPageParam: 0,
    getNextPageParam: (lastpage, pages) => {
      if (lastpage.length < 5) {
        return undefined;
      }
      return (pages.length * 5);
    }
  });

  return (
    <>
      <h1 className="mt-48 bg-gradient-to-r from-fuchsia-400 to-indigo-500 bg-clip-text text-transparent text-5xl font-bold">
        iTunes Search
      </h1>
      <SearchBar search={search} setSearch={setSearch} refetch={refetch} />
      <ResultList
        isSearch={search.length > 0}
        status={status}
        error={error}
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  )
}
