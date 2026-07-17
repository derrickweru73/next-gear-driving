import { useEffect, useState } from "react";
 
const API = "https://6a5608ffb17de7bebbddbc73.mockapi.io/api/users";
;

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  const [editingStudent, setEditingStudent] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setStudents(data);
  };
  
    const editStudent = (student) => {
      setEditingStudent(student);

      setFormData({
        fullName: student.fullName,
        email: student.email,
        course: student.course,
      });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const updateStudent = async () => {
      await fetch(`${API}/${editingStudent.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setEditingStudent(null);
      fetchStudents();
    };

    
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm("Delete this student?");

    if (!confirmDelete) return;

    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    fetchStudents();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] p-10">
      <h1 className="text-4xl font-bold mb-8">Manage Students</h1>

      {editingStudent && (
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Edit Student</h2>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-3 rounded w-full mb-4"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded w-full mb-4"
          />

          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Course"
            className="border p-3 rounded w-full mb-4"
          />

          <button
            onClick={updateStudent}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Update Student
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-4">{student.fullName}</td>

                <td>{student.email}</td>

                <td>{student.course}</td>

                <td className="py-4">
                  <div className="flex gap-3">
                    <button
                      onClick={() => editStudent(student)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(student.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
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

export default ManageStudents;
