import React, {useEffect, useState} from 'react';
import "../styles/FAQ.css";
import { championFAQs, senderFAQs } from "./FrequentlyAskedQuestions";
import arrowDown from "../images/arrowDown.svg";
import arrowUp from "../images/arrowUp.svg";

let championQAStates = new Array(championFAQs.length).fill(false);
let senderQAStates = new Array(senderFAQs.length).fill(false);

const FAQ = () => {
  const [type, setType] = useState("Champion");
  const [QAs, setQAs] = useState(championFAQs);
  const [QAStates, setQAStates] = useState(championQAStates);

  useEffect(() => {
    if(type === "Champion") {
      setQAs(championFAQs);
      senderQAStates = QAStates;
      setQAStates(championQAStates);
    }
    else {
      setQAs(senderFAQs);
      championQAStates = QAStates;
      setQAStates(senderQAStates);
    }
  }, [type]);

  const faqBtn = (name) => (
    <button
      className={"faq-btn" + (name === type ? " faq-btn-active" : "")}
      onClick={() => setType(name)}
    >
      About {name}
    </button>
  );

  const toogleQAState = (index) => {
    const newQAStates = [...QAStates];
    newQAStates[index] = !newQAStates[index];
    setQAStates(newQAStates);
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
              <p className="question">{QA.question}</p>
              {(!QAStates[index]?
                  <img className="arrow-btn" src={arrowDown} alt="Arrow Down"
                       onClick={() => toogleQAState(index)}/> :
                  <img className="arrow-btn" src={arrowUp} alt="Arrow Up"
                       onClick={() => toogleQAState(index)}/>
              )}
            </div>
            {QAStates[index] &&
              <p className="answer">{QA.answer}</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
