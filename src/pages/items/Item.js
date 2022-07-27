import { useNavigate } from "react-router";
import { useState } from "react";

const Item = ({ picture, name, id, description, isNavigate }) => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  let currentRoute = window.location.href;

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => {
        if (isNavigate) {
          if (currentRoute === "https://marvel-by-tm.netlify.app/comics") {
            navigate(`/comic`, {
              state: { id: id, name: name, picture: picture, description },
            });
          } else {
            navigate(`/character/${id}`);
          }
        }
      }}
      className="item"
    >
      <img src={`${picture.path}.${picture.extension}`} alt={name} />

      <div className={`item-info ${isActive ? "view" : "hide"}`}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
