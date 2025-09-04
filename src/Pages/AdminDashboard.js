import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const THEME_KEY = "theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const fadeInUp = {
  animation: "fadeInUp 0.8s ease forwards",
  opacity: 0,
  transform: "translateY(20px)",
};

const styles = {
  keyframes: `
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    tr:hover {
      background-color: #6b21a8 !important;
      color: white !important;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
    }
    .card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 15px 25px rgba(107,33,168,0.5);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .activity-item:hover {
      background-color: #ede9fe;
      transition: background-color 0.3s;
      cursor: default;
    }
  `,
};

const AdminDashboard = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || "light";
        setTheme(newTheme);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
      };
    }
  }, []);

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const [allUserData, setAllUserData] = useState([]);
  const [loginStats, setLoginStats] = useState({ labels: [], data: [] });
  const [signupStats, setSignupStats] = useState({ labels: [], data: [] });
  const [userStatus, setUserStatus] = useState({ activeUsers: 0, inactiveUsers: 0 });
  const [recentLogins, setRecentLogins] = useState([]);
  const [signupGrowth, setSignupGrowth] = useState({ percent: 0, isGrowth: true });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const logins = JSON.parse(localStorage.getItem("userLogins")) || {};

    const usersWithLogin = users.map((u) => ({
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      loginTime: logins[u.email] || "N/A",
      signupDate: u.signupDate || "N/A",
    }));
    setAllUserData(usersWithLogin);

    const counts = {};
    const timestamps = [];
    Object.entries(logins).forEach(([email, ts]) => {
      if (ts && ts !== "N/A") {
        const dt = new Date(ts).toLocaleDateString();
        counts[dt] = (counts[dt] || 0) + 1;
        timestamps.push({ email, dateTime: ts });
      }
    });
    const sortedDates = Object.keys(counts).sort((a, b) => new Date(a) - new Date(b));
    setLoginStats({ labels: sortedDates, data: sortedDates.map((d) => counts[d]) });

    const latest = timestamps.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime)).slice(0, 5);
    setRecentLogins(latest);

    const sCounts = {};
    users.forEach((u) => {
      if (u.signupDate) {
        const ds = new Date(u.signupDate).toLocaleDateString();
        sCounts[ds] = (sCounts[ds] || 0) + 1;
      }
    });
    const sDates = Object.keys(sCounts).sort((a, b) => new Date(a) - new Date(b));
    const sData = sDates.map((d) => sCounts[d]);
    setSignupStats({ labels: sDates, data: sData });

    const totalRecentWeek = sData.slice(-7).reduce((a, b) => a + b, 0);
    const totalPrevWeek = sData.slice(-14, -7).reduce((a, b) => a + b, 0);
    const growth = totalPrevWeek ? ((totalRecentWeek - totalPrevWeek) / totalPrevWeek) * 100 : totalRecentWeek > 0 ? 100 : 0;
    setSignupGrowth({ percent: Math.abs(growth.toFixed(1)), isGrowth: growth >= 0 });

    const now = Date.now();
    const activeTh = 30 * 24 * 60 * 60 * 1000;
    let act = 0, inact = 0;
    usersWithLogin.forEach((u) => {
      if (u.loginTime !== "N/A") {
        const diff = now - new Date(u.loginTime).getTime();
        diff <= activeTh ? act++ : inact++;
      } else inact++;
    });
    setUserStatus({ activeUsers: act, inactiveUsers: inact });
  }, []);

  if (!allUserData.length) {
    return (
      <div className={themedClass(
        "min-h-screen flex items-center justify-center",
        "bg-gray-900 text-purple-200",
        "bg-purple-50 text-purple-900"
      )}>
        <p style={{ fontSize: 18, textAlign: "center" }}>No users found.</p>
      </div>
    );
  }

  const loginData = {
    labels: loginStats.labels,
    datasets: [{ label: "Logins", data: loginStats.data, backgroundColor: "rgba(107,33,168,0.8)", borderRadius: 4 }],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: theme === "dark" ? "#d8b4fe" : "#6b21a8" }, position: "top" },
      title: { display: true, font: { size: 22, weight: "bold" }, color: theme === "dark" ? "#d8b4fe" : "#6b21a8" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { ticks: { color: theme === "dark" ? "#d8b4fe" : "#6b21a8", maxRotation: 90, minRotation: 45 }, grid: { color: theme === "dark" ? "#3f0d61" : "#e9d5ff" } },
      y: { ticks: { color: theme === "dark" ? "#d8b4fe" : "#6b21a8" }, grid: { color: theme === "dark" ? "#3f0d61" : "#e9d5ff" }, beginAtZero: true },
    },
  };
  const signupData = {
    labels: signupStats.labels,
    datasets: [{ label: "Signups", data: signupStats.data, fill: false, borderColor: "rgba(107,33,168,0.9)", backgroundColor: "rgba(107,33,168,0.5)", tension: 0.3, pointRadius: 6 }],
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div className={themedClass(
        "min-h-screen py-10 px-2",
        "bg-gray-900 text-purple-200",
        "bg-purple-50 text-purple-900"
      )}>
        <div className={themedClass(
          "max-w-4xl md:max-w-5xl mx-auto p-4 md:p-8 rounded-xl shadow-lg",
          "bg-[#2c046f]",
          "bg-purple-100"
        )}>

          {/* User Data Table */}
          <section className={themedClass(
            "mb-12 p-4 md:p-8 rounded-xl shadow",
            "bg-[#4c1d95]",
            "bg-purple-200"
          )} style={fadeInUp}>
            <h2 className={themedClass(
              "mb-6 font-bold text-2xl",
              "text-purple-300",
              "text-purple-800"
            )}>User Data Table</h2>
            <div style={{ overflowX: "auto" }}>
              <table className={themedClass(
                "w-full border-collapse min-w-[600px] text-base",
                "text-purple-100",
                "text-purple-900"
              )}>
                <thead>
                  <tr className={themedClass(
                    "",
                    "bg-purple-800 text-white",
                    "bg-purple-600 text-white"
                  )}>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Login Date/Time</th>
                  </tr>
                </thead>
                <tbody>
                  {allUserData.map((u, idx) => (
                    <tr key={idx} className="table-row-hover" style={{ borderBottom: "1px solid #c4b5fd", backgroundColor: idx % 2 === 0 ? (theme === "dark" ? "#3b0762" : "#f3e8ff") : (theme === "dark" ? "#2c046f" : "#ede9fe") }}>
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.email}</td>
                      <td className="p-3">{u.loginTime !== "N/A" ? new Date(u.loginTime).toLocaleString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Login Chart */}
          <section className={themedClass(
            "mb-12 p-4 md:p-8 rounded-xl shadow",
            "bg-[#2c046f]",
            "bg-purple-50"
          )} style={fadeInUp}>
            <h2 className={themedClass(
              "mb-6 font-bold text-2xl",
              "text-purple-300",
              "text-purple-800"
            )}>Login Activity Graph</h2>
            <Bar data={loginData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "User Logins Per Day" } } }} />
          </section>

          {/* Signup Chart */}
          <section className={themedClass(
            "mb-12 p-4 md:p-8 rounded-xl shadow",
            "bg-[#4c1d95]",
            "bg-purple-200"
          )} style={fadeInUp}>
            <h2 className={themedClass(
              "mb-6 font-bold text-2xl",
              "text-purple-300",
              "text-purple-800"
            )}>User Signup Trends</h2>
            <Line data={signupData} options={{ ...chartOptions, plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "User Signup Trends" } } }} />
          </section>

          {/* Active / Inactive Users */}
          <section className={themedClass(
            "flex flex-col md:flex-row gap-6 mb-10 p-4 md:p-8 rounded-xl shadow",
            "bg-[#2c046f]",
            "bg-purple-50"
          )} style={fadeInUp}>
            <div className={themedClass(
              "flex-1 card-hover p-6 rounded-xl text-center shadow",
              "bg-purple-700 text-white",
              "bg-purple-300 text-purple-900"
            )}>
              <h3 className="mb-2 font-bold">Active Users</h3>
              <p className="text-3xl font-bold">{userStatus.activeUsers}</p>
              <small>Logged in last 30 days</small>
            </div>
            <div className={themedClass(
              "flex-1 card-hover p-6 rounded-xl text-center shadow",
              "bg-purple-800 text-purple-100",
              "bg-purple-200 text-purple-900"
            )}>
              <h3 className="mb-2 font-bold">Inactive Users</h3>
              <p className="text-3xl font-bold">{userStatus.inactiveUsers}</p>
              <small>Not logged in last 30 days</small>
            </div>
          </section>

          {/* Recent Login Activity */}
          <section className={themedClass(
            "mb-12 p-4 md:p-8 rounded-xl shadow",
            "bg-[#4c1d95]",
            "bg-purple-200"
          )} style={fadeInUp}>
            <h2 className={themedClass(
              "mb-4 font-bold text-2xl",
              "text-purple-300",
              "text-purple-800"
            )}>Recent Login Activity</h2>
            <div style={{ maxHeight: 200, overflowY: "auto" }}>
              {recentLogins.map((entry, idx) => (
                <div key={idx} className="activity-item flex justify-between p-3 border-b border-purple-300">
                  <span>{entry.email}</span>
                  <span>{new Date(entry.dateTime).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Signup Growth */}
          <section className={themedClass(
            "card-hover p-6 rounded-xl text-center shadow mb-12",
            signupGrowth.isGrowth
              ? "bg-purple-200 text-purple-900"
              : "bg-red-100 text-red-700",
            signupGrowth.isGrowth
              ? "bg-purple-100 text-purple-900"
              : "bg-red-50 text-red-700"
          )} style={fadeInUp}>
            <h3 className="mb-2 font-bold">Signup Growth This Week</h3>
            <p className="text-3xl font-bold">
              {signupGrowth.isGrowth ? "▲" : "▼"} {signupGrowth.percent}%
            </p>
            <small>compared to previous week</small>
          </section>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
