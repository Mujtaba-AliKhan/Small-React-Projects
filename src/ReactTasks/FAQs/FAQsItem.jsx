import React, { useState } from "react";

function FAQsItem({ faqItems }) {
  const { questionText, answerText } = faqItems;

  const [isPlus, setIsPlus] = useState(false);

  const toggleisPlus = () => {
    setIsPlus(!isPlus);
  };
  return (
    <div className="card1">
      <div className="cardtop">
        <h2>{questionText}</h2>
        <i onClick={toggleisPlus}>
          <img
            src={
              isPlus
                ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            }
          />
        </i>
      </div>
      {isPlus && (
        <div className="cardbottom">
          <hr />
          <p>{answerText}</p>
        </div>
      )}
    </div>
  );
}
export default FAQsItem;
