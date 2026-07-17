import { useState, useEffect } from "react";
import theoryLessonsData from "@/data/theoryLessonsData";

const AdminTheoryLessons = () => {
   const [lessons, setLessons] = useState([]);

    const [formData, setFormData] = useState({
      title: "",
      description: "",
      duration: "",
      objectives: "",
      notes: "",
      video: "",
      status: "Available",
    });
   const [editingLesson, setEditingLesson] = useState(null);

   useEffect(() => {
     const savedLessons = localStorage.getItem("theoryLessons");

     if (savedLessons) {
       setLessons(JSON.parse(savedLessons));
     } else {
       setLessons(theoryLessonsData);

       localStorage.setItem("theoryLessons", JSON.stringify(theoryLessonsData));
     }
   }, []);

   const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     });
   };

  const addLesson = () => {
    if (!formData.title || !formData.description || !formData.duration) {
      alert("Fill all fields");
      return;
    }

      const newLesson = {
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        duration: formData.duration,
        objectives: formData.objectives,
        notes: formData.notes,
        video: formData.video,
        status: formData.status,
      };

     const updatedLessons = [...lessons, newLesson];

     setLessons(updatedLessons);

     localStorage.setItem("theoryLessons", JSON.stringify(updatedLessons));

     setFormData({
       title: "",
       description: "",
       duration: "",
       objectives: "",
       notes: "",
       video: "",
       status: "Available",
     });
  };

   const editLesson = (lesson) => {
     setEditingLesson(lesson);

     setFormData({
       title: lesson.title,
       description: lesson.description,
       duration: lesson.duration,
       objectives: lesson.objectives || "",
       notes: lesson.notes || "",
       video: lesson.video || "",
       status: lesson.status,
     });
   };

   const updateLesson = () => {
     const updatedLessons = lessons.map((lesson) =>
       lesson.id === editingLesson.id ? { ...lesson, ...formData } : lesson,
     );

     setLessons(updatedLessons);

     localStorage.setItem("theoryLessons", JSON.stringify(updatedLessons));

     setEditingLesson(null);

      setFormData({
        title: "",
        description: "",
        duration: "",
        objectives: "",
        notes: "",
        video: "",
        status: "Available",
      });
   };

  const deleteLesson = (id) => {
    if (!window.confirm("Delete lesson?")) return;

     const updatedLessons = lessons.filter((lesson) => lesson.id !== id);

     setLessons(updatedLessons);

     localStorage.setItem("theoryLessons", JSON.stringify(updatedLessons));
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-10">
      <h1 className="text-4xl font-bold mb-8">Manage Theory Lessons</h1>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-5">
          {editingLesson ? "Edit Lesson" : "Add Lesson"}
        </h2>

        <input
          name="title"
          placeholder="Lesson Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          name="duration"
          placeholder="Duration"
          value={formData.duration}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <textarea
          name="objectives"
          placeholder="Lesson Objectives"
          value={formData.objectives}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <textarea
          name="notes"
          placeholder="Lesson Notes"
          value={formData.notes}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="text"
          name="video"
          placeholder="YouTube Video Link"
          value={formData.video}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-4"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mb-5"
        >
          <option>Available</option>
          <option>Completed</option>
          <option>Locked</option>
        </select>

        {editingLesson ? (
          <button
            onClick={updateLesson}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Update Lesson
          </button>
        ) : (
          <button
            onClick={addLesson}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Add Lesson
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th className="p-4">Title</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson.id} className="border-b">
                <td className="p-4">{lesson.title}</td>

                <td>{lesson.description}</td>

                <td>{lesson.duration}</td>

                <td>{lesson.status}</td>

                <td className="py-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => editLesson(lesson)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteLesson(lesson.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTheoryLessons;
