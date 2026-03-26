import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center rounded bg-lead">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            This stock prediction portal utilises Machine Learning technologies,
            specifically employing Keras and LSTM model, integrated within the
            Django framework. It forecasts future stock prices by analysing 100-day
            and 200-day moving averages and essential indicators widely used
            bystock analysts to inform trading and investment decisions.
          </p>
          <Button text="Login" class="btn-outline-info" />
        </div>
      </div>
    </>
  );
};

export default Main;
