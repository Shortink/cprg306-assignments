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
        event.target.className = ("bg-purple-700 p-1 m-2 w-28 rounded");
    }

    const handleCategory = (event) => {
        setSortBy("category")
        event.target.className = ("bg-purple-700 p-1 m-2 w-28 rounded");
    }

    return(
        <main>
            <div>
                <h1>Sort By:</h1>
                <button id = "name" className=" bg-purple-400 p-1 m-2 w-28 rounded" onClick={handleName}>Name</button>
                <button id = "category" className="bg-purple-400 p-1 m-2 w-28 rounded" onClick={handleCategory}>Category</button>
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