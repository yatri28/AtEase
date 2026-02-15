import DashboardLayout from "../../layouts/DashboardLayout";

export default function Profile() {
  const user = {
    name: "Yatri",
    email: "yatri@example.com",
    role: "Student",
    year: "Second Year",
    department: "Engineering",
    counselor: "Dr. Sarah Mitchell",
  };

  return (
    <DashboardLayout role="student">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Profile</h1>
      <p className="text-gray-500 mb-6">
        View and manage your personal information
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center">
          <div className="h-20 w-20 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl font-semibold">
            {user.name[0]}
          </div>

          <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm">{user.email}</p>

          <span className="mt-3 inline-block bg-teal-100 text-teal-700 text-xs px-3 py-1 rounded-full">
            {user.role}
          </span>

          <button className="mt-5 px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
            Edit Profile
          </button>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          <h2 className="font-semibold mb-4">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Info label="Full Name" value={user.name} />
            <Info label="Email" value={user.email} />
            <Info label="Academic Year" value={user.year} />
            <Info label="Department" value={user.department} />
            <Info label="Assigned Counselor" value={user.counselor} />
            <Info label="Account Type" value={user.role} />
          </div>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
              Save Changes
            </button>
            <button className="px-5 py-2 border rounded-lg hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ---------- Small reusable component ---------- */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
