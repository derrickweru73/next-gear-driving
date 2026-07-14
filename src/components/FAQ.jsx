import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can enroll in Next Gear Driving LMS?",
    answer:
      "Anyone who meets the minimum legal driving age and wishes to learn driving or improve their driving skills can enroll in our courses.",
  },
  {
    question: "Do you offer both manual and automatic driving lessons?",
    answer:
      "Yes. We provide comprehensive training for both manual and automatic vehicles, allowing students to choose the option that best suits their needs.",
  },
  {
    question: "How do I book my practical driving lessons?",
    answer:
      "After registering and enrolling in a course, you can log into your student dashboard and book available driving lesson slots online.",
  },
  {
    question: "Can I reschedule a booked lesson?",
    answer:
      "Yes. Students can reschedule their lessons through the dashboard, provided the request is made before the scheduled lesson time.",
  },
  {
    question: "Will I receive a certificate after completing my course?",
    answer:
      "Yes. Upon successful completion of your training program, you'll receive a course completion certificate and be prepared for the official driving test.",
  },
  {
    question: "How does the online theory learning work?",
    answer:
      "Our LMS provides theory notes, road sign lessons, quizzes, and progress tracking so you can learn anytime from any device.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[#234E3B] font-semibold uppercase tracking-widest">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Have questions about our driving courses or learning platform? Here
            are answers to some of the most common questions from our students.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F6F2] rounded-2xl shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <ChevronUp className="text-[#234E3B]" />
                ) : (
                  <ChevronDown className="text-[#234E3B]" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-7">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Prompt */}
        <div className="mt-16 text-center bg-[#234E3B] rounded-3xl p-10 text-white">
          <h3 className="text-3xl font-bold">Still Have Questions?</h3>

          <p className="mt-4 text-green-100 max-w-2xl mx-auto">
            Our support team is always ready to help you with course enrollment,
            lesson scheduling, and any questions about learning with Next Gear
            Driving LMS.
          </p>

          <button className="mt-8 bg-white text-[#234E3B] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
