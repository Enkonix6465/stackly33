  import React, { useEffect, useState } from "react";
  import vedio from '../assets/Nutrition.mp4';
  import { useNavigate } from "react-router-dom";
  import nutritionImage from "../assets/BG1.jpg";

  const THEME_KEY = "theme";

  export default function PersonalizedNutrition() {
    const navigate = useNavigate();

    // Theme state and effect (no toggle button here)
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

    // Helper for theme-based class
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
            <source src={vedio} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black/60">
            <h1 className="text-white text-5xl md:text-6xl font-bold animate-fadeIn">
              Personalized Nutrition
            </h1>
          </div>
        </section>

        {/* ===== Info Section ===== */}
        <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          {/* Content */}
          <div className="flex-1">
            <h2 className={themedClass(
              "text-3xl font-bold mb-4",
              "text-green-200",
              "text-green-700"
            )}>
              Fuel Your Body & Mind
            </h2>
            <p className={themedClass(
              "mb-6 leading-relaxed",
              "text-gray-300",
              "text-gray-800"
            )}>
              Personalized nutrition plans designed to optimize your health, energy, and wellbeing.
              Learn how to eat smarter, balance your meals, and improve performance with tailored guidance.
            </p>
            <ul className="space-y-3 mb-6">
              <li className={themedClass(
                "p-3 border-l-4 rounded",
                "bg-green-900 border-green-400",
                "bg-green-50 border-green-600"
              )}>
                🥗 Customized meal plans
              </li>
              <li className={themedClass(
                "p-3 border-l-4 rounded",
                "bg-green-900 border-green-400",
                "bg-green-50 border-green-600"
              )}>
                🍎 Nutrient optimization
              </li>
              <li className={themedClass(
                "p-3 border-l-4 rounded",
                "bg-green-900 border-green-400",
                "bg-green-50 border-green-600"
              )}>
                💧 Hydration & lifestyle strategies
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
              Start Your Nutrition Plan
            </button>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src={nutritionImage}
              alt="Personalized Nutrition"
              className="rounded-xl shadow-lg"
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
            Our Nutrition Services
          </h2>
          <p className={themedClass(
            "mb-10",
            "text-green-100",
            "text-gray-700"
          )}>
            Personalized strategies for balanced diets and optimal health.
          </p>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: "🥦", title: "Meal Planning", desc: "Tailored meals for your body and goals." },
              { icon: "🍓", title: "Nutrient Guidance", desc: "Optimizing vitamins, minerals & macros." },
              { icon: "🏃‍♂️", title: "Lifestyle Support", desc: "Healthy habits for long-term results." },
              { icon: "📊", title: "Progress Tracking", desc: "Monitor improvements & adapt plans." }
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
            Why Personalized Nutrition?
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
              )}>🥗 Better Energy</h3>
              <p className={themedClass(
                "",
                "text-green-100",
                "text-gray-700"
              )}>
                Fuel your body efficiently for daily performance.
              </p>
            </div>
            <div>
              <h3 className={themedClass(
                "font-bold",
                "text-green-200",
                "text-green-700"
              )}>🧠 Mental Focus</h3>
              <p className={themedClass(
                "",
                "text-green-100",
                "text-gray-700"
              )}>
                Support cognitive clarity and focus with balanced nutrition.
              </p>
            </div>
            <div>
              <h3 className={themedClass(
                "font-bold",
                "text-green-200",
                "text-green-700"
              )}>💪 Stronger Immunity</h3>
              <p className={themedClass(
                "",
                "text-green-100",
                "text-gray-700"
              )}>
                Enhance resilience with nutrient-rich eating habits.
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
            Nutrition Plans
          </h2>
          <p className={themedClass(
            "mb-10",
            "text-green-100",
            "text-gray-700"
          )}>
            Select a plan to optimize your health and lifestyle.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Starter Plan",
                price: "$49/month",
                features: ["Custom Meal Plan", "Weekly Guidance", "Email Support"],
              },
              {
                title: "Balanced Plan",
                price: "$79/month",
                features: ["All Starter Features", "1-on-1 Coaching", "Lifestyle Tips"],
              },
              {
                title: "Premium Plan",
                price: "$129/month",
                features: ["Full Nutrition Coaching", "Daily Meal Tracking", "Priority Support"],
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
        <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
          <img
            src={nutritionImage}
            alt="Nutrition Background"
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          />
          <div className="relative z-10 text-center max-w-2xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Nutrition?
            </h2>
            <p className="text-white/90 mb-6">
              Start your journey to better health with personalized guidance and support.
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
