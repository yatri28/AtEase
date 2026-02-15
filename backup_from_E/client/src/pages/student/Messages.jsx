import DashboardLayout from "../../layouts/DashboardLayout";

export default function Messages() {
  const messages = [
    {
      from: "Dr. Sarah Mitchell",
      title: "Session Reminder",
      preview: "Just a reminder that we have our session scheduled for tomorrow at 2 PM.",
      time: "2 hours ago",
      unread: true,
    },
    {
      from: "Wellness Center",
      title: "Mindfulness Workshop This Friday",
      preview: "Join us for a guided mindfulness session this Friday at 4 PM.",
      time: "1 day ago",
      unread: true,
    },
    {
      from: "Dr. James Chen",
      title: "Resources Shared",
      preview: "Here are some resources we discussed about managing academic stress.",
      time: "3 days ago",
      unread: false,
    },
  ];

  return (
    <DashboardLayout role="student">
      <h1 className="text-2xl font-bold mb-1">Messages</h1>
      <p className="text-gray-500 mb-6">
        Stay connected with your counselor and wellness center
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Inbox */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm">
          <div className="p-5 border-b">
            <h2 className="font-semibold">Inbox</h2>
          </div>

          <div>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-5 border-b cursor-pointer hover:bg-gray-50 transition ${
                  msg.unread ? "bg-teal-50" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium">{msg.from}</p>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>

                <p className="text-sm font-medium">{msg.title}</p>
                <p className="text-sm text-gray-500 truncate">
                  {msg.preview}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-4">Quick Actions</h2>

            <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 mb-3">
              Message Counselor
            </button>

            <button className="w-full border py-2 rounded-lg hover:bg-gray-50">
              View Resources
            </button>
          </div>

          {/* Counselor Info */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold mb-2">Your Counselor</h2>
            <p className="font-medium">Dr. Sarah Mitchell</p>
            <p className="text-sm text-gray-500">
              Anxiety & Stress Specialist
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Available Mon–Fri, 9 AM – 5 PM
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
