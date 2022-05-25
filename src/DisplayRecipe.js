import React from "react";

function DisplayRecipe({ recipe, deleteRecipe }) {
    return (
        <tr className="recipe">
            <td style={{width:"10%"}}>{recipe.name}</td>
            <td style={{width:"10%"}}>{recipe.cuisine}</td>
            <td style={{width:"10%"}}><img class="scale-down" alt={recipe.name} name="photo" src={recipe.photo} /></td>
            <td className="content_td" style={{width:"30%"}}><p>{recipe.ingredients}</p></td>
            <td className="content_td" style={{width:"30%"}}><p>{recipe.preparation}</p></td>
            <td style={{width:"10%"}}><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
    )
}

export default DisplayRecipe;
