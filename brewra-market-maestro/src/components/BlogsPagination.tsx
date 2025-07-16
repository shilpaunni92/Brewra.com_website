
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
                className={`cursor-pointer bg-brewra-blue hover:bg-brewra-blue-dark text-white border-brewra-blue ${
                  currentPage === pageNumber
                    ? 'font-bold ring-2 ring-white ring-offset-2 ring-offset-brewra-dark'
                    : ''
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
