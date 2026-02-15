import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function BookSession() {
  const [selectedDate, setSelectedDate] = useState(27);
  const [selectedTime, setSelectedTime] = useState("2:00 PM");
  const [selectedCounselor, setSelectedCounselor] = useState("Dr. Sarah Mitchell");

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const counselors = [
    { name: "Dr. Sarah Mitchell", spec: "Anxiety & Stress" },
    { name: "Dr. James Chen", spec: "Academic Pressure" },
    { name: "Ms. Emily Roberts", spec: "Career Guidance" },
  ];

  return (
    <DashboardLayout role="student">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Book a Session</h1>
      <p className="text-gray-500 mb-6">
        Schedule your next counselling appointment
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Select Date */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-4">Select Date</h2>

          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
              <span key={d} className="text-gray-400">{d}</span>
            ))}

            {Array.from({ length: 31 }).map((_, i) => {
              const day = i + 1;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`py-2 rounded-lg transition ${
                    selectedDate === day
                      ? "bg-teal-500 text-white"
                      : "hover:bg-teal-50"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Select Time */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-4">Select Time</h2>

          <div className="grid grid-cols-2 gap-3">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg border transition ${
                  selectedTime === time
                    ? "bg-teal-100 border-teal-400"
                    : "hover:bg-gray-50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Choose Counselor */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col">
          <h2 className="font-semibold mb-4">Choose Counselor</h2>

          <div className="space-y-3 flex-1">
            {counselors.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedCounselor(c.name)}
                className={`p-4 rounded-xl border cursor-pointer transition ${
                  selectedCounselor === c.name
                    ? "bg-teal-50 border-teal-400"
                    : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-gray-500">{c.spec}</p>
              </div>
            ))}
          </div>

          <button className="mt-4 bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition">
            Book Session
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
