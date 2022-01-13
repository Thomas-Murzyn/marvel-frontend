const Item = ({ picture, name, id, description }) => {
  return (
    <div className="item">
      <img src={`${picture.path}.${picture.extension}`} alt={name} />
      <div className="item-info">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Item;
