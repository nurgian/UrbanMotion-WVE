import React from "react";
import "./headerAdmin.css";

const HeaderAdmin = ({ title }) => {
  return (
    <headerAdmin className="headerAdmin-container">
      <div className="headerAdmin-content">
        <h1 className="headerAdmin-title">{title}</h1>
      </div>
    </headerAdmin>
  );
};

export default HeaderAdmin;
