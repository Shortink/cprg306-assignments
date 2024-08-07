"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";
import MealIdea from "./meal-ideas";
import { useUserAuth } from '../_utils/auth-context';




export default function Page() {
    const { user } = useUserAuth();
    let itemArray = itemsData.map((contact) => ({...contact}));
    const [items, setItems] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState('');

    if (!user) {
        return 
      }
    
    const handleAddItem = (event) => {
        // push to end of array
        setItems(itemArray => [...itemArray,event] );
    }

    const handleClick = (item) => {
        let cleanedName = item.split(",")[0].trim();
        cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        console.log(cleanedName)
        setSelectedItemName(cleanedName)
    };

    return(
        <main className="bg-cyan-200">
            <h1 className="text-xl">Shopping List</h1>

            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleClick} />
                </div>
                <div>
                    <MealIdea mealIngredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}