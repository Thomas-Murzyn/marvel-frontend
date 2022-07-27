import logo from "./assets/logo.png";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";

const Header = ({ setDataSearch, setX, setValidateData, dataSearch }) => {
  const searchRef = useRef();
  const [data, setData] = useState("");

  const navigate = useNavigate();
  let currentRoute = window.location.href;

  const getPosition = () => {
    const x = searchRef.current.offsetLeft;
    setX(x);
  };

  useEffect(() => {
    if (dataSearch === "") {
      setData("");
    }
  }, [dataSearch]);

  useEffect(() => {
    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentRoute === "https://marvel-by-tm.netlify.app/" ||
      currentRoute === "https://marvel-by-tm.netlify.app/comics"
    ) {
      setValidateData(data);
      setDataSearch("");
    } else {
      setDataSearch("");
      setValidateData(data);
      navigate("/");
    }
  };

  return (
    <header>
      <div className="header-container">
        <img
          onClick={() => {
            setDataSearch("");
            setValidateData("");
            setData("");
            navigate("/");
          }}
          src={logo}
          alt="logo marvel"
        />
        <form onSubmit={handleSubmit}>
          <input
            ref={searchRef}
            onChange={(e) => {
              setDataSearch(e.target.value);
              setData(e.target.value);
            }}
            type="text"
            placeholder={
              currentRoute !== "https://marvel-by-tm.netlify.app/comics"
                ? "Search a character"
                : "Search comics"
            }
            value={data}
          />
        </form>
        <nav>
          <button
            onClick={() => {
              setData("");
              setDataSearch("");
              setValidateData("");
              navigate("/");
            }}
          >
            Characters
          </button>
          <button
            onClick={() => {
              setData("");
              setDataSearch("");
              setValidateData("");
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
