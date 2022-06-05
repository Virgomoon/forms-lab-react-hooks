import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("");
  const [array, setArray] = useState(items)

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce");


  function handleItemChange(e){

    const value = e.target.value;
    setItemName(value);
    
  }

  function handleItemCategoryChange(e){
    
    const category = e.target.value
    setItemCategory(category)

  }
  
  function handleFormSubmit(e){

    e.preventDefault();
    
    const name = e.target.name;
    let value = e.target.value;

    const newItem = {
          id: v4(), 
          name: name,
          category: value
        };

    setArray([...array, newItem]);

  }

  function handleSearchField(e){
    setSearchField(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = array.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

  const searchItemsToDisplay = itemsToDisplay.filter((item)=>{  
    if(searchField === item.name) return true;
    return item.name
  })
  

  return (
    <div className="ShoppingList">
      <ItemForm 
      itemName={itemName}
      onItemName={handleItemChange}
      itemCategory={itemCategory}
      onItemCategory={handleItemCategoryChange}
      array={array}
      onItemFormSubmit={handleFormSubmit} />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      text={searchField} 
      onSearchChange={handleSearchField} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
