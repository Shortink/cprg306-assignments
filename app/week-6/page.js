"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';
import { useState } from "react";




export default function Page() {
    let itemArray = itemsData.map((contact) => ({...contact}));
    const [items, setItems] = useState(itemArray);
    
    const handleAddItem = (event) => {
        // push to end of array
        setItems(itemArray => [...itemArray,event] );
    }

    return(
        <main className="bg-cyan-200">
            <h1 className="text-xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}