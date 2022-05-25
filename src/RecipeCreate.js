import React, { useState } from "react";

function RecipeCreate({ recipe }) {


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState});

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    recipe(formData);
    setFormData({ ...initialFormState })
  }
 
  return (
    <form name="create" className="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" type="text" placeholder="Name" onChange={changeHandler} required={true} value={formData.name}></input></td>
            <td><input name="cuisine" type="text" placeholder="Cuisine" onChange={changeHandler} required={true} value={formData.cuisine}></input></td>
            <td><input name="photo" type="url" placeholder="Photo" onChange={changeHandler} required={true} value={formData.photo}></input></td>
            <td><textarea name="ingredients" type="text" placeholder="Ingredients" onChange={changeHandler} required={true} value={formData.ingredients}></textarea></td>
            <td><textarea name="preparation" type="text" placeholder="Preparation" onChange={changeHandler} required={true} value={formData.preparation}></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
