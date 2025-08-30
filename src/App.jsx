// import { Fragment } from "react";

const App = () => {
  return (
    <>
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    </>
  );
};


const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary = 
  "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.";
  
  const returnGenre = () => {
    const genre = "RomCom";
    return genre;
  };
  return (
    <div>
      <div>
        <img src="tare_zameen_par.jpg" alt="web img" width="40%" height="40%" />
      </div>
      <h2>Name : {name}</h2>
      <h3>Rating : {5+3.2}</h3>
      <p>
      Summary : {summary}
      </p>
      <p>Genre: {returnGenre()}</p>
    </div>
  );
};


export default App;
