import { Clock3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-slate-200">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <span className="bg-orange-100 text-[#F97316] px-4 py-1 rounded-full text-sm font-semibold">
          {course.level}
        </span>

        <h3 className="text-2xl font-bold text-[#0F172A] mt-4">
          {course.title}
        </h3>

        <p className="text-slate-600 mt-3 leading-7">{course.description}</p>

        <div className="flex justify-between mt-6 text-slate-500">
          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {course.duration}
          </div>

          <div className="flex items-center gap-2">
            <Users size={18} />
            {course.students}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-sm text-slate-500">Course Fee</p>
            <h2 className="text-3xl font-bold text-[#F97316]">
              KES {course.price}
            </h2>
          </div>

          <Link
            to="/booking"
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            Book Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
