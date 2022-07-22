import React from "react";
import { useNavigate } from "react-router-dom";

function SearchResultItem({ result }) {
  const navigate = useNavigate();
  let currentRoute = window.location.href;

  return (
    <div
      onClick={() => {
        if (
          currentRoute === "http://localhost:3000/" ||
          "http://localhost:3000/character/:id"
        ) {
          navigate(`/character/${result._id}`);
        }
      }}
      className="search-result-item"
    >
      {currentRoute !== "http://localhost:3000/comics"
        ? result.name
        : result.title}
    </div>
  );
}

export default SearchResultItem;
