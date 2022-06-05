import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
// import { v4 } from "uuid";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleItemCategoryChange(e){
    
    setSelectedCategory(e.target.value)

  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }
  
  const itemsToDisplay = items.filter((item) => selectedCategory === "All"|| item.category === selectedCategory).filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  
  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit} />
      <Filter 
        search={search} 
        onCategoryChange={handleItemCategoryChange} 
        onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
