import "./styles/App.scss";
import ForecastsList from "./components/ForecastsList";

function App() {
  return (
    <main>
      <div className="content">
        <h1 className="content__title">Current Forecasts</h1>
        <ForecastsList />
      </div>
    </main>
  );
}

export default App;
