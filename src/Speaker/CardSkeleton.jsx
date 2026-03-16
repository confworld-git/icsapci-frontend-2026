import React from "react";

const CardSkeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-box large"></div>
      <div className="skeleton-box small"></div>
      <div className="skeleton-box medium"></div>
      <div className="skeleton-box small"></div>
      <div className="skeleton-box half"></div>
    </div>
  );
};

export default CardSkeleton;
