import "./ForecastCard.scss";

const ForecastCard = ({ forecastInfo, closeCard }) => {
  return (
    <article className="forecasts__card card__details">
      <div className="card__header">
        <h2 className="card__title">{forecastInfo.title}</h2>
        <span className="close-icon" onClick={() => closeCard(null)}>
          x
        </span>
      </div>
      <div className="card__body">
        <div className="card__text">
          <p>{forecastInfo.text}</p>
          <span className="card__date">Due date: {forecastInfo.date}</span>
        </div>
        <img
          className="card__image"
          src={process.env.PUBLIC_URL + `${forecastInfo.imageUrl}`}
          alt="map"
        />
      </div>
      <div className="card__footer">
        <div className="footer__info">
          Number of forecasts Made:
          <span className="forecast-number">
            {forecastInfo.forecastsNumber}
          </span>
        </div>
        <div className="footer__info">
          Current forecast:
          <span className="current-forecast">
            {forecastInfo.currentForecast}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ForecastCard;
