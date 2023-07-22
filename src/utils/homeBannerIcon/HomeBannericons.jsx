import React from "react";
import "./HomeBannerIcons.css";

const HomeBannericons = ({ icon, title }) => {
  return (
    <div className="homeBannerIcon__container">
      <div className="homeBannerIcon__icon">{icon}</div>

      <div className="homeBannerIcons__title">{title}</div>
    </div>
  );
};

export default HomeBannericons;
