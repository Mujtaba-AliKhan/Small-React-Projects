import React, { useState } from "react";
import "./FAQs.css";
import FAQsItem from "./FAQsItem";

function FAQs() {
  const faqsList = [
    {
      id: 0,
      questionText: "What is IRC?",
      answerText:
        "IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.",
    },
    {
      id: 1,
      questionText: "What is the medium of instruction?",
      answerText:
        "The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.",
    },
    {
      id: 2,
      questionText:
        "Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?",
      answerText:
        "Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.",
    },
    {
      id: 3,
      questionText: "How will my doubts be cleared? What is the mechanism?",
      answerText:
        "You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.",
    },
  ];

  const [cardVisibility, setCardVisibility] = useState(
    faqsList.map(() => false)
  );
  const toggleCard = (index) => {
    const updatedVisibility = [...cardVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setCardVisibility(updatedVisibility);
  };

  //   const toggleCard = (index) => {
  //     setCardVisibility(!cardVisibility[index]);
  //   };

  return (
    <div className="bgcontainer">
      <h1>FAQs</h1>
      <div className="cardcontainer">
        {faqsList.map((faq, index) => (
          <div className="card1" key={faq.id}>
            <div className="cardtop">
              <h3>{faq.questionText}</h3>
              <i onClick={() => toggleCard(index)}>
                <img
                  src={
                    cardVisibility[index]
                      ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                      : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                  }
                />
              </i>
            </div>
            {cardVisibility[index] && (
              <div className="cardbottom">
                <hr />
                <p>{faq.answerText}</p>
              </div>
            )}
          </div>
        ))}
        {/* {faqsList.map((item)=>{
                    return(
                        <FAQsItem faqItems={item} key={item.id}/>
                    )
                })} */}
      </div>
    </div>
  );
}

export default FAQs;
