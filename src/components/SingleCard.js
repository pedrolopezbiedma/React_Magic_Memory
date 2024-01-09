const SingleCard = ({ card, handleCardChoice }) => {
  const handleCardClick = () => {
    handleCardChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={handleCardClick}
          className="back"
          src="../../img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
