import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./items/Item";
import SearchResultModal from "./items/SearchResultModal";

const Home = ({
  dataSearch,
  x,
  validateData,
  isModalActive,
  setIsModalActive,
  setDataSearch,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (validateData) {
          const response = await axios.get(
            `http://localhost:4000/character/name/${validateData}`
          );

          setData(response.data);
          setIsLoading(true);
        } else {
          const response = await axios.get(`http://localhost:4000/home`);

          setData(response.data);

          setIsLoading(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [validateData]);

  return isLoading ? (
    <>
      <div className="main-container">
        {data.results.map((elem, index) => {
          return (
            <Item
              key={index}
              picture={elem.thumbnail}
              name={elem.name}
              id={elem._id}
              description={elem.description}
            />
          );
        })}
        <SearchResultModal
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          dataSearch={dataSearch}
          setDataSearch={setDataSearch}
          x={x}
        />
      </div>
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default Home;
