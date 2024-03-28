export default function ResultItem({ item }) {
  return (
    <div key={item.trackId} className="w-96 flex items-center border  border-gray-200 rounded-lg">
      <img src={item.artworkUrl100} className="object-cover w-16 h-16 rounded-lg" />
      <div className="flex flex-col ml-4">
        <p className="text-gray-800 text-sm">{item.trackName}</p>
        <p className="text-gray-500/70 text-sm">{item.artistName}</p>
      </div>
    </div>
  )
}
