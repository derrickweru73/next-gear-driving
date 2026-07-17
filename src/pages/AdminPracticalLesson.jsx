import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminPracticalLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    vehicle: "",
    duration: "",
    description: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("practicalLessons")) || [];

    setLessons(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLesson = {
      id: Date.now(),
      ...formData,
    };

    const updatedLessons = [...lessons, newLesson];

    setLessons(updatedLessons);

    localStorage.setItem("practicalLessons", JSON.stringify(updatedLessons));

    setFormData({
      title: "",
      instructor: "",
      vehicle: "",
      duration: "",
      description: "",
    });

    alert("Practical lesson added successfully.");
  };

  const deleteLesson = (id) => {
    const updatedLessons = lessons.filter((lesson) => lesson.id !== id);

    setLessons(updatedLessons);

    localStorage.setItem("practicalLessons", JSON.stringify(updatedLessons));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#0F172A]">Practical Lessons</h1>

        <Link
          to="/admin-dashboard"
          className="bg-[#F97316] text-white px-5 py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Lesson Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />

        <input
          type="text"
          name="instructor"
          placeholder="Instructor"
          value={formData.instructor}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />

        <input
          type="text"
          name="vehicle"
          placeholder="Vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          required
        />

        <textarea
          name="description"
          placeholder="Lesson Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-xl"
          rows="4"
          required
        />

        <button
          type="submit"
          className="bg-[#F97316] text-white px-6 py-3 rounded-xl"
        >
          Add Practical Lesson
        </button>
      </form>

      <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">
        <h2 className="text-2xl font-bold mb-6">Existing Practical Lessons</h2>

        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div key={lesson.id} className="border rounded-xl p-5 mb-4">
              <h3 className="font-bold text-xl">{lesson.title}</h3>

              <p>Instructor: {lesson.instructor}</p>

              <p>Vehicle: {lesson.vehicle}</p>

              <p>Duration: {lesson.duration}</p>

              <p>{lesson.description}</p>

              <button
                onClick={() => deleteLesson(lesson.id)}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No practical lessons added.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPracticalLessons;
