import axios from "axios";
import { useState } from "react";
import "./index.css";
// import WineTile from './WineTile'

const WineSearch = () =>{
  const [random, setrandom] = useState([]); //hooks are only in functional components
  const [wine, setwine] = useState("");

//   const rapidap_ikey = `8df003be16msh87b70a51f9fcb89p19ac4bjsn37c7ab9799d9`
//   const rapidapi_host = `spoonacular-recipe-food-nutrition-v1.p.rapidapi.com`


  const getRandom = async () => {
   
    // setrandom(result.data.hits);
    // console.log(result.data.hits);
  const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation',
      params: {wine: wine, maxPrice: '50', minRating: '0.7', number: '6'},
      headers: {
        'x-rapidapi-key': '8df003be16msh87b70a51f9fcb89p19ac4bjsn37c7ab9799d9',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      
      let result = await axios.request(options) 
       console.log(result.data);
       setrandom(result.data.recommendedWines);
  };
  const handleChange = (e) => {
    setwine(e.target.value)
    }

  const onSubmit = (e) => {
  e.preventDefault();
  getRandom();
  };

  return (
    <div className="app">
      <h2 onClick={getRandom}>WINE not put a ring on it?!</h2>
        <form onSubmit={onSubmit}>
            <input className="userInput" type="text" placeholder="wine selection" value={wine} onChange={handleChange} />
            <input className="submitButt" type="submit" value="Search"/>
        </form>

    <div className="myRandom">
      {random !== [] &&
        random.map((random,index) => {
          return (
              <div key={index}>
                <p>{random.title}</p>
                <p>{random.price}</p>
                <img src={random.imageUrl} /> 
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default WineSearch