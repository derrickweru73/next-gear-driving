import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import defaultLessons from "@/data/theoryLessonsData";
import { ArrowLeft, Clock3, CheckCircle2, PlayCircle } from "lucide-react";

const TheoryLessonDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

 

   const [lessons, setLessons] = useState([]);

   useEffect(() => {
     const savedLessons = localStorage.getItem("theoryLessons");

     if (savedLessons) {
       setLessons(JSON.parse(savedLessons));
     } else {
       setLessons(defaultLessons);
     }
   }, []);

    const lesson = lessons.find((item) => String(item.id) === String(id));

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

        <div className="mt-10">
          {lesson.video ? (
            <iframe
              className="w-full h-96 rounded-2xl"
              src={lesson.video.replace("watch?v=", "embed/")}
              title={lesson.title}
              allowFullScreen
            />
          ) : (
            <div className="bg-[#0F172A] rounded-2xl h-72 flex flex-col items-center justify-center text-white">
              <PlayCircle size={70} className="text-[#F97316]" />
              <p className="mt-4 text-lg">No video available</p>
            </div>
          )}
        </div>

        {/* Lesson Content */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#0F172A] mt-8">
            Lesson Objectives
          </h2>

          <ul className="list-disc pl-6 mt-5 space-y-2 text-gray-700">
            {lesson.objectives
              ?.split("•")
              .filter((item) => item.trim() !== "")
              .map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
          </ul>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-8">
            Lesson Notes
          </h2>

          <div className="text-gray-700 mt-5 leading-8 whitespace-pre-line">
            {lesson.notes}
          </div>
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
