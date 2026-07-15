import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What does a red traffic light mean?",
    options: ["Go", "Slow down", "Stop", "Speed up"],
    answer: "Stop",
  },
  {
    question: "What should you do before changing lanes?",
    options: [
      "Accelerate",
      "Check mirrors and blind spot",
      "Honk",
      "Brake suddenly",
    ],
    answer: "Check mirrors and blind spot",
  },
  {
    question: "Who has the right of way at a zebra crossing?",
    options: ["Vehicles", "Motorcycles", "Pedestrians", "Cyclists"],
    answer: "Pedestrians",
  },
  {
    question: "What is the speed limit in most towns?",
    options: ["50 km/h", "80 km/h", "100 km/h", "120 km/h"],
    answer: "50 km/h",
  },
  {
    question: "What colour is a warning road sign?",
    options: ["Blue", "Green", "Yellow", "Black"],
    answer: "Yellow",
  },
];

const TheoryQuiz = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    let newScore = score;

    if (option === questions[current].answer) {
      newScore++;
      setScore(newScore);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const passed = newScore >= 4;

      localStorage.setItem(
        "theoryResult",
        JSON.stringify({
          score: newScore,
          total: questions.length,
          passed,
        }),
      );

      navigate("/theory-results");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-12 px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-[#0F172A]">Theory Assessment</h1>

        <p className="mt-2 text-gray-500">
          Question {current + 1} of {questions.length}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-8">
            {questions[current].question}
          </h2>

          <div className="space-y-4">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left border rounded-xl p-4 hover:bg-[#F97316] hover:text-white transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryQuiz;
