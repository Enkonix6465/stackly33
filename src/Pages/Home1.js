import React, { useEffect, useState } from "react";

import vedio from "../assets/home1.mp4";
import image from "../assets/1.jpg";
import image2 from "../assets/5.jpg";
import image6 from "../assets/health.jpg";
import image7 from "../assets/Mindful.jpg";
import image8 from "../assets/walk.jpg";
import image9 from "../assets/B2.jpg";
import { Link } from "react-router-dom";

// Dummy blogs
const blogs = [
  {
    title: "5 Tips for Mindful Living",
    desc: "Practical tips to help you stay present and reduce stress daily.",
    img: image7,
  },
  {
    title: "Healthy Smoothie Recipes",
    desc: "Try these easy and nutritious smoothie recipes for energy and vitality.",
    img: image6,
  },
  {
    title: "The Power of Daily Walks",
    desc: "Learn how walking 30 minutes a day can transform your health.",
    img: image8,
  },
];
const achievements = [
  { label: "Happy Clients" },
  { label: "Wellness Programs" },
  { label: "Expert Coaches" },
  { label: "Years of Service" }
];

const counts = [500, 120, 45, 10]; 

const THEME_KEY = 'theme';

const Home1 = () => {
  // Theme state and effect (robust, cross-tab sync, SSR-safe)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  return (
    <div className={themedClass(
      "min-h-screen flex flex-col items-center justify-center transition-colors duration-500",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-900"
    )}>
      {/* Hero Section */}
      <section
  className={themedClass(
    "relative w-full h-screen flex items-center justify-center overflow-hidden",
    "bg-black",
    "bg-black"
  )}
>
  <video
    src={vedio}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
  />
  <div
    className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
    style={{ color: theme === "dark" ? "#fff" : "#fff" }}
  >
    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
      Welcome to Health & Wellness
    </h1>
    <p className="text-lg md:text-2xl mb-6 animate-fadeInUp">
      Your journey to a healthier lifestyle starts here
    </p>
    <a
      href="/about"
      className={themedClass(
        "px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 animate-fadeInUp",
        "bg-[#00bfff] text-white hover:bg-green-600",
        "bg-green-500 text-white hover:bg-green-600"
      )}
    >
      Know More
    </a>
  </div>
</section>


      {/* About Us Section */}

    <section
      className="w-full py-20 transition-colors duration-500 bg-gray-50 dark:bg-gray-900"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Your Wellness, Your Way
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            Take charge of your health and well-being with personalized wellness
            programs designed just for you. We provide guidance that empowers
            your body, mind, and spirit.
          </p>

          <ul className="list-decimal list-inside mb-8 space-y-2 text-gray-700 dark:text-gray-400">
            <li>Personalized Nutrition & Meal Planning</li>
            <li>Holistic Fitness & Yoga Programs</li>
            <li>Mental Wellness & Mindfulness Practices</li>
          </ul>

          <Link
            to="/about"
            className="px-6 py-3 rounded-lg shadow-md transition-all duration-300 bg-green-600 text-white hover:bg-green-700 inline-block"
          >
            About Us
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex flex-row gap-4 h-full items-center justify-center">
          <img
            src={image}
            alt="Wellness Activity 1"
            className="rounded-xl shadow-lg object-cover w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ minWidth: 0, height: "400px" }}
          />
          <img
            src={image2}
            alt="Wellness Activity 2"
            className="rounded-xl shadow-lg object-cover w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ minWidth: 0, height: "400px" }}
          />
        </div>
      </div>
    </section>
  


      {/* Services Section */}
      <section
  className={themedClass(
    "w-full py-20 px-6 transition-colors duration-500",
    "bg-gradient-to-b from-gray-800 to-gray-900",
    "bg-gradient-to-b from-green-50 to-green-100"
  )}
>
  <h2
    className={themedClass(
      "text-4xl font-bold text-center mb-14",
      "text-white",
      "text-gray-900"
    )}
  >
    Our Wellness Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full px-4 md:px-12">
    {["🧘 Yoga & Meditation", "🥗 Nutrition Plans", "🏋️ Fitness Coaching"].map(
      (service, idx) => (
        <div
          key={idx}
          className={themedClass(
            "relative z-10 rounded-2xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl",
            "bg-[#1E2A38]",
            "bg-white"
          )}
        >
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">
            {service.split(" ")[0]}
          </div>

          {/* Title */}
          <h3
            className={themedClass(
              "text-2xl font-semibold mb-3 text-center",
              "text-white",
              "text-gray-800"
            )}
          >
            {service.slice(2)}
          </h3>

          {/* Description */}
          <p
            className={themedClass(
              "text-center",
              "text-gray-300",
              "text-gray-600"
            )}
          >
            {idx === 0 &&
              "Find inner peace and improve flexibility with guided yoga and meditation sessions."}
            {idx === 1 &&
              "Personalized diet plans designed by nutrition experts for a healthier lifestyle."}
            {idx === 2 &&
              "Get fit with professional coaching tailored to your goals and abilities."}
          </p>
        </div>
      )
    )}
  </div>
</section>


      {/* Blog Section */}
      <section className="py-20 transition-colors duration-500">
        <div className="text-center mb-14">
          <h2 className={themedClass(
            "text-4xl font-extrabold",
            "text-green-400",
            "text-green-700"
          )}>
            Latest Articles
          </h2>
          <p className={themedClass(
            "mt-3 max-w-2xl mx-auto",
            "text-gray-300",
            "text-gray-600"
          )}>
            Stay inspired with wellness tips, nutrition guides, and mindful
            living practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={themedClass(
                "group rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-3 transition-all duration-500",
                "bg-[#1E2A38]",
                "bg-white"
              )}
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className={themedClass(
                  "text-xl font-bold group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300",
                  "text-white",
                  "text-gray-800"
                )}>
                  {blog.title}
                </h3>
                <p className={themedClass(
                  "mt-3",
                  "text-gray-300",
                  "text-gray-600"
                )}>
                  {blog.desc}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}





      <section
  className={themedClass(
    "w-full py-28 px-6",
    "bg-[#22304a]",
    "bg-gradient-to-r from-green-100 to-green-50"
  )}
