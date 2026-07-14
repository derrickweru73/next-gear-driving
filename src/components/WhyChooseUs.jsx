import React from "react";
import {
  ShieldCheck,
  CalendarClock,
  Car,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#234E3B]" />,
    title: "Certified Instructors",
    description:
      "Learn from experienced instructors dedicated to helping you become a safe and confident driver.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-[#234E3B]" />,
    title: "Flexible Lesson Scheduling",
    description:
      "Book practical driving lessons at times that suit your personal schedule.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#234E3B]" />,
    title: "Interactive Theory Learning",
    description:
      "Study road signs, traffic rules, and mock exams anytime through our online learning platform.",
  },
  {
    icon: <Car className="w-8 h-8 text-[#234E3B]" />,
    title: "Modern Training Vehicles",
    description:
      "Practice using well-maintained manual and automatic vehicles equipped with dual controls.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#234E3B]" />,
    title: "Progress Tracking",
    description:
      "Track completed lessons, quizzes, and your driving performance in one dashboard.",
  },
  {
    icon: <Award className="w-8 h-8 text-[#234E3B]" />,
    title: "High Success Rate",
    description:
      "Thousands of students have successfully earned their driving licenses through Next Gear.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#234E3B] font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Learn From a Driving School You Can Trust
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Next Gear Driving LMS combines expert instructors, flexible
            scheduling, and modern learning tools to provide a complete driving
            education experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80"
              alt="Driving Lesson"
              className="rounded-3xl shadow-xl w-full h-[650px] object-cover"
            />
          </div>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F8F6F2] rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
