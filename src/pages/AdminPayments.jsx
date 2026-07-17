import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const storedPayments = JSON.parse(localStorage.getItem("payments")) || [];

    setPayments(storedPayments);
  }, []);

  const approvePayment = (index) => {
    const updatedPayments = [...payments];

    updatedPayments[index].status = "Approved";

    localStorage.setItem("payments", JSON.stringify(updatedPayments));

    setPayments(updatedPayments);

    alert("Payment approved successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-[#0F172A]">Payments</h1>

        <Link
          to="/admin-dashboard"
          className="bg-[#F97316] text-white px-5 py-2 rounded-lg"
        >
          Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#0F172A] text-white">
            <tr>
              <th className="p-4">Student</th>
              <th className="p-4">Course</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Method</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{payment.fullName}</td>

                  <td className="p-4">{payment.course}</td>

                  <td className="p-4">KSh {payment.amount}</td>

                  <td className="p-4">{payment.method}</td>

                  <td className="p-4">{payment.status}</td>

                  <td className="p-4">{payment.date}</td>

                  <td className="p-4">
                    <button
                      onClick={() => approvePayment(index)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-10">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;
