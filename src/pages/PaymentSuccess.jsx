import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-10 text-center">
        <CheckCircle className="mx-auto text-green-600 mb-6" size={80} />

        <h1 className="text-4xl font-bold text-[#0F172A]">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-5 leading-7">
          Congratulations! Your payment has been received and your enrollment
          has been confirmed.
        </p>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-green-700 font-semibold">
            Your student account has now been activated.
          </p>
        </div>

        <Link
          to="/student-dashboard"
          className="inline-block mt-10 bg-[#F97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
