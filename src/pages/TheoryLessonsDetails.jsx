import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import theoryLessons from "@/data/theoryLessonsData";
import { ArrowLeft, Clock3, CheckCircle2, PlayCircle } from "lucide-react";

const TheoryLessonDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

console.log(theoryLessons);
console.log(Array.isArray(theoryLessons))

  const lesson = theoryLessons.find((item) => item.id === Number(id));

  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Lesson Not Found</h1>
      </div>
    );
  }

  const handleComplete = () => {
    setCompleted(true);

    alert("Lesson completed successfully. The next lesson will be unlocked.");
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-12 px-10">
      <Link
        to="/theory-lessons"
        className="flex items-center gap-2 text-[#F97316] font-semibold mb-8"
      >
        <ArrowLeft size={20} />
        Back to Lessons
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">
              {lesson.title}
            </h1>

            <div className="flex items-center gap-2 text-gray-500 mt-4">
              <Clock3 size={18} />

              {lesson.duration}
            </div>
          </div>

          {completed && (
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl">
              <CheckCircle2 size={20} />
              Completed
            </div>
          )}
        </div>

        {/* Video Placeholder */}

        <div className="mt-10 bg-[#0F172A] rounded-2xl h-72 flex flex-col items-center justify-center text-white">
          <PlayCircle size={70} className="text-[#F97316]" />

          <p className="mt-4 text-lg">Lesson Video Placeholder</p>
        </div>

        {/* Lesson Content */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#0F172A]">Lesson Notes</h2>

          <p className="text-gray-700 mt-6 leading-8">{lesson.description}</p>

          <p className="text-gray-700 mt-5 leading-8">
            In this lesson you will learn the important driving concepts
            required before moving to practical training. Carefully study each
            topic, understand the road safety rules and prepare for the theory
            assessment.
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-700">
            <li>Understand the lesson objectives.</li>

            <li>Study all examples carefully.</li>

            <li>Review Kenyan traffic regulations.</li>

            <li>Take notes before attempting the quiz.</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/theory-quiz")}
          className="mt-12 w-full py-4 rounded-xl bg-[#F97316] text-white font-semibold hover:bg-orange-600"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default TheoryLessonDetails;
