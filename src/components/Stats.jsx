import React from "react";
import { Users, GraduationCap, Car, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users className="w-8 h-8 text-[#234E3B]" />,
    number: "5,000+",
    title: "Students Trained",
  },
  {
    id: 2,
    icon: <GraduationCap className="w-8 h-8 text-[#234E3B]" />,
    number: "98%",
    title: "Pass Rate",
  },
  {
    id: 3,
    icon: <Car className="w-8 h-8 text-[#234E3B]" />,
    number: "30+",
    title: "Training Vehicles",
  },
  {
    id: 4,
    icon: <Award className="w-8 h-8 text-[#234E3B]" />,
    number: "15+",
    title: "Years Experience",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#F8F6F2] rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center"
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>

              <h2 className="text-4xl font-bold text-[#234E3B]">
                {stat.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
