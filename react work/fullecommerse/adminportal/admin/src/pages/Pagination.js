import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

// Reusable Pagination Component
const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className = ""
}) => {
  const getVisiblePages = () => {
    const pages = [];
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, currentPage + halfVisible);
      
      // Adjust if we're near the beginning or end
      if (currentPage <= halfVisible) {
        endPage = maxVisiblePages;
      } else if (currentPage + halfVisible >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
      }
      
      // Add first page and ellipsis if needed
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
      }
      
      // Add visible pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      
      // Add ellipsis and last page if needed
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) return null;

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      {/* First Page Button */}
      {showFirstLast && (
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`
            flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200
            ${currentPage === 1 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50' 
              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
            }
          `}
          aria-label="Go to first page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>
      )}

      {/* Previous Page Button */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200
            ${currentPage === 1 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50' 
              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
            }
          `}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => (
          <React.Fragment key={index}>
            {page === '...' ? (
              <span className="flex items-center justify-center w-9 h-9 text-gray-500 text-sm">
                ...
              </span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`
                  flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-medium transition-all duration-200
                  ${currentPage === page
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md transform scale-105'
                    : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
                  }
                `}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Next Page Button */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`
            flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200
            ${currentPage === totalPages 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50' 
              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
            }
          `}
          aria-label="Go to next page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Last Page Button */}
      {showFirstLast && (
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`
            flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200
            ${currentPage === totalPages 
              ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50' 
              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
            }
          `}
          aria-label="Go to last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

// Pagination Info Component
const PaginationInfo = ({ currentPage, totalPages, totalItems, startIndex, endIndex }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-2 sm:space-y-0">
      <div>
        Showing <span className="font-medium text-gray-900">{startIndex + 1}</span> to{' '}
        <span className="font-medium text-gray-900">{Math.min(endIndex, totalItems)}</span> of{' '}
        <span className="font-medium text-gray-900">{totalItems}</span> results
      </div>
      <div>
        Page <span className="font-medium text-gray-900">{currentPage}</span> of{' '}
        <span className="font-medium text-gray-900">{totalPages}</span>
      </div>
    </div>
  );
};

// Items Per Page Selector
const ItemsPerPageSelector = ({ itemsPerPage, onItemsPerPageChange, options = [5, 10, 25, 50, 100] }) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <label htmlFor="itemsPerPage" className="text-gray-700 font-medium">
        Show:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors duration-200"
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <span className="text-gray-700">per page</span>
    </div>
  );
};

// Complete Example with Sample Data
export { Pagination, PaginationInfo, ItemsPerPageSelector };