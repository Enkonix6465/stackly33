import React, { useEffect, useState } from "react";
import video from '../assets/Services7.mp4'; // Replace with a wellness-related video if available
import { useNavigate } from "react-router-dom";
import wellnessImage from "../assets/FC.jpg"; // Replace with a wellness-related image

const THEME_KEY = "theme";

export default function WellnessCoaching() {
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
            Wellness Coaching
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
            Achieve Balance & Vitality
          </h2>
          <p className={themedClass(
            "mb-6 leading-relaxed",
            "text-gray-300",
            "text-gray-800"
          )}>
            Personalized coaching to enhance physical health, mental clarity, and emotional well-being. 
            Learn habits and routines to maintain a balanced lifestyle.
          </p>
          <ul className="space-y-3 mb-6">
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              🏃 Fitness & Nutrition Guidance
            </li>
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              🧘 Mindfulness & Stress Management
            </li>
            <li className={themedClass(
              "p-3 border-l-4 rounded",
              "bg-green-900 border-green-400",
              "bg-green-50 border-green-600"
            )}>
              💡 Lifestyle & Habit Coaching
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
            Start Your Wellness Journey
          </button>
        </div>

        <div className="flex-1 flex items-start">
          <img
            src={wellnessImage}
            alt="Wellness Coaching"
            className="rounded-xl shadow-lg max-h-[400px] w-full object-cover"
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
          Our Wellness Coaching Services
        </h2>
        <p className={themedClass(
          "mb-10",
          "text-green-100",
          "text-gray-700"
        )}>
          Holistic guidance and routines to improve your health, energy, and lifestyle habits.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            { icon: "🏃", title: "Fitness & Nutrition", desc: "Tailored plans for healthy living." },
            { icon: "🧘", title: "Mindfulness Coaching", desc: "Manage stress and enhance clarity." },
            { icon: "💡", title: "Lifestyle Coaching", desc: "Build sustainable healthy habits." },
            { icon: "📊", title: "Progress Tracking", desc: "Monitor improvements and results." }
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
          Why Choose Wellness Coaching?
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
            )}>🏃 Healthy Body</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Improve physical fitness and adopt nutritious habits.
            </p>
          </div>
          <div>
            <h3 className={themedClass(
              "font-bold",
              "text-green-200",
              "text-green-700"
            )}>🧘 Mind & Clarity</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Reduce stress, increase mindfulness, and enhance focus.
            </p>
          </div>
          <div>
            <h3 className={themedClass(
              "font-bold",
              "text-green-200",
              "text-green-700"
            )}>💡 Sustainable Lifestyle</h3>
            <p className={themedClass(
              "",
              "text-green-100",
              "text-gray-700"
            )}>
              Build habits for long-term wellness and balance.
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
          Wellness Coaching Plans
        </h2>
        <p className={themedClass(
          "mb-10",
          "text-green-100",
          "text-gray-700"
        )}>
          Select a coaching program to enhance your health, mindset, and overall wellbeing.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Basic Plan",
              price: "$39/month",
              features: ["Fitness & Nutrition Tips", "Weekly Guidance", "Email Support"],
            },
            {
              title: "Standard Plan",
              price: "$69/month",
              features: ["All Basic Features", "Mindfulness Coaching", "Progress Tracking"],
            },
            {
              title: "Premium Plan",
              price: "$109/month",
              features: ["Full Wellness Coaching", "Progress Reports", "Priority Support"],
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
        style={{ backgroundImage: `url(${wellnessImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Wellness Coaching?
          </h2>
          <p className="text-white/90 mb-6">
            Begin your journey to improved health, clarity, and balanced lifestyle today.
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
