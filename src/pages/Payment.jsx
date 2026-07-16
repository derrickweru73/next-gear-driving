import { useNavigate } from "react-router-dom";
import { CreditCard, Smartphone, Landmark } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();

  const enrollment = JSON.parse(localStorage.getItem("studentEnrollment"));

  const handlePayment = () => {
    localStorage.setItem("paymentCompleted", "true");

    navigate("/student-dashboard");
  };

  if (!enrollment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">No Enrollment Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F2] py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-[#0F172A]">Course Payment</h1>

        <p className="text-gray-600 mt-2">
          Complete payment to activate your student account.
        </p>

        {/* Enrollment Summary */}

        <div className="mt-10 rounded-xl bg-slate-50 p-6">
          <h2 className="text-2xl font-bold mb-5">Enrollment Summary</h2>

          <div className="space-y-3">
            <p>
              <strong>Name:</strong> {enrollment.fullName}
            </p>

            <p>
              <strong>Course:</strong> {enrollment.course}
            </p>

            <p>
              <strong>Transmission:</strong> {enrollment.transmission}
            </p>
          </div>
        </div>

        {/* Fee */}

        <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-[#F97316]">Course Fee</h2>

          <p className="text-5xl font-bold mt-4">KSh 15,000</p>
        </div>

        {/* Payment Methods */}

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6 text-center">
              <Smartphone className="mx-auto text-green-600" size={40} />
              <h3 className="font-bold mt-4">M-Pesa</h3>
              <p className="text-gray-500 mt-2">Paybill: 123456</p>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <CreditCard className="mx-auto text-blue-600" size={40} />
              <h3 className="font-bold mt-4">Debit / Credit Card</h3>
            </div>

            <div className="border rounded-xl p-6 text-center">
              <Landmark className="mx-auto text-[#0F172A]" size={40} />
              <h3 className="font-bold mt-4">Bank Transfer</h3>
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="mt-12 w-full bg-[#F97316] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
