import React from "react";
import { Link, useParams } from "react-router-dom";
import "./pagination.css";

export function Pagination() {
  const { page } = useParams();
  return (
    <div className='pagination'>
      {page >= 1 && (
        <Link to={`/catalog/${Number(page) - 1}`} className='pagination__prev'>
          previous
        </Link>
      )}
      <Link to={`/catalog/${Number(page) + 1}`} className='pagination__next'>
        next
      </Link>
    </div>
  );
}
