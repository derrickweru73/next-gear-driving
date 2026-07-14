import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Brian Kiptoo",
    role: "Beginner Driving Student",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Next Gear Driving LMS made learning to drive enjoyable and stress-free. The instructors were patient, and I passed my driving test on my first attempt.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Wanjiru",
    role: "Automatic Driving Student",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The online theory lessons and progress tracking kept me motivated. Booking practical lessons was simple, and the instructors were very supportive.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Otieno",
    role: "Defensive Driving Student",
    image: "https://i.pravatar.cc/150?img=56",
    review:
      "Professional instructors, flexible schedules, and modern vehicles. I highly recommend Next Gear to anyone looking for quality driving lessons.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-[#F8F6F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#234E3B] font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Hear From Our Successful Students
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            Our learners have successfully completed their driving training and
            earned their licenses through Next Gear Driving LMS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300"
            >
              <Quote className="text-[#234E3B] mb-6" size={40} />

              <p className="text-gray-600 leading-8 mb-8">"{item.review}"</p>

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#234E3B]"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-20 bg-[#234E3B] rounded-3xl text-white p-10 text-center">
          <h3 className="text-3xl font-bold">
            Trusted by Thousands of Learners
          </h3>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            Over 5,000 students have completed their driving lessons with Next
            Gear Driving LMS and achieved an excellent first-time driving test
            pass rate.
          </p>

          <div className="flex justify-center mt-6 gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={24}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="mt-3 text-lg font-semibold">Average Rating: 4.9 / 5</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
