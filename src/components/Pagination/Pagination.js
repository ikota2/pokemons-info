import React from "react";
import { useParams } from "react-router-dom";
import "./pagination.css";

export function Pagination() {
  const { page } = useParams();
  return (
    <div className='pagination'>
      {page >= 1 && (
        <a href={`/catalog/${Number(page) - 1}`} className='pagination__prev'>
          previous
        </a>
      )}
      <a href={`/catalog/${Number(page) + 1}`} className='pagination__next'>
        next
      </a>
    </div>
  );
}
