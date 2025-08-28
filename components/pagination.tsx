'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {

  const getPageUrl = (page: number) => {
    if (page === 1) {
      return '/';
    }
    return `/pages/${page}`;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageUrl(i)}
          className={`
            flex items-center justify-center w-9 h-9 text-sm font-bold rounded-full aspect-square
            transition-all duration-300 ease-in-out bg-transparent
            hover:bg-[#252B52] dark:hover:bg-[#F9F7F6] hover:text-[#F9F7F6] dark:hover:text-black hover:scale-105
            ${
              i === currentPage
                ? 'border-4 border-[#252B52] dark:border-[#F9F7F6] text-[#252B52] dark:text-[#F9F7F6]'
                : 'text-[#252B52] dark:text-[#F9F7F6]'
            }
          `}
        >
          {i}
        </Link>
      );
    }

    return pages;
  };

  // Temporarily show pagination even with 1 page for debugging
  // if (totalPages <= 1) {
  //   return null;
  // }

  return (
    <nav className="flex items-center justify-center space-x-2 py-8">
      <div className="flex items-center space-x-2">{renderPageNumbers()}</div>
    </nav>
  );
}
