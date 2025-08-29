import React from "react";

const App = () => {
  return (
    <div>

    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    </div>
  );
};


const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="tare_zameen_par.jpg" alt="web img" width="40%" height="40%" />
      </div>
      <h2>Name: Tare Zameen Par</h2>
      <h3>Rating:8.2</h3>
      <p>
        An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.
      </p>
    </div>
  );
};


export default App;
