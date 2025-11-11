import React, { useState } from "react";
import { Header } from "@modules/users/components";
import "./PreferencesPage.css";

export const PreferencesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const categories = [
    { name: "Women", image: "👩", color: "#DBF9B8" },
    { name: "Men", image: "👨", color: "#CAE2BC" },
    { name: "Outerwear", image: "🧥", color: "#87A878" },
    { name: "Blatt", image: "👔", color: "#B0BC98" },
    { name: "Accessories", image: "👜", color: "#DBF9B8" },
    { name: "Shoes", image: "👟", color: "#CAE2BC" },
    { name: "Kartueuer", image: "🎽", color: "#87A878" },
    { name: "Headwear", image: "🧢", color: "#B0BC98" }
  ];

  const toggleCategory = (categoryName) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName) 
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="preferences-page">
      <Header />
      
      <div className="preferences-container">
        <div className="preferences-header">
          <h1>Choose your Preferences</h1>
          <p>Select the categories you're interested in</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`category-card ${selectedCategories.includes(category.name) ? 'selected' : ''}`}
              onClick={() => toggleCategory(category.name)}
              style={{ backgroundColor: category.color }}
            >
              <div className="category-image">
                {category.image}
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <div className="heart-icon">
                  {selectedCategories.includes(category.name) ? "❤️" : "🤍"}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="preferences-actions">
          <button className="save-preferences-btn">
            Save Preferences ({selectedCategories.length})
          </button>
        </div>
      </div>
    </div>
  );
};