import { useState } from "react";
import axios from "axios";

import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = async (e) => {
    try {
      e.preventDefault();
      setQuery(e.target.value);

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      );
      // console.log(response.data.results)
      setResult([...response.data.results, ...result]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              className=""
              placeholder="Search for movie"
              value={query}
              onChange={handleChange}
            />
          </div>
          {result.length > 0 && (
            <ul className="results">
              {result.map((movie, index) => {
                return <li key={index}> {<ResultCard movie={movie} />}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
