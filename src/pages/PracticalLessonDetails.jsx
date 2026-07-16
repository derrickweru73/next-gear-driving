import { useParams, Link } from "react-router-dom";
import practicalLessons from "@/data/practicalLessons";
import { ArrowLeft, Clock3, MapPin, CarFront } from "lucide-react";

const PracticalLessonDetails = () => {
  const { id } = useParams();

  const lesson = practicalLessons.find((item) => item.id === Number(id));

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Practical Lesson Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] px-8 py-12">
      <Link
        to="/practical-lessons"
        className="flex items-center gap-2 text-[#F97316] font-semibold mb-8"
      >
        <ArrowLeft size={20} />
        Back to Practical Lessons
      </Link>

      <div className="bg-white rounded-2xl shadow-xl p-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">
              {lesson.title}
            </h1>

            <div className="flex gap-6 mt-5 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                {lesson.duration}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {lesson.location}
              </div>
            </div>
          </div>

          <CarFront className="text-[#F97316]" size={50} />
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Lesson Objectives
          </h2>

          <p className="text-gray-700 leading-8 mt-5">
            During this practical lesson you will work with an instructor to
            develop real driving skills in a safe environment before moving to
            more advanced road situations.
          </p>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-gray-700">
            <li>Learn correct vehicle control.</li>

            <li>Develop confidence behind the wheel.</li>

            <li>Practice safe driving techniques.</li>

            <li>Receive instructor feedback.</li>
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-[#0F172A]">Requirements</h2>

          <ul className="list-disc pl-6 mt-5 space-y-3 text-gray-700">
            <li>Must have passed Theory Assessment.</li>

            <li>Carry your student identification.</li>

            <li>Arrive 15 minutes before the lesson.</li>

            <li>Wear comfortable footwear.</li>
          </ul>
        </div>

        <Link
          to={`/booking-lesson/${lesson.id}`}
          className="inline-block mt-12 bg-[#F97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Proceed to Booking
        </Link>
      </div>
    </div>
  );
};

export default PracticalLessonDetails;
