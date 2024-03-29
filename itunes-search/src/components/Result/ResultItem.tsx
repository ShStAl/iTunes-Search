import FetchedItem from "../../interfaces/app.interface";
import { NavLink } from 'react-router-dom';

interface Props {
  item: FetchedItem;
}

export default function ResultItem({ item }: Props): JSX.Element {

  const handleNavigate = () => {
    localStorage.setItem('item', JSON.stringify(item));
  };

  return (
    <div key={item.trackId} className="w-[350px] md:w-96 flex items-center justify-between shadow-sm bg-white rounded-xl">
      <div className="flex items-center">
        <img src={item.artworkUrl100} className="object-cover w-16 h-16 rounded-xl" />
        <div className="flex flex-col ml-4">
          <p className="text-gray-800 text-sm">{item.trackName}</p>
          <p className="text-gray-500/70 text-sm">{item.artistName}</p>
        </div>
      </div>
      <div className="mx-5 mt-5">
        <NavLink
          to={`/track/${item.trackId}`}
          onClick={() => handleNavigate()}
          className="text-sm text-indigo-500/70 hover:text-indigo-600 transition-colors"
          target="_blank"
        >
          More
        </NavLink>
      </div>
    </div>
  )
}
