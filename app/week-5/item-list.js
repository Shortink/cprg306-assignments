"use client"
import Item from "./item";
import { useState } from "react";
import itemData from './items.json';


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");
    let itemArray = itemData.map((contact) => ({...contact}));

    itemArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    const handleName = (event) => {
        setSortBy("name")
    }

    const handleCategory = (event) => {
        setSortBy("category")
    }

    return(
        <main>
            <div>
                <h1>Sort By:</h1>
                <button className={sortBy === "name" ? "bg-purple-200 p-1 m-2 w-28 rounded": "bg-purple-300 p-1 m-2 w-28 rounded" } onClick={handleName}>Name</button>
                <button className={sortBy === "category" ? "bg-purple-200 p-1 m-2 w-28 rounded": "bg-purple-300 p-1 m-2 w-28 rounded" } onClick={handleCategory}>Category</button>
                <button className="bg-purple-400 p-1 m-2 w-28 rounded" onClick={handleCategory}>Group</button>
            </div>
            <div>
                {itemArray.map( (food) => (
                <Item foodObj={food} />
            ) )
            }
            </div>
        </main>
    );

}