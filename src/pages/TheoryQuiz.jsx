import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Clock3, CheckCircle2 } from "lucide-react";

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

  const progress = ((current + 1) / questions.length) * 100;

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
    <div className="min-h-screen bg-[#F8F6F2] px-8 py-12">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A]">
            Theory Assessment
          </h1>

          <p className="text-gray-600 mt-2">
            Complete all questions to unlock the next learning stage.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Question Section */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#F97316] font-semibold">
              Question {current + 1} of {questions.length}
            </span>

            <BookOpen className="text-[#F97316]" />
          </div>

          <h2 className="text-3xl font-bold text-[#0F172A] leading-relaxed">
            {questions[current].question}
          </h2>

          <div className="mt-10 space-y-5">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left border-2 border-gray-200 rounded-xl p-5 hover:border-[#F97316] hover:bg-orange-50 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar */}

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-[#0F172A] mb-5">Progress</h3>

            <div className="h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-[#F97316] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-4 text-gray-600">
              {current + 1} of {questions.length} completed
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock3 className="text-[#F97316]" />

              <h3 className="font-bold text-[#0F172A]">Time</h3>
            </div>

            <p className="text-3xl font-bold">20:00</p>

            <p className="text-gray-500 mt-2">
              Timer functionality coming next.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="text-[#F97316]" />

              <h3 className="font-bold text-[#0F172A]">Instructions</h3>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm leading-6">
              <li>• Read every question carefully.</li>

              <li>• Select only one answer.</li>

              <li>• Passing score is 80%.</li>

              <li>• Passing unlocks Practical Lessons.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryQuiz;
