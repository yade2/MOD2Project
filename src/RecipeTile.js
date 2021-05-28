import React, { useEffect } from "react";
import "./index.css"
import { v4 as uuidv4 } from "uuid"; //responsible for creating unique IDs

function RecipeTile({ recipe }) {
    return(
      /*if a recipe image does not contain any of these then recipe will not be shown*/
      recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && ( //match with regexp; specifies a search pattern
        <div
          className="app"
          onClick={() => window.open(recipe["recipe"]["url"])}
        >
          <img className="recipeTile_img" src={recipe["recipe"]["image"]} />
          <p className="recipeTile_name" key={uuidv4()}>
            {recipe["recipe"]["label"]}
          </p>
        </div>
      )
    );
  }

export default RecipeTile




