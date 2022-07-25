import { useNavigate } from "react-router";
import { useState } from "react";

const Item = ({ picture, name, id, description }) => {
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();
  let currentRoute = window.location.href;

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => {
        if (currentRoute === "http://localhost:3000/comics") {
          navigate(`/comic`, {
            state: { id: id, name: name, picture: picture, description },
          });
        } else if (currentRoute === "http://localhost:3000/comic") {
          // do nothing
          return;
        } else {
          navigate(`/character/${id}`);
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
