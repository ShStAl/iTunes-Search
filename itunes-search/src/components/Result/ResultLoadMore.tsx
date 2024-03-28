export default function ResultLoadMore({ isFetchingNextPage, hasNextPage, hasData, isSearch }) {
  return (
    <p className="text-gray-500 text-sm">
      {isFetchingNextPage
        ? 'Loading more...'
        : hasNextPage
          ? 'Scroll down to load more'
          : hasData || isSearch
            ? 'Nothing more to load'
            : 'Enter artist name, track name etc.'}
    </p>
  )
}
