const ForecastsListItem = ({ cardInfo, onClick }) => {
  return (
    <div className="forecasts__card" onClick={onClick}>
      <div className="card__header">
        <h3 className="card__title">{cardInfo.title}</h3>
      </div>
      <div className="card__body">
        <p className="card__text">{cardInfo.text}</p>
      </div>
    </div>
  );
};

export default ForecastsListItem;
