import React, {useState} from 'react';
import "../styles/FAQ.css";
import arrowDown from "../images/arrowDown.svg";
import arrowUp from "../images/arrowUp.svg";

const FAQ = () => {
  const [type, setType] = useState("Champion");
  const [showAnswer, setShowAnswer] = useState(new Array(5).fill(false));

  const faqBtn = (name) => (
    <button
      className={"faq-btn" + (name === type ? " faq-btn-active" : "")}
      onClick={() => setType(name)}
    >
      About {name}
    </button>
  );

  const answer = "To improve your ratings, focus on punctuality, maintaining clear communication with customers, and handling goods with care. Providing excellent customer service and being polite can also make a big difference. Responding promptly to requests and avoiding cancellations will help build trust and improve your overall performance.";

  const QAs = [
    {q: "What is GoGoods?", ans: answer},
    {q: "How do I use GoGoods?", ans: answer},
    {q: "Can I cancel rides?", ans: answer},
    {q: "How can I improve my ratings?", ans: answer},
    {q: "Can I rate customers?", ans: answer}
  ];

  const toogleShowAnswer = (index) => {
    const newShowAnswer = [...showAnswer];
    newShowAnswer[index] = !newShowAnswer[index];
    setShowAnswer(newShowAnswer);
  }

  return (
    <div className="faq-parent">
      <p className="faq-heading">Frequently Asked Questions</p>
      <div className="faq-btns-wrapper">
        {faqBtn("Champion")}
        {faqBtn("Sender")}
      </div>
      <div className="faqs-wrapper">
        {QAs.map((QA, index) => (
          <div key={index} className="faq">
            <div className="question-wrapper">
              <p className="question">{QA.q}</p>
              {(!showAnswer[index]?
                  <img className="arrow-btn" src={arrowDown} alt="Arrow Down"
                       onClick={() => toogleShowAnswer(index)}/> :
                  <img className="arrow-btn" src={arrowUp} alt="Arrow Up"
                       onClick={() => toogleShowAnswer(index)}/>
              )}
            </div>
            {showAnswer[index] &&
              <p className="answer">{QA.ans}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
