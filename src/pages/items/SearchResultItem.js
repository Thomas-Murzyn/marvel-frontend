import React from "react";
import { useNavigate } from "react-router-dom";

function SearchResultItem({ result }) {
  const navigate = useNavigate();
  const currentRoute = window.location.href;

  return (
    <div
      onClick={() => {
        if (currentRoute === "http://localhost:3000/") {
          navigate(`/character/${result._id}`);
        }
      }}
      className="search-result-item"
    >
      {result.name}
    </div>
  );
}

export default SearchResultItem;
