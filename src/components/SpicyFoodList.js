import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);


  // Adding
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const copyFoods = [...foods, newFood]
    setFoods(copyFoods);
  }

  // Deleting
  function handleFoodDelete(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  // Updating 
  function handleHeatLevel(id) {
    const newFoodArray = foods.map((food) => {
      if(food.id === id) {
        return {...food, heatLevel: food.heatLevel + 1}
      } else {
        return food;
      }
    })
    setFoods(newFoodArray)
  }

  const foodList = foods.map((food) => (
    <li onClick={handleHeatLevel} onClick={handleFoodDelete} key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
