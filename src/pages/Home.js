import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./items/Item";
import SearchResultModal from "./items/SearchResultModal";
import ReactPaginate from "react-paginate";

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
  const [pageCount, setPageCount] = useState(0);
  const [skip, setSkip] = useState(0);
  const itemsPerPage = 28;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (validateData) {
          const response = await axios.get(
            `http://localhost:4000/character/name/${validateData}/${skip}`
          );

          setData(response.data);
          setPageCount(Math.ceil(response.data.count / itemsPerPage));
          setIsLoading(true);
        } else {
          const response = await axios.get(
            `http://localhost:4000/home/${skip}`
          );

          setData(response.data);

          setPageCount(Math.ceil(response.data.count / itemsPerPage));
          setIsLoading(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [validateData, skip]);

  const handlePageClick = (event) => {
    setSkip(event.selected * itemsPerPage);
  };

  return isLoading ? (
    <>
      <div className="main-container">
        {data.results.map((elem, index) => {
          return (
            <Item
              isNavigate={true}
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
      <ReactPaginate
        className="paginate-container"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default Home;
