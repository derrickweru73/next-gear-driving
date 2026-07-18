import React, { useState, useEffect } from "react";
import {
  Bell,
  Calendar,
  CreditCard,
  BookOpen,
  Megaphone,
  CheckCircle,
} from "lucide-react";

const StudentNotification = () => {
  const defaultNotifications = [
    {
      id: 1,
      type: "Announcement",
      message:
        "Welcome to Next Gear Driving School LMS. Your account is ready.",
      date: "18 Jul 2026",
      read: false,
    },
    {
      id: 2,
      type: "Lesson",
      message: "Your practical driving lesson schedule will be updated soon.",
      date: "18 Jul 2026",
      read: false,
    },
  ];

  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem("notifications");

    if (savedNotifications) {
      const parsed = JSON.parse(savedNotifications);

      // If storage is empty, use defaults
      return parsed.length > 0 ? parsed : defaultNotifications;
    }

    return defaultNotifications;
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const getIcon = (type) => {
    switch (type) {
      case "Lesson":
        return <Calendar className="text-blue-600" size={22} />;

      case "Payment":
        return <CreditCard className="text-green-600" size={22} />;

      case "Course":
        return <BookOpen className="text-orange-500" size={22} />;

      case "Announcement":
        return <Megaphone className="text-purple-600" size={22} />;

      default:
        return <Bell className="text-gray-500" size={22} />;
    }
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-blue-900 flex items-center gap-2 mb-2">
            <Bell className="text-orange-500" />
            Notifications
          </h2>

          <p className="text-gray-600 mb-6">
            Stay updated with lessons, payments, course progress and
            announcements.
          </p>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`border rounded-xl p-5 flex justify-between items-start ${
                  notification.read
                    ? "bg-gray-50"
                    : "bg-orange-50 border-orange-300"
                }`}
              >
                <div className="flex gap-4">
                  {getIcon(notification.type)}

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">
                        {notification.type}
                      </h3>

                      {!notification.read && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 mt-1">{notification.message}</p>

                    <p className="text-sm text-gray-500 mt-2">
                      {notification.date}
                    </p>
                  </div>
                </div>

                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
                  >
                    <CheckCircle size={18} />
                    Mark Read
                  </button>
                )}
              </div>
            ))}
          </div>

          {notifications.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No notifications available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentNotification;
