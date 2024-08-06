"use client"
import Item from "./item";
import { useEffect, useState } from "react";


export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");
    let itemArray = items.map((contact) => ({...contact}));
    itemArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    const handleName = (event) => {
        setSortBy("name")
    }

    const handleCategory = (event) => {
        setSortBy("category")
        // {sortBy === "category" ?event.target.className = ("bg-purple-700 p-1 m-2 w-28 rounded"): className="bg-purple-400 p-1 m-2 w-28 rounded"  }


    }

    const clicked = "bg-purple-400 p-1 m-2 w-28 rounded"
    const notclicked = "bg-purple-700 p-1 m-2 w-28 rounded"

    return(
        <main>
            <div>
                <h1>Sort By:</h1>
                <button className={sortBy === "name" ? "bg-purple-200 p-1 m-2 w-28 rounded": "bg-purple-300 p-1 m-2 w-28 rounded" } onClick={handleName}>Name</button>
                <button className={sortBy === "category" ? "bg-purple-200 p-1 m-2 w-28 rounded": "bg-purple-300 p-1 m-2 w-28 rounded" } onClick={handleCategory}>Category</button>
            </div>
            <div>
                {itemArray.map( (food) => (
                <Item foodObj={food} key={food.id} onSelect={onItemSelect} />
            ) )
            }
            </div>
        </main>
    );

}