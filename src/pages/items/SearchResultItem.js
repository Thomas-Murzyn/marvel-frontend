import React from "react";
import { useNavigate } from "react-router-dom";

function SearchResultItem({ result, setDataSearch }) {
  const navigate = useNavigate();
  let currentRoute = window.location.href;

  return (
    <div
      onClick={() => {
        if (currentRoute !== "https://marvel-by-tm.netlify.app/comics") {
          navigate(`/character/${result._id}`);
          setDataSearch("");
        } else {
          navigate(`/comic`, {
            state: {
              id: result.id,
              name: result.title,
              picture: result.thumbnail,
              description: result.description,
            },
          });
          setDataSearch("");
        }
      }}
      className="search-result-item"
    >
      {currentRoute !== "https://marvel-by-tm.netlify.app/comics"
        ? result.name
        : result.title}
    </div>
  );
}

export default SearchResultItem;
