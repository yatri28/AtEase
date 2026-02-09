import { NavLink } from "react-router-dom";

export default function Sidebar({ role }) {
  const menus = {
    student: [
      { name: "Dashboard", path: "/student", icon: "🏠" },
      { name: "Book Session", path: "/student/book", icon: "📅" },
      { name: "Messages", path: "/student/messages", icon: "💬" },
      { name: "Profile", path: "/student/profile", icon: "👤" },
      { name: "Settings", path: "/student/settings", icon: "⚙️" },
    ],
    counselor: [
      { name: "Dashboard", path: "/counselor", icon: "🏠" },
      { name: "Anonymous Notes", path: "/counselor/notes", icon: "📝" },
      { name: "Sessions", path: "/counselor/sessions", icon: "📆" },
      { name: "Settings", path: "/counselor/settings", icon: "⚙️" },
    ],
    admin: [
      { name: "Dashboard", path: "/admin", icon: "🏠" },
      { name: "Users", path: "/admin/users", icon: "👥" },
      { name: "Settings", path: "/admin/settings", icon: "⚙️" },
    ],
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      
      {/* App Brand */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-teal-400">AtEase</h1>
        <p className="text-xs text-gray-400 mt-1 capitalize">
          {role} portal
        </p>
      </div>

      {/* User */}
      <div className="px-6 py-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center font-semibold">
          Y
        </div>
        <div>
          <p className="text-sm font-medium">Yatri</p>
          <p className="text-xs text-gray-400 capitalize">{role}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 mt-4 space-y-1">
        {menus[role].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-teal-500 text-white"
                  : "text-gray-300 hover:bg-slate-800"
              }`
            }
          >
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 text-xs text-teal-300">
        Crisis Helpline: <b>988</b>
      </div>
    </aside>
  );
}
