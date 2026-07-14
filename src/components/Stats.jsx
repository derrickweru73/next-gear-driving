import React from "react";
import { Users, GraduationCap, Car, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-[#F97316]" />,
    number: "5,000+",
    title: "Students Trained",
    description: "Successfully trained across Kenya.",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-8 h-8 text-[#F97316]" />,
    number: "98%",
    title: "Pass Rate",
    description: "First-time driving test success.",
  },
  {
    id: 3,
    icon: <Car className="w-8 h-8 text-[#F97316]" />,
    number: "30+",
    title: "Training Vehicles",
    description: "Modern manual & automatic cars.",
  },
  {
    id: 4,
    icon: <Award className="w-8 h-8 text-[#F97316]" />,
    number: "15+",
    title: "Years Experience",
    description: "Trusted driving instructors.",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-[#F97316] uppercase tracking-widest font-semibold">
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mt-3">
            Numbers That Speak For Us
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We are committed to producing safe, confident and responsible
            drivers through quality instruction and practical training.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center mb-6">
                {stat.icon}
              </div>

              <h2 className="text-5xl font-bold text-[#0F172A]">
                {stat.number}
              </h2>

              <h3 className="mt-3 text-lg font-semibold text-slate-800">
                {stat.title}
              </h3>

              <p className="text-slate-500 mt-2 text-sm leading-6">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
