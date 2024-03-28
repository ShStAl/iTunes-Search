export default function SearchInput({ search, setSearch }) {
  return (
    <input
      type="email"
      placeholder="Search"
      value={search}
      onChange={(e) => { setSearch(e.target.value) }}
      className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white pl-11 pr-5 outline-none" />
  )
}
