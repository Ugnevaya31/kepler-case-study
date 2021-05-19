import { useState } from "react";
import data from "../../data.json";
import "./ForecastList.scss";
import ForecastsListItem from "../ForecastsListItem";
import ForecastCard from "../ForecastCard";

const ForecastsList = () => {
  const [isForecastInfo, setIsForecastInfo] = useState(null);

  const handleClick = (forecast) => {
    if (isForecastInfo) {
      setIsForecastInfo(null);
    }

    setIsForecastInfo(forecast);
  };

  return (
    <div className="forecasts">
      <div className="forecasts__list">
        {data.map((forecast) => (
          <ForecastsListItem
            key={forecast.id}
            cardInfo={forecast}
            className="forecasts__item"
            onClick={() => handleClick(forecast)}
          />
        ))}
      </div>

      {isForecastInfo && (
        <div className="forecasts__description">
          <ForecastCard
            forecastInfo={isForecastInfo}
            closeCard={setIsForecastInfo}
          />
        </div>
      )}
    </div>
  );
};

export default ForecastsList;
