import Axios from "axios";
import { useState } from "react";
import "./index.css";
import RecipeTile from "./RecipeTile";

const RecipeSearch = () =>{
  //hooks
  const [query, setquery] = useState(""); //variable query allows user input; only changing when you call the function, updating the value on fron-end
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  //asyncronys function to use await
  const getRecipe = async () => {
    //the process of getting data through an api takes time that's why await is useful
    var result = await Axios.get(url); //axios have more feautures; result will have all the data needed
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  //whenever the search button is clicked this will prevent it from refreshing the page entirely
  const onSubmit = (e) => {
    e.preventDefault(); //prevent reload default action 
    getRecipe();
  };

  return (
    <div className="app">
      <h2 onClick={getRecipe}>Food is a lady's LOVE language</h2>
      <form className="searchBar" onSubmit={onSubmit}>
        <input className="userInput" type="text" placeholder="ingredient" value={query} onChange={(e) => setquery(e.target.value)}/> 
        <input className="submitButt" type="submit" value="Search"/>
      </form>

      <div className="myRecipes">
        {recipes !== [] &&
          recipes.map((recipe) => { //this array is going throug each recipe once at a time
            return <RecipeTile recipe={recipe} />;
          })}
      </div>
    </div>
  );
}

export default RecipeSearch