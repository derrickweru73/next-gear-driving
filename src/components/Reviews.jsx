import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Brian Mwangi",
    image:
      "https://plus.unsplash.com/premium_photo-1677574622702-d93f29b3708b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    course: "Beginner Driving",
    review:
      "The instructors were patient and professional. I passed my driving test on my first attempt.",
  },
  {
    name: "Faith Wanjiku",
    image:
      "https://plus.unsplash.com/premium_photo-1682088127783-19d007d5a92f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    course: "Automatic Driving",
    review:
      "Booking lessons online was easy and the practical sessions boosted my confidence.",
  },
  {
    name: "Kevin Otieno",
    image:
      "https://media.istockphoto.com/id/157675342/photo/happy-teen-driver.jpg?s=1024x1024&w=is&k=20&c=TO6sA-ckkJJgmttr650TXC1nNo1v0CWXT_F63qCZP6o=",
    course: "Defensive Driving",
    review:
      "Excellent vehicles and friendly instructors. I highly recommend Next Gear.",
  },
  {
    name: "Mercy Njeri",
    image:
      "https://media.istockphoto.com/id/2244719966/photo/asian-woman-driving-a-car.jpg?s=1024x1024&w=is&k=20&c=tSYJmg8hwJaVWG-saPf3j3CKb1aXD9DAzcdjLxZFJEU=",
    course: "Refresher Course",
    review:
      "The online theory lessons together with practical driving made learning enjoyable.",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="py-8 lg:py-7 bg-gradient-to-b from-white to-[#F8FAFC]"
    >
      <div className="max-w-7xl mx-auto px-3">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-10">
          <div>
            <span className="text-[#F97316]  inline-block bg-orange-100 text-[#F97316] px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-3">
              Student Testimonials
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mt-3 leading-tight">
              Hear From Students Who
              <span className="text-[#F97316]"> Passed With Confidence.</span>
            </h2>
          </div>

          <div className="lg:pl-8 border-l-4 border-[#F97316]">
            <p className="mt-2 text-gray-600 leading-7 text-base">
              Thousands of learners across Kenya have trusted Next Gear Driving
              LMS to prepare them for the road. Here are a few experiences from
              our happy students.
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-40 object-top"
              />

              <div className="p-5">
                <div className="flex text-[#F97316] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-6 italic">
                  "{review.review}"
                </p>

                <hr className="my-4" />

                <h3 className="font-bold text-[#0F172A]">{review.name}</h3>

                <span className="text-[#F97316] text-sm font-medium">
                  {review.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
