import React from "react";
import Selective_item from "./Selective_item";
import Data from "../Dataset/Content_category.json";

const Selective_card = ({ SubLessonArray }) => {
  return (
    <>
      <div className="selective-card">
        <div className="selective-angle-point"></div>
        {SubLessonArray && SubLessonArray.length > 0 ? (
          SubLessonArray.map((item, index) => (
            <Selective_item key={index} lesson_content={item.Sub_lesson} />
          ))
        ) : (
          <p>No sub-lessons available</p>
        )}
      </div>
    </>
  );
};
export default Selective_card;
