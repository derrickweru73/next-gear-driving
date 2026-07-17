 import { useNavigate } from "react-router-dom";
 import { CreditCard, Smartphone, Landmark } from "lucide-react";
 import { useState } from "react";
 import { useAuth } from "@/context/AuthContext";

 const Payment = () => {
   const navigate = useNavigate();
   const { user } = useAuth();

   const enrollment = JSON.parse(localStorage.getItem("studentEnrollment"));

   const [selectedMethod, setSelectedMethod] = useState("");

   const handlePayment = () => {
     if (!selectedMethod) {
       alert("Please select a payment method.");
       return;
     }

     // Update enrollment
      const updatedEnrollment = {
        ...enrollment,
        userId: user.id,
        paymentStatus: "Paid",
        paymentMethod: selectedMethod,
        paymentDate: new Date().toLocaleString(),
        enrolled: false,
      };

     localStorage.setItem(
       "studentEnrollment",
       JSON.stringify(updatedEnrollment),
     );

     // Save pending enrollments for admin
     const pendingEnrollments =
       JSON.parse(localStorage.getItem("pendingEnrollments")) || [];

     pendingEnrollments.push(updatedEnrollment);

     localStorage.setItem(
       "pendingEnrollments",
       JSON.stringify(pendingEnrollments),
     );

     // Save payment history
     const payments = JSON.parse(localStorage.getItem("payments")) || [];

      payments.push({
        id: Date.now(),
        userId: user.id,
        fullName: updatedEnrollment.fullName,
        email: updatedEnrollment.email,
        phone: updatedEnrollment.phone,
        course: updatedEnrollment.course,
        transmission: updatedEnrollment.transmission,
        amount: 15000,
        method: selectedMethod,
        status: "Paid",
        date: new Date().toLocaleString(),
      });

     localStorage.setItem("payments", JSON.stringify(payments));

     // Update lesson booking if it exists
     const booking = JSON.parse(localStorage.getItem("lessonBooking")) || null;

     if (booking) {
       booking.status = "Paid";
       localStorage.setItem("lessonBooking", JSON.stringify(booking));

       const bookings =
         JSON.parse(localStorage.getItem("lessonBookings")) || [];

       const updatedBookings = bookings.map((item) =>
         item.email === booking.email ? { ...item, status: "Paid" } : item,
       );

       localStorage.setItem("lessonBookings", JSON.stringify(updatedBookings));
     }

     localStorage.setItem("paymentCompleted", "true");

     alert("Payment completed successfully. Waiting for admin approval.");

     navigate("/payment-success");
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

         <div className="mt-10 rounded-xl bg-slate-50 p-6">
           <h2 className="text-2xl font-bold mb-5">Enrollment Summary</h2>

           <div className="space-y-3">
             <p>
               <strong>Name:</strong> {enrollment.fullName}
             </p>

             <p>
               <strong>Email:</strong> {enrollment.email}
             </p>

             <p>
               <strong>Phone:</strong> {enrollment.phone}
             </p>

             <p>
               <strong>Course:</strong> {enrollment.course}
             </p>

             <p>
               <strong>Transmission:</strong> {enrollment.transmission}
             </p>
           </div>
         </div>

         <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6">
           <h2 className="text-2xl font-bold text-[#F97316]">Course Fee</h2>

           <p className="text-5xl font-bold mt-4">KSh 15,000</p>

           <p className="text-gray-600 mt-2">One-time registration payment.</p>
         </div>

         <div className="mt-10">
           <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>

           <div className="grid md:grid-cols-3 gap-6">
             <div
               onClick={() => setSelectedMethod("M-Pesa")}
               className={`cursor-pointer rounded-xl p-6 text-center border transition ${
                 selectedMethod === "M-Pesa"
                   ? "border-[#F97316] bg-orange-50 shadow"
                   : "border-gray-300"
               }`}
             >
               <Smartphone className="mx-auto text-green-600" size={40} />

               <h3 className="font-bold mt-4">M-Pesa</h3>

               <p className="text-gray-500 mt-2">Paybill: 123456</p>
             </div>

             <div
               onClick={() => setSelectedMethod("Card")}
               className={`cursor-pointer rounded-xl p-6 text-center border transition ${
                 selectedMethod === "Card"
                   ? "border-[#F97316] bg-orange-50 shadow"
                   : "border-gray-300"
               }`}
             >
               <CreditCard className="mx-auto text-blue-600" size={40} />

               <h3 className="font-bold mt-4">Debit / Credit Card</h3>
             </div>

             <div
               onClick={() => setSelectedMethod("Bank")}
               className={`cursor-pointer rounded-xl p-6 text-center border transition ${
                 selectedMethod === "Bank"
                   ? "border-[#F97316] bg-orange-50 shadow"
                   : "border-gray-300"
               }`}
             >
               <Landmark className="mx-auto text-[#0F172A]" size={40} />

               <h3 className="font-bold mt-4">Bank Transfer</h3>
             </div>
           </div>
         </div>

         {selectedMethod && (
           <div className="mt-8 bg-green-50 border border-green-300 rounded-xl p-4">
             <p className="font-semibold text-green-700">
               Selected Payment Method: {selectedMethod}
             </p>
           </div>
         )}

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
