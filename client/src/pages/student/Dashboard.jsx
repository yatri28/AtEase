import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function StudentDashboard() {

  // ✅ Get user from localStorage (from login)
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const user = storedUser || { name: "User" };

  const [selectedMood, setSelectedMood] = useState(null);
  const navigate = useNavigate();

  const dayName = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  // ✅ Dynamic Greeting
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😌", label: "Calm" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😰", label: "Stressed" },
  ];

  return (
    <DashboardLayout role="student">

      {/* Motivational Line */}
      <p className="text-teal-500 text-sm font-medium mb-1">
        ✨ You are stronger than you think.
      </p>

      {/* Greeting */}
      <h1 className="text-2xl font-bold mb-1">
        {greeting}, {user.name} 👋
      </h1>

      <p className="text-gray-500 mb-6">
        Here’s a quick look at your wellness journey
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Next Session"
          value="Not Scheduled"
          icon="📅"
          color="bg-teal-100"
        />
        <StatCard
          title="Sessions Attended"
          value="0"
          icon="⏰"
          color="bg-purple-100"
        />
        <StatCard
          title="Mood Streak"
          value="0 days"
          icon="📈"
          color="bg-yellow-100"
        />
        <StatCard
          title="Notes Sent"
          value="0"
          icon="💬"
          color="bg-blue-100"
        />
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <h2 className="font-semibold mb-1">
          How are you feeling this {dayName}?
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Track your mood to help your counselor understand your journey
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.label}
              onClick={() =>
                setSelectedMood(
                  selectedMood === mood.label ? null : mood.label
                )
              }
              className={`py-5 flex flex-col items-center gap-1 transition rounded-2xl ${
                selectedMood === mood.label
                  ? "bg-teal-100 ring-2 ring-teal-400"
                  : "bg-gray-50 hover:bg-teal-50"
              }`}
            >
              <span className="text-3xl">{mood.emoji}</span>
              <span className="text-sm font-medium">{mood.label}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <p className="text-sm text-teal-600 mt-4">
            You’re feeling <b>{selectedMood}</b> today 💙
          </p>
        )}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Upcoming Session */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-2">Upcoming Session</h2>
          <p className="text-gray-500 text-sm">
            You don’t have any sessions scheduled.
          </p>

          <button
  onClick={() => navigate("/student/book")}
  className="mt-4 px-5 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition"
>
  Book a Session
</button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-3">Quick Actions</h2>

          <div className="space-y-3">
<ActionButton
  text="📅 Book a Session"
  onClick={() => navigate("/student/book")}
/>            <ActionButton text="💬 Message Counselor" />
            <ActionButton text="📝 Write a Note" />
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

/* ----------------- Reusable Components ----------------- */

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4">
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${color}`}
      >
        <span className="text-xl">{icon}</span>
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="font-semibold text-lg">{value}</h2>
      </div>
    </div>
  );
}function ActionButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50 transition"
    >
      {text}
    </button>
  );
}