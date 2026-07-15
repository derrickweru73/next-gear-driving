import React from "react";
import { ShieldCheck, CalendarClock, BookOpen } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#F97316]" />,
    title: "Certified Driving Instructors",
    description:
      "Train with NTSA-certified instructors who guide you from your first lesson to your driving test.",
  },
  {
    icon: <CalendarClock className="w-6 h-6 text-[#F97316]" />,
    title: "Flexible Lesson Scheduling",
    description:
      "Choose morning, evening or weekend driving lessons that fit your school or work timetable.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#F97316]" />,
    title: "Interactive Theory Classes",
    description:
      "Practice mock tests, road signs and driving theory online before your practical lessons.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-block bg-orange-100 text-[#F97316] px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Why Choose Next Gear?
            </span>

            <h2 className="text-5xl font-bold text-[#0F172A] mt-6 leading-tight">
              Learn Driving with Confidence &
              <span className="text-[#F97316]"> Safety</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6 mb-10">
              We don't just prepare you to pass your driving test—we prepare you
              to become a responsible, confident and safe driver for life.
            </p>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/540525642/photo/road-or-traffic-signs.jpg?s=2048x2048&w=is&k=20&c=x1ybqc8NL-xPRSO7n5YtkJbFNSBJ9riSgX082FNRWvo="
              alt="Driving Lesson"
              className="rounded-3xl w-full h-[540px] object-cover shadow-xl"
            />

            {/* Floating Quote */}

            <div className="absolute bottom-6 left-6 bg-[#F97316] text-white rounded-xl px-6 py-4 max-w-xs shadow-xl">
              <p className="italic">
                "Safe driving begins with proper training."
              </p>

              <span className="block mt-2 text-sm font-semibold">
                — Lead Instructor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
