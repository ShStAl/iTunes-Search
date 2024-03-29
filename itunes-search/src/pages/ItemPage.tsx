export default function ItemPage() {

  const item = localStorage.item ? JSON.parse(localStorage.item) : undefined;

  return (
    <div className="flex h-full items-center">
      <div className="w-[400px] md:w-96 bg-white rounded-xl shadow-sm p-5">
        <div className="flex gap-5 items-center">
          <img src={item?.artworkUrl100} className="h-32 w-32 rounded-xl" />
          <div className="flex flex-col w-64">
            <p className="bg-gradient-to-r from-fuchsia-400 to-indigo-500 bg-clip-text text-transparent">{item?.trackName}</p>
            <p className="text-gray-700">{item?.artistName}</p>
            <p className="text-gray-700 text-sm mt-3 text-wrap">Album: {item?.collectionName}</p>
          </div>
        </div>
        <div className="w-full h-16 mt-5 flex items-center justify-center bg-gray-100 rounded-lg">
          <audio src={item?.previewUrl} controls>
            <source />
          </audio>
        </div>
        <ul className="mt-5 flex justify-between">
          <a href={item.trackViewUrl} target="_blank" className="text-sm text-fuchsia-600/70 py-2 px-3 rounded-lg hover:text-fuchsia-600 transition-all active:text-fuchsia-700">
            Track page
          </a>
          <a href={item.artistViewUrl} target="_blank" className="text-sm text-fuchsia-600/70 py-2 px-3 rounded-lg hover:text-fuchsia-600 transition-all active:text-fuchsia-700">
            Artist page
          </a>
          <a href={item.collectionViewUrl} target="_blank" className="text-sm text-fuchsia-600/70 py-2 px-3 rounded-lg hover:text-fuchsia-600 transition-all active:text-fuchsia-700">
            Album page
          </a>
        </ul>
      </div>
    </div>
  )
}