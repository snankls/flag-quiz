"use client";
import { useState, useEffect } from "react";

const flag = [
  { country: "India", flag: "🇮🇳" },
  { country: "France", flag: "🇫🇷" },
  { country: "United States", flag: "🇺🇸" },
  { country: "Japan", flag: "🇯🇵" },
  { country: "Pakistan", flag: "🇵🇰" },
];

export default function FlagQuiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [options, setOptions] = useState([]);

  const shuffleOptions = (correctCountry) => {
    const otherOptions = flag
      .filter((item) => item.country !== correctCountry)
      .map((item) => item.country);
    const allOptions = [...otherOptions.slice(0, 3), correctCountry];
    return allOptions.sort(() => Math.random() - 0.5);
  };

  const currentFlag = flag[currentQuestion];

  useEffect(() => {
    if (currentFlag) {
      setOptions(shuffleOptions(currentFlag.country));
    }
  }, [currentFlag]);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    if (answer === currentFlag.country) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQuestion + 1 < flag.length) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Flag Quiz</h1>
      {showResult ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>
            Your Score: {score}/{flag.length}
          </p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div>
          <h2>What country does this flag belong to?</h2>
          <div style={{ fontSize: "100px" }}>{currentFlag.flag}</div>
          <div>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={!!userAnswer}
                style={{
                  backgroundColor:
                    userAnswer === option
                      ? option === currentFlag.country
                        ? "green"
                        : "red"
                      : "",
                  color: userAnswer === option ? "white" : "black",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
