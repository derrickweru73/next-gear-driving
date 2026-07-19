import { useAuth } from "@/context/AuthContext";

const Certificate = () => {
  const { user } = useAuth();

  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white border-8 border-yellow-500 rounded-2xl shadow-2xl max-w-4xl w-full p-12 text-center">
        <h1 className="text-5xl font-bold text-[#0F172A]">
          Certificate of Completion
        </h1>

        <p className="mt-8 text-xl">This certificate is proudly presented to</p>

        <h2 className="text-4xl font-bold text-[#F97316] mt-6">
          {user?.fullName}
        </h2>

        <p className="mt-8 text-lg leading-8">
          for successfully completing the
          <br />
          <strong>Next Gear Driving Course</strong>
        </p>

        <p className="mt-10">
          Date Issued: <strong>{today}</strong>
        </p>

        <div className="mt-16 flex justify-between">
          <div>
            ______________________
            <br />
            Instructor
          </div>

          <div>
            ______________________
            <br />
            Next Gear Driving LMS
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-12 bg-[#F97316] text-white px-8 py-3 rounded-xl"
        >
          Download / Print Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
