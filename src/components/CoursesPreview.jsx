import React from "react";
import { Link } from "react-router-dom";
import { Clock3, Users, Star, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Beginner Driving",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    duration: "6 Weeks",
    students: "500+ Students",
    rating: "4.9",
    price: "KES 15,000",
    description:
      "Perfect for first-time drivers. Learn road safety, vehicle control, parking, and driving confidence.",
  },
  {
    id: 2,
    title: "Defensive Driving",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    duration: "4 Weeks",
    students: "320+ Students",
    rating: "4.8",
    price: "KES 12,500",
    description:
      "Improve hazard awareness, emergency handling, and safe driving techniques for all road conditions.",
  },
  {
    id: 3,
    title: "Automatic Driving",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    duration: "5 Weeks",
    students: "420+ Students",
    rating: "5.0",
    price: "KES 14,000",
    description:
      "Master automatic vehicle operation with practical lessons from experienced instructors.",
  },
];

const CoursesPreview = () => {
  return (
    <section id="courses" className="bg-[#F8F6F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#234E3B] font-semibold uppercase tracking-wider">
            Our Courses
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Learn with Professional Driving Courses
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Whether you're a complete beginner or looking to sharpen your
            driving skills, Next Gear Driving LMS offers practical and theory
            courses designed to help you become a safe and confident driver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-7">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-green-100 text-[#234E3B] px-3 py-1 rounded-full text-sm font-semibold">
                    {course.price}
                  </span>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star fill="currentColor" size={18} />
                    <span className="text-gray-700 font-medium">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {course.description}
                </p>

                <div className="flex justify-between mt-6 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock3 size={18} />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    to="/courses"
                    className="flex-1 border-2 border-[#234E3B] text-[#234E3B] py-3 rounded-xl text-center font-semibold hover:bg-[#234E3B] hover:text-white transition"
                  >
                    Learn More
                  </Link>

                  <Link
                    to="/register"
                    className="flex-1 bg-[#234E3B] text-white py-3 rounded-xl text-center font-semibold hover:bg-[#18382A] transition flex justify-center items-center gap-2"
                  >
                    Enroll
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 bg-[#234E3B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#18382A] transition"
          >
            View All Courses
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
