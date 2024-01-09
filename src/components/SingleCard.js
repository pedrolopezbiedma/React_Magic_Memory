const SingleCard = ({ card, handleCardClick }) => {
  const handleClick = () => {
    handleCardClick(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleClick}
          className="back"
          src="../../img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
