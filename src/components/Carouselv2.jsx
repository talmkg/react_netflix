import { useState, useEffect } from "react";

const App = () => {
  const [lotr, setFirst] = useState([]);
  const [harry, setSecond] = useState([]);
  const [starwars, setThird] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(
        "http://www.omdbapi.com/?apikey=e13e47fa&s=lord%20of%20the%20rings"
      ),
      fetch("http://www.omdbapi.com/?apikey=e13e47fa&s=harry%20potter"),
      fetch("http://www.omdbapi.com/?apikey=e13e47fa&s=star%wars"),
    ])
      .then(([resLotr, resHarry, resStarWars]) =>
        Promise.all([resLotr.json(), resHarry.json(), resStarWars.json()])
      )
      .then(([dataLotr, dataHarry, dataStarWars]) => {
        setFirst(dataLotr);
        setSecond(dataHarry);
        setThird(dataStarWars);
      });
  }, []);
  console.log(lotr, harry, starwars);
};
export default App;
