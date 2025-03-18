import React, { useState, useEffect } from "react";
import "./QuizPage.css"; // Ensure styling consistency

const QuizPage = ({ setPage, domain }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/generate_quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ domain }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.quiz) {
          const parsedQuestions = parseQuizData(data.quiz);
          setQuestions(parsedQuestions);
        }
      })
      .catch((error) => console.error("Error fetching quiz:", error));
  }, [domain]);

  const parseQuizData = (quizText) => {
    const questionBlocks = quizText.split("Question:").slice(1);
    return questionBlocks.map((block) => {
      const lines = block.trim().split("\n");
      const question = lines[0].trim();
      const options = lines.slice(1, 5).map((line) => line.trim());
      const correctAnswer = lines[5]?.split(":")[1]?.trim();
      return { question, options, correctAnswer };
    });
  };

  const handleAnswerChange = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score += 1;
      }
    });
    setScore(score);
  };

  return (
    <div className="quiz-container">
      <h2>Quiz on {domain}</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-box">
          <p><strong>{q.question}</strong></p>
          {q.options.map((option, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {score !== null && <p className="score">Your Score: {score}/5</p>}
      <button className="next-button" onClick={() => setPage("videoRecommendations")}>Next</button>
    </div>
  );
};

export default QuizPage;
