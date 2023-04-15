import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ currentPage, numberPages, type }) => {
  return (
    <div className="d-flex justify-content-center">
      <nav id="pagination-nav" aria-label="...">
        <ul className="pagination">
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <Link
              to={`/${type}/page/${currentPage-1}`}
              className="page-link"
            >
              Previous
            </Link>
          </li>
          {Array(numberPages)
            .fill("")
            .map((value, page) => (
              <li
                key={page}
                className={
                  page === currentPage - 1 ? "page-item active" : "page-item"
                }
              >
                <Link className="page-link">{page + 1}</Link>
              </li>
            ))}
          <li
            className={
              currentPage === numberPages ? "page-item disabled" : "page-item"
            }
          >
            <Link
              to={currentPage === numberPages ? "#" : currentPage + 1}
              className="page-link"
              href="#"
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

/* 
<li className="page-item">
  <a className="page-link" href="#">
    1
  </a>
</li>
*/
