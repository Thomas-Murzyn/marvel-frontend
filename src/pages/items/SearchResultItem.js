import React from "react";
import { useNavigate } from "react-router-dom";

function SearchResultItem({ result }) {
  const navigate = useNavigate();
  let currentRoute = window.location.href;

  return (
    <div
      onClick={() => {
        currentRoute !== "http://localhost:3000/comics"
          ? navigate(`/character/${result._id}`)
          : navigate(`/comic`, {
              state: {
                id: result.id,
                name: result.title,
                picture: result.thumbnail,
                description: result.description,
              },
            });
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
