import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../assets/Services4.mp4"; // Replace with your video
import morningImage from "../assets/5.jpg"; // Replace with article image
import foodImage from "../assets/N.jpg"; // Replace with article image

const THEME_KEY = "theme";

export default function ArticlesPage() {
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

  return (
    <div
      className={themedClass(
        "transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
    >
      {/* ✅ 1. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl animate-fadeIn">
          <h2 className="text-5xl font-bold mb-6 animate-slideUp">
            Latest Articles
          </h2>
          <p className="text-xl mb-8 animate-fadeIn delay-200">
            Explore tips for better mornings, mindful eating, and a healthier
            lifestyle.
          </p>
          
        </div>
      </section>

      {/* ✅ 2. Article 1: Morning Routine */}
      <section
        id="articles"
        className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="flex-1">
          <img
            src={morningImage}
            alt="Morning Routine"
            className="rounded-xl shadow-lg w-full h-[550px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h3
            className={themedClass(
              "text-3xl font-bold mb-4",
              "text-green-300",
              "text-green-700"
            )}
          >
            5 Steps to a Healthier Morning Routine
          </h3>
          <p className="mb-6 leading-relaxed text-justify">
            Start your day with energy, focus, and positivity. Build habits like
            early hydration, mindful breathing, and light exercise to set the tone
            for success. A well-structured morning routine not only enhances
            productivity but also reduces stress and anxiety throughout the day.
            Incorporating small, intentional actions in the morning can boost
            mental clarity and physical well-being. Remember, consistency is the
            key to creating a lifestyle that supports long-term health and
            happiness.
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Drink a glass of water immediately after waking up</li>
            <li>Spend 5 minutes on deep breathing or meditation</li>
            <li>Do light stretching or yoga</li>
            <li>Eat a nutrient-rich breakfast</li>
            <li>Plan your top 3 priorities for the day</li>
            <li>
              Limit your screen time during the first 30 minutes of the day
            </li>
            <li>
              Write down one thing you’re grateful for to start with positivity
            </li>
            <li>Step outside for fresh air and a few minutes of sunlight</li>
          </ul>
        </div>
      </section>

      {/* ✅ 3. Article 2: Mindful Eating */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
        <div className="flex-1">
          <img
            src={foodImage}
            alt="Mindful Eating"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="flex-1">
          <h3
            className={themedClass(
              "text-3xl font-bold mb-4",
              "text-green-300",
              "text-green-700"
            )}
          >
            Transform Your Relationship with Food
          </h3>
          <p className="mb-6 leading-relaxed text-justify">
            Eating mindfully can help you build a healthier relationship with
            food. Focus on portion control, savoring flavors, and balancing
            nutrition without guilt. Mindful eating allows you to enjoy every
            bite while preventing overeating and emotional stress related to food
            choices. It encourages awareness of your body's signals, so you can
            eat when hungry and stop when satisfied. By slowing down and
            appreciating your meals, you can turn eating into a nourishing
            experience rather than a rushed habit.
          </p>

          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Eat slowly and chew thoroughly</li>
            <li>Listen to your body's hunger and fullness cues</li>
            <li>Choose whole, unprocessed foods</li>
            <li>Avoid distractions while eating</li>
            <li>Practice gratitude for every meal</li>
            <li>Stay hydrated before and during meals</li>
            <li>
              Plan balanced meals ahead of time to avoid impulsive choices
            </li>
            <li>Limit emotional eating by identifying triggers</li>
          </ul>
        </div>
      </section>

      {/* ✅ 4. Extra Section: Healthy Lifestyle Tips */}

      {/* Define the tips array */}
      {(() => {
        const tips = [
          {
            icon: "🥗",
            title: "Balanced Meals",
            desc: "Include protein, carbs, and healthy fats in every meal for sustained energy and better health.",
          },
          {
            icon: "💧",
            title: "Stay Hydrated",
            desc: "Drink at least 2–3 liters of water daily to maintain hydration and support your body's functions.",
          },
          {
            icon: "🏃",
            title: "Move Daily",
            desc: "Even a simple 20-minute walk can improve your mood, boost energy, and keep you active.",
          },
          {
            icon: "🧘",
            title: "Mindful Moments",
            desc: "Spend 5–10 minutes daily on mindfulness or meditation to reduce stress and improve focus.",
          },
          {
            icon: "😴",
            title: "Rest Well",
            desc: "Get 7–8 hours of quality sleep every night to recharge your body and mind.",
          },
        ];

        return (
          <section
            className={themedClass(
              "py-16 px-4 text-center w-full",
              "bg-[#1E2A38]",
              "bg-green-50"
            )}
          >
            <h2
              className={themedClass(
                "text-4xl font-bold mb-12",
                "text-green-300",
                "text-green-700"
              )}
            >
              Quick Healthy Lifestyle Tips
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {tips.map((tip, i) => (
                <div key={i} className="group flip-card">
                  <div className="flip-card-inner group-hover:rotate-y-180">
                    {/* Front Side */}
                    <div
                      className={themedClass(
                        "flip-card-front flex flex-col items-center justify-center p-6",
                        "bg-[#22304a] text-green-300",
                        "bg-white text-green-700"
                      )}
                    >
                      <span className="text-6xl mb-4">{tip.icon}</span>
                      <h3 className="text-xl font-bold">{tip.title}</h3>
                    </div>
                    {/* Back Side */}
                    <div
                      className={themedClass(
                        "flip-card-back flex items-center justify-center p-6",
                        "bg-green-700 text-white",
                        "bg-green-100 text-gray-800"
                      )}
                    >
                      <p className="text-lg leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}
    </div>
  );
}
