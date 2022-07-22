import React, { useState, useEffect, useRef } from "react";
import SearchResultItem from "./SearchResultItem";
import axios from "axios";

function SearchResultModal({
  x,
  dataSearch,
  setIsModalActive,
  isModalActive,
  setDataSearch,
}) {
  const [results, setResults] = useState(null);

  const ref = useRef();
  let currentRoute = window.location.href;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/${
          currentRoute !== "http://localhost:3000/comics"
            ? "character/name"
            : "comics/title"
        }/${dataSearch}`
      );

      if (response) {
        setIsModalActive(true);
        setResults(response.data);
        console.log(response.data);
      }
    };
    if (dataSearch.length > 3) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSearch]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isModalActive && ref.current && !ref.current.contains(e.target)) {
        setIsModalActive(false);
        setDataSearch("");
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalActive]);

  return (
    results &&
    dataSearch.length > 0 &&
    isModalActive && (
      <div className="search-result-modal-container">
        <div
          ref={ref}
          style={{
            height: "50vh",
            overflow: "auto",
            zIndex: 99999,
            marginLeft: `${x}px`,
            width: "25%",
            backgroundColor: "white",
          }}
        >
          {results.results.map((result) => {
            return <SearchResultItem key={result._id} result={result} />;
          })}
        </div>
      </div>
    )
  );
}

export default SearchResultModal;
