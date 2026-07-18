import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-10 text-center">
        <CheckCircle className="mx-auto text-green-600 mb-6" size={80} />

        <h1 className="text-4xl font-bold text-[#0F172A]">
          Enrollment Submitted!
        </h1>

        <p className="text-gray-600 mt-5 leading-7">
          Your enrollment details and payment have been received successfully.
        </p>

        <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-xl p-5">
          <p className="text-yellow-700 font-semibold">
            Your enrollment is now pending admin approval.
          </p>

          <p className="text-gray-600 mt-3">
            You will be able to access your student dashboard, theory lessons,
            and practical lessons only after your enrollment has been approved.
          </p>
        </div>

        <Link
          to="/pending enrollment"
          className="inline-block mt-10 bg-[#F97316] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
