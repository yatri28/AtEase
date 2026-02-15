import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    sessionReminders: true,
    anonymousNotes: false,
    darkMode: false,
  });

  function toggle(key) {
    setSettings({ ...settings, [key]: !settings[key] });
  }

  return (
    <DashboardLayout role="student">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-gray-500 mb-6">
        Manage your preferences and notifications
      </p>

      <div className="space-y-6 max-w-3xl">
        
        {/* Notifications */}
        <Section title="Notifications" desc="Control how we notify you">
          <Toggle
            label="Email Notifications"
            desc="Receive important updates via email"
            checked={settings.emailNotifications}
            onChange={() => toggle("emailNotifications")}
          />
          <Toggle
            label="Session Reminders"
            desc="Get reminders before scheduled sessions"
            checked={settings.sessionReminders}
            onChange={() => toggle("sessionReminders")}
          />
        </Section>

        {/* Privacy */}
        <Section title="Privacy" desc="Manage your data & visibility">
          <Toggle
            label="Anonymous Notes"
            desc="Allow counselors to see notes anonymously"
            checked={settings.anonymousNotes}
            onChange={() => toggle("anonymousNotes")}
          />
        </Section>

        {/* Appearance */}
        <Section title="Appearance" desc="Customize your experience">
          <Toggle
            label="Dark Mode"
            desc="Reduce eye strain in low-light environments"
            checked={settings.darkMode}
            onChange={() => toggle("darkMode")}
          />
        </Section>

        {/* Account */}
        <Section title="Account">
          <button className="w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 border rounded-lg hover:bg-gray-50">
            Download My Data
          </button>
          <button className="w-full text-left px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
            Delete Account
          </button>
        </Section>

        {/* Save */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* ---------------- Components ---------------- */

function Section({ title, desc, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="font-semibold mb-1">{title}</h2>
      {desc && <p className="text-sm text-gray-500 mb-4">{desc}</p>}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Toggle({ label, desc, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>

      <button
        onClick={onChange}
        className={`w-11 h-6 flex items-center rounded-full transition ${
          checked ? "bg-teal-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`h-5 w-5 bg-white rounded-full shadow transform transition ${
            checked ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
