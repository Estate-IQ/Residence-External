import React from "react";

const Tab = ({ label, active, onClick }) => {
  return (
    <div
      style={{
        padding: "0.5rem 1rem",
        cursor: "pointer",
        color: active ? "#ffffff" : "#000000",
        backgroundColor: active ? "#000000" : "#ffffff",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const Tabs = ({ tabs, activeIndex, onTabClick }) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          active={index === activeIndex}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;
