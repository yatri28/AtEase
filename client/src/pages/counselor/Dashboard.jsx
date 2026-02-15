import { useState, useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function CounselorDashboard() {
  const [notes, setNotes] = useState([]);
  const [sessionRequests, setSessionRequests] = useState([]);
  const [moodEntries, setMoodEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const notesRes = await fetch("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const notesData = await notesRes.json();
      setNotes(notesData || []);

      const sessionsRes = await fetch(
        "http://localhost:5000/api/sessions",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const sessionsData = await sessionsRes.json();
      setSessionRequests(sessionsData || []);

      const moodsRes = await fetch("http://localhost:5000/api/moods", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const moodsData = await moodsRes.json();
      setMoodEntries(moodsData || []);
    } catch (err) {
      console.error("Error fetching counselor data");
    } finally {
      setLoading(false);
    }
  };

  const handleApproveRequest = async (id) => {
    await fetch(`http://localhost:5000/api/sessions/${id}/approve`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  const handleRejectRequest = async (id) => {
    await fetch(`http://localhost:5000/api/sessions/${id}/reject`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  const pendingRequests = sessionRequests.filter(
    (r) => r.status === "pending"
  );

  return (
    <DashboardLayout role="counselor">
      <h1 className="text-2xl font-bold mb-6">
        Counselor Dashboard
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Pending Sessions */}
          <div className="mb-8">
            <h2 className="font-semibold mb-3">
              Pending Session Requests ({pendingRequests.length})
            </h2>

            {pendingRequests.length === 0 ? (
              <p className="text-gray-500">
                No pending requests.
              </p>
            ) : (
              <div className="space-y-4">
                {pendingRequests.map((req) => (
                  <div
                    key={req._id}
                    className="p-4 border rounded-xl bg-white shadow-sm"
                  >
                    <p className="font-medium">
                      Student ID: {req.studentId}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(req.sessionDate).toLocaleDateString()} at{" "}
                      {req.sessionTime}
                    </p>

                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleApproveRequest(req._id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectRequest(req._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mood Entries */}
          <div>
            <h2 className="font-semibold mb-3">
              Recent Mood Entries
            </h2>

            {moodEntries.length === 0 ? (
              <p className="text-gray-500">
                No mood entries recorded.
              </p>
            ) : (
              <div className="space-y-2">
                {moodEntries.slice(0, 10).map((entry) => (
                  <div
                    key={entry._id}
                    className="p-3 bg-gray-50 rounded-lg flex justify-between"
                  >
                    <span>{entry.mood}</span>
                    <span className="text-xs text-gray-400">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}