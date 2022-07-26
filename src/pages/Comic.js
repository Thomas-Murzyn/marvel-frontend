import React from "react";
import { useLocation } from "react-router-dom";

import Item from "./items/Item";
import SearchResultModal from "./items/SearchResultModal";

const Comic = ({
  isModalActive,
  setIsModalActive,
  x,
  dataSearch,
  setDataSearch,
}) => {
  const location = useLocation();

  const { name, picture, id, description } = location.state;

  return (
    <div className="comic-container">
      <div className="character-container">
        <Item
          isNavigate={false}
          key={id}
          picture={picture}
          name={name}
          id={id}
          description={description}
        />
        <div className="character-info-desc">
          <h4>{name}</h4>
          <p>
            {description !== ""
              ? `${description}`
              : "No description for this character."}
          </p>
        </div>
      </div>

      <SearchResultModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        dataSearch={dataSearch}
        setDataSearch={setDataSearch}
        x={x}
      />
    </div>
  );
};

export default Comic;
