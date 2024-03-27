import axios from "axios"
import { useState } from "react";

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const getList = async () => {
    const data = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&media=music`);
    console.log(data)
  };

  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center">
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
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white pl-11 pr-5 outline-none" 
          />
          <button 
            onClick={getList} 
            className="mx-2 bg-gray-200 w-20 h-8 rounded-lg hover:bg-fuchsia-500/60 hover:text-white active:scale-90 active:bg-fuchsia-700 transition-all"
          >
            Go
          </button>
        </div>
      </main>
    </>
  )
}

export default App
