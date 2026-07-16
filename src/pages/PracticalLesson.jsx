import { Link } from "react-router-dom";
import { CarFront, Clock3, MapPin } from "lucide-react";

const practicalLessons = [
  {
    id: 1,
    title: "Vehicle Controls",
    duration: "1 Hour",
    location: "Training Ground",
    status: "Available",
  },
  {
    id: 2,
    title: "Moving Off & Stopping",
    duration: "1 Hour",
    location: "Training Ground",
    status: "Available",
  },
  {
    id: 3,
    title: "Gear Changing",
    duration: "1 Hour",
    location: "City Roads",
    status: "Available",
  },
  {
    id: 4,
    title: "Parking",
    duration: "1 Hour",
    location: "City Roads",
    status: "Locked",
  },
];

const PracticalLessons = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2] px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">
          Practical Driving Lessons
        </h1>

        <p className="text-gray-600 mt-2">
          Book and complete practical driving sessions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {practicalLessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-2xl shadow-lg p-6">
            <CarFront className="text-[#F97316]" size={40} />

            <h2 className="text-2xl font-bold mt-5 text-[#0F172A]">
              {lesson.title}
            </h2>

            <div className="mt-6 space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                {lesson.duration}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {lesson.location}
              </div>
            </div>

            <div className="mt-8">
              {lesson.status === "Available" ? (
                <Link
                  to={`/practical-lessons/${lesson.id}`}
                  className="block text-center bg-[#F97316] text-white rounded-xl py-3 hover:bg-orange-600"
                >
                  View Lesson
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full bg-gray-300 text-gray-600 rounded-xl py-3"
                >
                  Locked
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticalLessons;
