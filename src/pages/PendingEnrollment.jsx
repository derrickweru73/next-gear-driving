const PendingEnrollment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Enrollment Pending
        </h1>

        <p className="mt-4 text-gray-600">
          Your payment has been received successfully.
        </p>

        <p className="mt-2 text-gray-600">
          Your account is waiting for administrator approval before you can
          access lessons.
        </p>

        <p className="mt-6 font-semibold text-orange-500">
          Please wait for approval.
        </p>
      </div>
    </div>
  );
};

export default PendingEnrollment;
