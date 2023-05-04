import React, { useState } from "react";

function RecipeCreate({saveRecipe}) {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  
 function submitHandler(event){
   event.preventDefault()
   setName('')
   setCuisine('')
   setIngredients('')
   setPhoto('')
   setPreparation('')
   saveRecipe({name,photo,cuisine,ingredients,preparation})
 }
 const nameChangeHandler = (event) => setName(event.target.value);
 const cuisineChangeHandler = (event) => setCuisine(event.target.value);
 const photoChangeHandler = (event) => setPhoto(event.target.value);
 const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
 const preparationChangeHandler = (event) => setPreparation(event.target.value);
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              {(
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  size="9"
                  required={true}
                  value={name}
                  onChange={nameChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  placeholder="cuisine"
                  size="9"
                  required={true}
                  value={cuisine}
                  onChange={cuisineChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="URL"
                  size="9"
                  required={true}
                  value={photo}
                  onChange={photoChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="ingredients"
                  size="9"
                  required={true}
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea 
                  id="preperation"
                  name="preparation"
                  type="text"
                  placeholder="preparation"
                  size="9"
                  required={true}
                  value={preparation}
                  onChange={preparationChangeHandler}
                />
              )}
            </td>
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
