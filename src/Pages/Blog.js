import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaQuoteLeft, FaBookOpen, FaHandsHelping, FaMedal, FaRunning } from "react-icons/fa";
import blogVideo from "../assets/blogVideo.mp4";
import image from "../assets/B2.jpg";
import image2 from "../assets/BG1.jpg";
import image3 from "../assets/YM.jpg";
import { Link } from "react-router-dom";

const THEME_KEY = "theme";

const steps = [
  {
    title: "Gratitude Challenge",
    description: "Write down three things you’re grateful for every morning.",
    icon: <FaHandsHelping size={40} />,
  },
  {
    title: "Mindfulness Moment",
    description: "5-10 minutes in quiet meditation or focused breathing.",
    icon: <FaMedal size={40} />,
  },
  {
    title: "Energizing Movement",
    description: "Incorporate 10 minutes of light stretching or yoga.",
    icon: <FaRunning size={40} />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Blog = () => {
  // Theme state and effect
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.setAttribute("data-theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      window.dispatchEvent(new Event("theme-changed"));
    }
  }, [theme]);

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

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  return (
    <div
      className={themedClass(
        "w-full overflow-x-hidden min-h-screen transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
    >
      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative h-screen w-full">
        <video
          src={blogVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Health & Wellness Blog
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-white max-w-2xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explore articles, tips, and guides to improve your health and lifestyle.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className={themedClass(
                "px-8 py-4 rounded-full font-semibold shadow-lg inline-block text-center",
                "bg-[#00bfff] text-white",
                "bg-green-600 text-white"
              )}
            >
              Contact Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. FEATURED DAILY ROUTINE ===== */}
      <motion.section
        className={themedClass(
          "w-full py-24 px-4 text-center",
          "bg-[#1E2A38]",
          "bg-gray-50"
        )}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2
          className={themedClass(
            "text-4xl font-bold mb-4",
            "text-green-200",
            "text-gray-800"
          )}
          variants={item}
        >
          3-Step Daily Routine for a Balanced Life
        </motion.h2>
        <motion.p
          className={themedClass(
            "",
            "text-green-100 mb-12",
            "text-gray-600 mb-12"
          )}
          variants={item}
        >
          Achieve balance with gratitude, mindfulness, and energizing movement in
          just three simple steps.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full mx-auto px-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={themedClass(
                "flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform border",
                "bg-[#22304a] border-gray-700",
                "bg-white border"
              )}
              variants={item}
            >
              {step.icon}
              <h3 className={themedClass(
                "text-xl font-semibold mb-2",
                "text-green-200",
                "text-gray-800"
              )}>
                {step.title}
              </h3>
              <p className={themedClass(
                "",
                "text-green-100",
                "text-gray-600"
              )}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>




      {/* ===== 3. LATEST ARTICLES ===== */}
<motion.section
  className={themedClass(
    "w-full py-24 px-4",
    "bg-[#22304a]",
    "bg-white"
  )}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <h2
    className={themedClass(
      "text-3xl md:text-4xl font-bold text-center mb-12",
      "text-green-200",
      "text-green-700"
    )}
  >
    Latest Articles
  </h2>

  <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Article 1 */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={themedClass(
        "relative rounded-xl overflow-hidden shadow-lg",
        "bg-[#1E2A38]",
        "bg-white"
      )}
    >
      <img src={image} alt="article 1" className="w-full h-64 object-cover" />
      <div
        className={themedClass(
          "p-6",
          "bg-[#22304a]",
          "bg-white"
        )}
      >
        <h3
          className={themedClass(
            "text-xl font-bold mb-2",
            "text-green-200",
            "text-gray-800"
          )}
        >
          5 Steps to a Healthier Morning Routine
        </h3>
        <p
          className={themedClass(
            "mb-4",
            "text-green-100",
            "text-gray-700"
          )}
        >
          Learn how to start your day with energy, focus, and positivity using simple daily habits.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/article"
            className={themedClass(
              "px-6 py-2 rounded-full font-semibold transition-all inline-block text-center",
              "bg-[#00bfff] text-white hover:bg-green-700",
              "bg-green-600 text-white hover:bg-green-700"
            )}
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>

    {/* Article 2 */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={themedClass(
        "relative rounded-xl overflow-hidden shadow-lg",
        "bg-[#1E2A38]",
        "bg-white"
      )}
    >
      <img src={image2} alt="article 2" className="w-full h-64 object-cover" />
      <div
        className={themedClass(
          "p-6",
          "bg-[#22304a]",
          "bg-white"
        )}
      >
        <h3
          className={themedClass(
            "text-xl font-bold mb-2",
            "text-green-200",
            "text-gray-800"
          )}
        >
          Transform Your Relationship with Food
        </h3>
        <p
          className={themedClass(
            "mb-4",
            "text-green-100",
            "text-gray-700"
          )}
        >
          Discover techniques to enjoy your meals more consciously and improve digestion and wellness.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/article"
            className={themedClass(
              "px-6 py-2 rounded-full font-semibold transition-all inline-block text-center",
              "bg-[#00bfff] text-white hover:bg-green-700",
              "bg-green-600 text-white hover:bg-green-700"
            )}
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>

  </div>
</motion.section>



      {/* ===== 4. WELLNESS TIPS ===== */}
      <motion.section
        className={themedClass(
          "w-full py-24 px-6 text-center",
          "bg-[#1E2A38]",
          "bg-green-50"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={themedClass(
          "text-3xl md:text-4xl font-bold mb-16",
          "text-green-200",
          "text-green-700"
        )}>
          Expert Advice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Nutrition Tips",
              desc: "Learn from certified dietitians about balanced meals.",
              icon: "🥗",
            },
            {
              title: "Mental Health",
              desc: "Advice from therapists to manage stress and anxiety.",
              icon: "🧘‍♀️",
            },
            {
              title: "Fitness Guidance",
              desc: "Workout routines and tips from professional trainers.",
              icon: "🏋️‍♂️",
            },
          ].map((tip, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className={themedClass(
                "rounded-2xl shadow-lg p-10 transition-all duration-300 cursor-pointer",
                "bg-[#22304a] hover:bg-[#1E2A38] hover:shadow-2xl",
                "bg-white hover:bg-green-100 hover:shadow-2xl"
              )}
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className={themedClass(
                "text-2xl font-bold mb-3",
                "text-green-200",
                "text-green-800"
              )}>{tip.title}</h3>
              <p className={themedClass(
                "italic",
                "text-green-100",
                "text-gray-700"
              )}>{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== 6. NEWSLETTER ===== */}
      <motion.section
        className={themedClass(
          "w-full py-24 px-4 text-center relative",
          "text-white",
          "text-green-900"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className={themedClass(
            "text-3xl md:text-4xl font-bold mb-6",
            "text-white",
            "text-green-900"
          )}>
            Subscribe to Our Newsletter
          </h2>
          <p className={themedClass(
            "max-w-2xl mx-auto mb-6",
            "text-green-100",
            "text-green-900"
          )}>
            Stay updated with wellness articles, tips, and events delivered straight to your inbox.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="p-4 rounded-full w-full sm:flex-1 text-gray-800 focus:outline-none"
            />
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className={themedClass(
                  "px-6 py-4 rounded-full font-semibold mt-4 sm:mt-0 inline-block text-center",
                  "bg-[#00bfff] text-white",
                  "bg-green-600 text-white"
                )}
              >
                Subscribe
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