>
  {/* Heading */}
  <h2
    className={themedClass(
      "text-4xl font-extrabold text-center mb-16",
      "text-white",
      "text-green-800"
    )}
  >
    Our Achievements
  </h2>

  {/* Cards Grid */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
    {achievements.map((item, i) => (
      <div
        key={i}
        className={themedClass(
          // 🔹 Card base + hover effects
          " w-48 h-48 rounded-full shadow-lg p-12 flex flex-col items-center justify-center transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-2",
          // Dark mode
          "bg-[#1E2A38] hover:bg-[#2a3b54]",
          // Light mode
          "bg-white hover:bg-gradient-to-b hover:from-green-50 hover:to-green-100"
        )}
      >
        {/* Count */}
        <h3
          className={themedClass(
            "text-5xl font-extrabold mb-3 tracking-wide transition-colors duration-300",
            "text-green-400 group-hover:text-green-300",
            "text-green-700 group-hover:text-green-800"
          )}
        >
          {counts[i]}+
        </h3>

        {/* Label */}
        <p
          className={themedClass(
            "text-lg font-medium transition-colors duration-300",
            "text-gray-300 group-hover:text-white",
            "text-gray-700 group-hover:text-green-900"
          )}
        >
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
    <section
      className="relative w-full py-24 px-6 text-center overflow-hidden transition-colors duration-500"
      style={{
        backgroundImage: `url(${image9})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 text-left md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Get in Touch
        </h2>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Have questions or need guidance on your wellness journey? Reach out to
          us today.
        </p>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center bg-[green] hover:bg-green-600 text-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
  



    </div>
  );
};

export default Home1;
