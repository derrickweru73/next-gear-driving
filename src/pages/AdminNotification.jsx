import { useState } from "react";

const AdminNotification = () => {
  const [notification, setNotification] = useState({
    type: "Announcement",
    message: "",
    date: new Date().toLocaleDateString(),
    read: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];

    const newNotification = {
      id: Date.now(),
      ...notification,
    };

    localStorage.setItem(
      "notifications",
      JSON.stringify([...existingNotifications, newNotification]),
    );

    alert("Notification sent successfully");

    setNotification({
      type: "Announcement",
      message: "",
      date: new Date().toLocaleDateString(),
      read: false,
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <h1 className="text-2xl font-bold mb-6">Send Student Notification</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={notification.type}
            onChange={(e) =>
              setNotification({
                ...notification,
                type: e.target.value,
              })
            }
            className="w-full border p-3 rounded"
          >
            <option>Announcement</option>
            <option>Lesson</option>
            <option>Payment</option>
            <option>Course</option>
          </select>

          <textarea
            placeholder="Write notification message"
            value={notification.message}
            onChange={(e) =>
              setNotification({
                ...notification,
                message: e.target.value,
              })
            }
            className="w-full border p-3 rounded"
          />

          <button className="bg-[#F97316] text-white px-6 py-3 rounded">
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminNotification;
