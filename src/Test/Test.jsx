import React from "react";
import Tabs from "./Tabs";

const UseCase = () => {
  const [categories, setCategories] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    async function fetchCategories() {
      // Replace this with your API endpoint for fetching categories
      const response = await fetch("https://example.com/categories");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeCategory = categories[activeIndex];

  return (
    <div>
      <Tabs
        tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]}
        activeIndex={activeIndex}
        onTabClick={handleTabClick}
      />

      {activeCategory && (
        <div>
          <h2>{activeCategory.label}</h2>
          <p>{activeCategory.label}</p>
        </div>
      )}
    </div>
  );
};
export default UseCase;
