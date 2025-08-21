import React, { useEffect, useState } from "react";
import video from '../assets/Services4.mp4'; // Replace with a sleep-related video if available
import { useNavigate } from "react-router-dom";
import sleepImage from "../assets/SO.jpg"; // Replace with a sleep-related image

const THEME_KEY = "theme";

export default function SleepOptimization() {
  const navigate = useNavigate();

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

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={themedClass(
      "text-[1.15rem] md:text-[1.25rem] transition-colors duration-500 min-h-screen",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-800"
    )}>
      
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/60">
          <h1 className="text-white text-5xl md:text-6xl font-bold animate-fadeIn">
            Sleep Optimization
          </h1>
        </div>
      </section>

      {/* ===== Info Section ===== */}
      <section className="w-full px-6 py-16 flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h2 className={themedClass(
            "text-3xl font-bold mb-4",
            "text-green-200",
            "text-green-700"
          )}>
            Enhance Sleep Quality & Recovery
          </h2>
          <p className={themedClass(
            "mb-6 leading-relaxed",
            "text-gray-300",
            "text-gray-800"
          )}>
            Evidence-based techniques to improve sleep duration, quality, and restorative rest. 
            Learn habits that help regulate your sleep cycle and support overall wellbeing.
          </p>
          <ul className="space-y-3 mb-6">
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              🛌 Sleep hygiene tips
            </li>
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              🌙 Relaxation routines
            </li>
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              💤 Circadian rhythm optimization
            </li>
          </ul>
          <button
            onClick={() => handleGetStarted("/contact")}
            className={themedClass(
              "px-6 py-3 rounded-lg font-semibold transition",
              "bg-green-700 text-white hover:bg-green-600",
              "bg-green-600 text-white hover:bg-green-700"
            )}
          >
            Start Improving Sleep
          </button>
        </div>

        <div className="flex-1 flex items-start">
          <img
            src={sleepImage}
            alt="Sleep Optimization"
            className="rounded-xl shadow-lg max-h-[500px] w-full object-cover"
          />
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className={themedClass(
        "py-16 px-6 text-center",
        "bg-[#1E2A38]",
        "bg-green-50"
      )}>
        <h2 className={themedClass(
          "text-3xl font-bold mb-4",
          "text-green-200",
          "text-green-700"
        )}>
          Our Sleep Services
        </h2>
        <p className={themedClass(
          "mb-10",
          "text-green-100",
          "text-gray-700"
        )}>
          Techniques and routines to help you fall asleep faster, stay asleep longer, and wake up refreshed.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            { icon: "🛌", title: "Sleep Hygiene", desc: "Optimize bedroom environment and habits." },
            { icon: "🌙", title: "Relaxation Techniques", desc: "Guided breathing and meditation." },
            { icon: "💤", title: "Circadian Support", desc: "Align your internal clock naturally." },
            { icon: "📊", title: "Progress Tracking", desc: "Monitor sleep quality improvements." }
          ].map((service, i) => (
            <div
              key={i}
              className={themedClass(
                "p-6 rounded-xl shadow hover:shadow-lg transition",
                "bg-[#22304a]",
                "bg-white"
              )}
            >
              <span className="text-5xl">{service.icon}</span>
              <h3 className={themedClass(
                "mt-3 font-semibold text-xl",
                "text-green-200",
                "text-green-700"
              )}>{service.title}</h3>
              <p className={themedClass(
                "text-base mt-2",
                "text-green-100",
                "text-gray-700"
              )}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Benefits Section ===== */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className={themedClass(
          "text-3xl font-bold mb-12",
          "text-green-200",
          "text-green-700"
        )}>
          Why Sleep Optimization?
        </h2>
        <div className={themedClass(
          "relative border-l-4 pl-8 space-y-10",
          "border-green-400",
          "border-green-600"
        )}>
          <div>
            <h3 className={themedClass(
              "font-bold",
              "text-green-200",
              "text-green-700"
            )}>🛌 Better Sleep Quality</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Fall asleep faster and enjoy deeper, more restorative rest.
            </p>
          </div>
          <div>
            <h3 className={themedClass(
              "font-bold",
              "text-green-200",
              "text-green-700"
            )}>💤 Enhanced Recovery</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Support muscle repair, mental clarity, and overall recovery overnight.
            </p>
          </div>
          <div>
            <h3 className={themedClass(
              "font-bold",
              "text-green-200",
              "text-green-700"
            )}>🌙 Improved Wellbeing</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Wake up refreshed, energized, and ready for the day.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Plans Section ===== */}
      <section className={themedClass(
        "py-16 px-6 text-center",
        "bg-[#1E2A38]",
        "bg-green-50"
      )}>
        <h2 className={themedClass(
          "text-3xl font-bold mb-4",
          "text-green-200",
          "text-green-700"
        )}>
          Sleep Optimization Plans
        </h2>
        <p className={themedClass(
          "mb-10",
          "text-green-100",
          "text-gray-700"
        )}>
          Choose a program to enhance sleep, recovery, and overall health.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Basic Plan",
              price: "$29/month",
              features: ["Sleep Hygiene Tips", "Weekly Guidance", "Email Support"],
            },
            {
              title: "Standard Plan",
              price: "$59/month",
              features: ["All Basic Features", "Relaxation Coaching", "Sleep Tracking"],
            },
            {
              title: "Premium Plan",
              price: "$99/month",
              features: ["Full Sleep Optimization Coaching", "Progress Reports", "Priority Support"],
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={themedClass(
                "relative group p-6 rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-2",
                "bg-[#22304a]",
                "bg-white"
              )}
            >
              <div className={themedClass(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500",
                "bg-green-400",
                "bg-green-600"
              )}></div>
              <h3 className={themedClass(
                "font-semibold text-lg relative z-10",
                "text-green-200",
                "text-green-700"
              )}>{plan.title}</h3>
              <p className={themedClass(
                "text-2xl font-bold mt-2 relative z-10",
                "text-green-100",
                "text-green-700"
              )}>
                {plan.price}
              </p>
              <ul className={themedClass(
                "text-base mt-4 space-y-2 relative z-10",
                "text-green-100",
                "text-gray-700"
              )}>
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleGetStarted("/contact")}
                className={themedClass(
                  "mt-6 px-5 py-2 rounded-lg hover:bg-green-700 transition relative z-10 text-sm font-semibold",
                  "bg-green-700 text-white",
                  "bg-green-600 text-white"
                )}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section
        className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${sleepImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay for brightness */}
        
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Improve Your Sleep?
          </h2>
          <p className="text-white/90 mb-6">
            Start your journey to better rest, recovery, and overall wellbeing today.
          </p>
          <button
            onClick={() => handleGetStarted("/contact")}
            className={themedClass(
              "px-6 py-3 rounded-lg font-semibold transition",
              "bg-green-700 text-white hover:bg-green-600",
              "bg-green-600 text-white hover:bg-green-700"
            )}
          >
            Contact Us →
          </button>
        </div>
      </section>
    </div>
  );
}
