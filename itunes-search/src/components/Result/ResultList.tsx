import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ResultItem from "./ResultItem";
import ResultLoadMore from "./ResultLoadMore";
import ItemSkeleton from "../Skeletons/ItemSkeleton";
import { FetchNextPageOptions, InfiniteQueryObserverResult, InfiniteData } from "@tanstack/react-query";
import FetchedItem from "../../interfaces/app.interface";

interface Props {
  status: "error" | "pending" | "success";
  error: Error | null;
  data: InfiniteData<FetchedItem[], unknown> | undefined;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<InfiniteData<FetchedItem[], unknown>, Error>>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isSearch: boolean;
}

export default function ResultList({ status, error, data, fetchNextPage, hasNextPage, isFetchingNextPage, isSearch }: Props): JSX.Element {

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView])

  return (
    <>
      {status === 'pending' && isSearch ? (
        <ItemSkeleton />
      )
        : status === 'pending' ?
          (
            <p className="text-gray-500 mt-2 text-sm">Enter artist name, track name etc.</p>
          ) : status === 'error' ? (
            <p>Error: {error?.message}</p>
          ) : (
            <div className="w-[350px] md:w-96 h-[400px] overflow-y-scroll flex gap-2 flex-col items-center rounded-xl">
              {data?.pages.map((group, i) => (
                <div className="flex flex-col gap-2" key={i}>
                  {group.map((item) => (
                    <ResultItem key={item.trackId} item={item} />
                  ))}
                </div>
              ))}
              <ResultLoadMore
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                hasData={data ? data.pages[0].length > 0 : false}
                isSearch={isSearch} />
              <div className="mt-5" ref={ref} />
            </div >
          )
      }
    </>
  )
}
