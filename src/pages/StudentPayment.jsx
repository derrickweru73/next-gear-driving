import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  Calendar,
  BadgeCheck,
  User,
  Receipt,
  ArrowLeft,
} from "lucide-react";

const StudentPayment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [payment, setPayment] = useState(null);

  useEffect(() => {
    if (!user) return;

    const payments = JSON.parse(localStorage.getItem("payments")) || [];

    const studentPayment = payments.find((item) => item.email === user.email);

    setPayment(studentPayment || null);
  }, [user]);

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#0F172A]">My Payments</h1>

            <p className="text-gray-600 mt-2">
              View your payment information and receipt.
            </p>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-3 rounded-xl hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>

        {/* Payment Card */}

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {payment ? (
            <>
              <div className="flex items-center gap-4 border-b pb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <BadgeCheck className="text-green-600" size={45} />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-green-600">
                    Payment Successful
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Your driving course payment has been received.
                  </p>
                </div>
              </div>

              {/* Details */}

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                    <User className="text-[#F97316]" />
                    Student Information
                  </h3>

                  <div className="space-y-4">
                    <p>
                      <strong>Name:</strong> {user.fullName}
                    </p>

                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>

                    <p>
                      <strong>Phone:</strong> {user.phone}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                    <CreditCard className="text-[#F97316]" />
                    Payment Details
                  </h3>

                  <div className="space-y-4">
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className="text-green-600 font-bold">
                        {payment.status}
                      </span>
                    </p>

                    <p>
                      <strong>Amount:</strong> KSh {payment.amount}
                    </p>

                    <p>
                      <strong>Method:</strong> {payment.method}
                    </p>

                    <p className="flex items-center gap-2">
                      <Calendar size={18} />
                      {payment.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Receipt */}

              <div className="bg-[#0F172A] text-white rounded-2xl p-8 mt-10">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                  <Receipt />
                  Payment Receipt
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Student</span>
                    <span>{user.fullName}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Email</span>
                    <span>{user.email}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Amount Paid</span>
                    <span>KSh {payment.amount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span>{payment.method}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Date</span>
                    <span>{payment.date}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="text-green-400">{payment.status}</span>
                  </div>
                </div>

                <button
                  className="mt-8 bg-[#F97316] hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
                  onClick={() => window.print()}
                >
                  Print Receipt
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <CreditCard size={70} className="mx-auto text-gray-400" />

              <h2 className="text-3xl font-bold mt-6">No Payment Found</h2>

              <p className="text-gray-500 mt-3">
                You haven't made any payment yet.
              </p>

              <button
                onClick={() => navigate("/payments")}
                className="mt-8 bg-[#F97316] hover:bg-orange-600 text-white px-8 py-3 rounded-xl"
              >
                Make Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentPayment;
