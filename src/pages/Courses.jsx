import CourseCard from "@/components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Beginner Driving Course",
    level: "Beginner",
    description:
      "Perfect for first-time drivers. Learn road safety, theory, parking, and practical driving skills.",
    duration: "6 Weeks",
    students: "250+",
    price: "18,000",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900",
  },
  {
    id: 2,
    title: "Automatic Driving",
    level: "Automatic",
    description:
      "Master automatic vehicles with personalized practical lessons from certified instructors.",
    duration: "4 Weeks",
    students: "180+",
    price: "20,000",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900",
  },
  {
    id: 3,
    title: "Defensive Driving",
    level: "Advanced",
    description:
      "Improve hazard awareness, emergency response, and safe driving techniques.",
    duration: "3 Weeks",
    students: "140+",
    price: "15,000",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900",
  },
  {
    id: 4,
    title: "Refresher Course",
    level: "Intermediate",
    description:
      "Ideal for licensed drivers who want to rebuild confidence and sharpen driving skills.",
    duration: "2 Weeks",
    students: "95+",
    price: "12,000",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=900",
  },
];

const Courses = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}

      <section className="bg-[#0F172A] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#F97316] font-semibold uppercase tracking-widest">
            Our Courses
          </span>

          <h1 className="text-5xl font-bold text-white mt-5">
            Driving Courses Designed For Every Learner
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Whether you're a beginner or an experienced driver looking to
            improve your skills, Next Gear Driving LMS offers professional
            training tailored to your goals.
          </p>
        </div>
      </section>

      {/* Courses */}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
