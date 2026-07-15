import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Who can enroll in the driving courses?",
    answer:
      "Anyone aged 18 years and above with a valid National ID or Passport can enroll in our driving programs.",
  },
  {
    question: "How long does the training take?",
    answer:
      "Training duration depends on the course selected, ranging from 2 to 6 weeks with both theory and practical lessons.",
  },
  {
    question: "Do you offer manual and automatic driving lessons?",
    answer:
      "Yes. We provide both manual and automatic driving lessons using modern dual-control vehicles.",
  },
  {
    question: "Can I schedule lessons during weekends?",
    answer:
      "Absolutely. We offer weekday, evening and weekend schedules to fit your availability.",
  },
  {
    question: "Do you prepare students for the NTSA driving test?",
    answer:
      "Yes. Our instructors guide you through mock tests and practical assessments to help you pass confidently.",
  },
];

const FAQs = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <span className="inline-block bg-orange-100 text-[#F97316] px-4 py-2 rounded-full text-sm font-semibold">
              Frequently Asked Questions
            </span>

            <h2 className="text-5xl font-bold text-[#0F172A] mt-5 leading-tight">
              Have Questions?
              <br />
              <span className="text-[#F97316]">
                We've Got Answers.
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Find answers to the most common questions about our driving
              courses, lesson schedules, and enrollment process.
            </p>

            <div className="mt-10 bg-[#0F172A] text-white rounded-3xl p-8">

              <div className="w-16 h-16 rounded-full bg-[#F97316] flex items-center justify-center mb-5">
                <MessageCircle size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Still Have Questions?
              </h3>

              <p className="text-gray-300 mt-3 leading-7">
                Our support team is ready to help you choose the right driving
                course and answer any questions you may have.
              </p>

              <button className="mt-6 bg-[#F97316] hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition">
                Contact Us
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >

                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition"
                >

                  <span className="text-left font-semibold text-[#0F172A] text-lg">
                    {faq.question}
                  </span>

                  {active === index ? (
                    <ChevronUp className="text-[#F97316]" />
                  ) : (
                    <ChevronDown className="text-[#F97316]" />
                  )}

                </button>

                {active === index && (

                  <div className="px-6 pb-6 text-gray-600 leading-7">

                    {faq.answer}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQs;
