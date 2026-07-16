import { Link } from "react-router-dom";
import {
  Trophy,
  CircleCheckBig,
  CircleX,
  BookOpen,
  CarFront,
} from "lucide-react";

const TheoryResults = () => {
  const result = JSON.parse(localStorage.getItem("theoryResult"));

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold text-[#0F172A]">
            No Results Found
          </h2>

          <p className="text-gray-600 mt-3">
            Please complete the theory assessment first.
          </p>

          <Link
            to="/theory-quiz"
            className="inline-block mt-6 bg-[#F97316] text-white px-6 py-3 rounded-xl"
          >
            Take Quiz
          </Link>

        </div>
      </div>
    );
  }

  const percentage = Math.round(
    (result.score / result.total) * 100
  );

  return (
    <div className="min-h-screen bg-[#F8F6F2] px-8 py-12">

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-[#0F172A]">
          Theory Assessment Results
        </h1>

        <p className="text-gray-600 mt-2">
          Review your performance before continuing.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Result */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-10">

          <div className="flex items-center gap-4">

            <Trophy className="text-[#F97316]" size={40} />

            <div>

              <h2 className="text-3xl font-bold text-[#0F172A]">
                Your Results
              </h2>

              <p className="text-gray-500">
                Theory Examination Summary
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-slate-50 rounded-xl p-6">

              <h3 className="text-gray-500">
                Score
              </h3>

              <p className="text-3xl font-bold mt-3">
                {result.score}/{result.total}
              </p>

            </div>

            <div className="bg-slate-50 rounded-xl p-6">

              <h3 className="text-gray-500">
                Percentage
              </h3>

              <p className="text-3xl font-bold mt-3">
                {percentage}%
              </p>

            </div>

            <div className="bg-slate-50 rounded-xl p-6">

              <h3 className="text-gray-500">
                Status
              </h3>

              <p
                className={`text-2xl font-bold mt-3 ${
                  result.passed
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {result.passed ? "PASSED" : "FAILED"}
              </p>

            </div>

          </div>

          <div className="mt-10">

            {result.passed ? (

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                <div className="flex items-center gap-3">

                  <CircleCheckBig className="text-green-600" />

                  <h3 className="text-xl font-bold text-green-700">
                    Congratulations!
                  </h3>

                </div>

                <p className="mt-4 text-gray-700">

                  You successfully passed the theory assessment.
                  Practical driving lessons are now unlocked.

                </p>

              </div>

            ) : (

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">

                <div className="flex items-center gap-3">

                  <CircleX className="text-red-600" />

                  <h3 className="text-xl font-bold text-red-700">
                    Better Luck Next Time
                  </h3>

                </div>

                <p className="mt-4 text-gray-700">

                  You did not reach the required passing mark.
                  Review your lessons and retake the assessment.

                </p>

              </div>

            )}

          </div>

        </div>

        {/* Sidebar */}

        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <BookOpen className="text-[#F97316]" />

            <h3 className="text-xl font-bold mt-5">
              Next Step
            </h3>

            <p className="text-gray-600 mt-3">

              {result.passed
                ? "Proceed to practical driving lessons."
                : "Retake the theory assessment."}

            </p>

          </div>

          {result.passed ? (

            <Link
              to="/practical-lessons"
              className="block bg-[#F97316] hover:bg-orange-600 text-white text-center rounded-xl py-4 font-semibold"
            >
              <CarFront className="inline mr-2" size={20} />
              Book Practical Lesson
            </Link>

          ) : (

            <Link
              to="/theory-quiz"
              className="block bg-[#0F172A] hover:bg-slate-800 text-white text-center rounded-xl py-4 font-semibold"
            >
              Retake Quiz
            </Link>

          )}

        </div>

      </div>

    </div>
  );
};

export default TheoryResults;