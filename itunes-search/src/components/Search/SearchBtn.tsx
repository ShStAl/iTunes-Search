export default function SearchBtn({ search, refetch }) {
  return (
    <button
      disabled={!search}
      onClick={refetch}
      className="mx-2 bg-indigo-400 text-white w-20 h-8 rounded-lg hover:bg-indigo-500 hover:text-white active:scale-90 active:bg-indigo-500 transition-all disabled:bg-gray-200 disabled:active:scale-100 disabled:cursor-not-allowed disabled:hover:text-gray-700"
    >
      Go
    </button>
  )
}
