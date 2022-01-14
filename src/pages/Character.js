import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Item from "./items/Item";

const Character = () => {
  const [characterData, setCharacterData] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firstResponse = await axios.get(
          `http://localhost:4000/character/${id}`
        );

        const secondResponse = await axios.get(
          `http://localhost:4000/comics/${id}`
        );

        setCharacterData(firstResponse.data);
        setData(secondResponse.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="main-container">
      <div className="character-container">
        <Item
          key={characterData._id}
          picture={characterData.thumbnail}
          name={characterData.name}
          id={characterData._id}
          description={characterData.description}
        />

        <div className="character-info-desc">
          <h4>{characterData.name}</h4>
          <p>
            {characterData.description !== ""
              ? `${characterData.description}`
              : "No description for this character."}
          </p>
        </div>
      </div>

      {data.comics.map((elem, index) => {
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
    <div>Downloading</div>
  );
};

export default Character;
