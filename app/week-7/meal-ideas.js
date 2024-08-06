"use client"
import { useEffect, useState } from "react";

async function getMealByIngredient(ingredient) {
    try {
        const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.dir(data)
        return data.meals
    }catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default function MealIdea({mealIngredient}) {

    const [meals, setMeals] = useState([]);


    function loadMealIdeas() {
        setMeals(getMealByIngredient(mealIngredient));
    }

    useEffect(() => {
        loadMealIdeas();
      }, [mealIngredient]);

    return(
        <div> Meal Ideas
            <div> Here are some meal ideas using {mealIngredient}
            {meals.map( (food) => (
                <p></p>
            ) )
            }
            </div>
        </div>
    );
}