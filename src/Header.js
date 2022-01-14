import logo from "./assets/logo.png";
import { useNavigate } from "react-router";
import { useState } from "react";

const Header = ({ setDataSearch }) => {
  const [data, setData] = useState("");

  const navigate = useNavigate();
  let currentRoute = window.location.href;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentRoute === "http://localhost:3000/" ||
      currentRoute === "http://localhost:3000/comics"
    ) {
      setDataSearch(data);
    } else {
      navigate("/");
      setDataSearch(data);
    }
  };

  return (
    <header>
      <div className="header-container">
        <img
          onClick={() => {
            setDataSearch("");
            setData("");
            navigate("/");
          }}
          src={logo}
          alt="logo marvel"
        />
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setData(e.target.value);
            }}
            type="text"
            placeholder="Search a character"
            value={data}
          />
        </form>
        <nav>
          <button
            onClick={() => {
              setData("");
              setDataSearch("");
              navigate("/");
            }}
          >
            Characters
          </button>
          <button
            onClick={() => {
              setData("");
              setDataSearch("");
              navigate("/comics");
            }}
          >
            Comics
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
