import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./items/Item";

const Comics = ({ dataSearch }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (dataSearch !== "") {
          const response = await axios.get(
            `http://localhost:4000/comics/title/${dataSearch}`
          );

          setData(response.data);
          setIsLoading(true);
        } else {
          const response = await axios.get(`http://localhost:4000/comics`);

          setData(response.data);
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [dataSearch]);

  return isLoading ? (
    <div className="main-container">
      {data.results.map((elem, index) => {
        return (
          <Item
            key={index}
            picture={elem.thumbnail}
            name={elem.title}
            id={elem._id}
            description={elem.description}
          />
        );
      })}
    </div>
  ) : (
    <div>Loading ...</div>
  );
};

export default Comics;
