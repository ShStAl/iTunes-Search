import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios"
import { useState } from "react";

function App() {

  const [search, setSearch] = useState('');

  const fetchItems = async ({ pageParam }) => {
    console.log('fetching')
    const response = await axios.get(`https://itunes.apple.com/search?term=${search}&media=music&limit=5&offset=${pageParam}`)
    return response.data.results;
  }

  const { data, error, status, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['search', search],
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
      <main className="h-screen w-full flex flex-col items-center">
        <h1 className="bg-gradient-to-r from-fuchsia-400 to-indigo-500 bg-clip-text text-transparent text-5xl font-bold">
          iTunes Search
        </h1>
        <div className="flex items-center mt-2 p-1 w-96 border border-gray-200 rounded-lg">
          <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" strokeWidth="1" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </span>
          <input
            type="email"
            placeholder="Search"
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white pl-11 pr-5 outline-none"
          />
        </div>
        {status === 'pending' ? (
          <p>Loading...</p>
        ) : status === 'error' ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            {data.pages.map((group, i) => (
              <div key={i}>
                {group.map((item) => (
                  <div key={item.trackId} className="flex flex-col border border-cyan-300">
                    <div className="flex">
                      <p>Artist: {item.artistName}</p>
                      <p>Album: {item.collectionName}</p>
                    </div>
                    <p>Track: {item.trackName}</p>
                    <img src={item.artworkUrl100} className="object-cover w-14 h-14 rounded-lg" />
                  </div>
                ))}
              </div>
            ))}
            <div>
              <button
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading more...'
                  : hasNextPage
                    ? 'Load More'
                    : 'Nothing more to load'}
              </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
          </>
        )
        }
      </main>
    </>
  )
}

export default App
