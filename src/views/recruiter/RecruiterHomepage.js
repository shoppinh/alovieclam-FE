import React from "react";
import RecruiterHeader from "./RecruiterHeader";
import RecruiterFooter from "./RecruiterFooter";
const RecruiterHomepage = () => {
  return (
    <div className="RecruiterHomepage">
      <RecruiterHeader />
      <div className="RecruiterContainer"></div>
      <RecruiterFooter />
    </div>
  );
};

export default RecruiterHomepage;
