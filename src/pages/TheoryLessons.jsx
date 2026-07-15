import { Link } from "react-router-dom";
import theoryLessons from "../data/theoryLessonsData";
import { BookOpen, Clock3, CheckCircle, Lock, PlayCircle } from "lucide-react";

const TheoryLessons = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2] px-10 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">Theory Lessons</h1>

        <p className="text-gray-600 mt-2">
          Complete every lesson before attempting the theory test.
        </p>
      </div>

      {/* Progress Card */}

      <div className="bg-white rounded-2xl shadow p-8 mb-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Overall Progress</h2>

          <span className="font-semibold text-[#F97316]">0%</span>
        </div>

        <div className="w-full bg-gray-200 h-3 rounded-full mt-5">
          <div className="bg-[#F97316] h-3 rounded-full w-0"></div>
        </div>
      </div>

      {/* Lessons */}

      <div className="grid lg:grid-cols-2 gap-8">
        {theoryLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-2xl shadow p-6 border-l-4 border-[#F97316]"
          >
            <div className="flex justify-between">
              <BookOpen className="text-[#F97316]" />

              {lesson.status === "Completed" && (
                <CheckCircle className="text-green-600" />
              )}

              {lesson.status === "Locked" && <Lock className="text-gray-500" />}
            </div>

            <h2 className="text-2xl font-bold mt-5">{lesson.title}</h2>

            <p className="text-gray-600 mt-4">{lesson.description}</p>

            <div className="flex items-center gap-2 mt-6 text-gray-500">
              <Clock3 size={18} />

              {lesson.duration}
            </div>

            {lesson.status === "Locked" ? (
              <button
                disabled
                className="mt-6 w-full bg-gray-300 text-gray-600 py-3 rounded-xl cursor-not-allowed"
              >
                Locked
              </button>
            ) : (
              <Link
                to={`/theory-lessons/${lesson.id}`}
                className="mt-6 w-full bg-[#F97316] text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-orange-600"
              >
                <PlayCircle size={20} />
                Start Lesson
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheoryLessons;
