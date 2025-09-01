 const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "8.2";
  const summary = 
  "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.";
  
  let age = 19;

  // let canWatch = "Not Available";
  // if(age >= 18) canWatch = "Watch Now";

  const canWatch = () => {
    if(age >= 18) return "Watch Now";
    return "Not Available";
  };

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
        {/* <button> {age >=18 ? "Watch Now" : "Not Available" } </button> */}
        {/* <button>{canWatch}</button> */}
        <button>{canWatch()}</button>

      </div>
    );

};

export default NetflixSeries;
