
import React from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

interface BlogsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const BlogsPagination = ({ currentPage, totalPages, onPageChange }: BlogsPaginationProps) => {
  return (
    <div className="mt-16 flex justify-center">
      <Pagination>
        <PaginationContent>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => onPageChange(pageNumber)}
                isActive={currentPage === pageNumber}
                className={`cursor-pointer ${
                  currentPage === pageNumber
                    ? 'bg-brewra-blue text-white font-bold border-brewra-blue'
                    : 'text-gray-300 hover:text-brewra-blue hover:bg-brewra-blue/10'
                }`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogsPagination;
