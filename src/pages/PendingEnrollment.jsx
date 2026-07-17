const PendingEnrollment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold text-orange-500">
          Enrollment Pending
        </h1>

        <p className="mt-5 text-gray-600">Your registration was successful.</p>

        <p className="mt-2 text-gray-600">
          Please complete your booking and payment, then wait for the
          administrator to approve your enrollment.
        </p>

        <div className="mt-8">
          <p>✅ Account Created</p>
          <p>⏳ Booking Verification</p>
          <p>⏳ Payment Verification</p>
          <p>⏳ Admin Approval</p>
        </div>
      </div>
    </div>
  );
};

export default PendingEnrollment;
