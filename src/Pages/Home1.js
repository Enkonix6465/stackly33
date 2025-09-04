import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import your assets
import vedio from "../assets/about.mp4";
import image from "../assets/1.jpg";
import image2 from "../assets/5.jpg";
import image6 from "../assets/health.jpg";
import image7 from "../assets/Mindful.jpg";
import image8 from "../assets/walk.jpg";
import image9 from "../assets/B2.jpg";

// Translations for all content
const translations = {
  en: {
    hero: {
      heading: "Welcome to Health & Wellness",
      sub: "Your journey to a healthier lifestyle starts here",
      knowMore: "Know More",
    },
    about: {
      heading: "Your Wellness, Your Way",
      desc: "Take charge of your health with personalized wellness programs designed just for you.",
      list: [
        "Personalized Nutrition & Meal Planning",
        "Holistic Fitness & Yoga Programs",
        "Mental Wellness & Mindfulness Practices",
      ],
      aboutUs: "About Us",
    },
    services: {
      heading: "Our Wellness Services",
      cards: [
        {
          icon: "🧘",
          title: "Yoga & Meditation",
          desc: "Find inner peace and improve flexibility with guided yoga and meditation sessions.",
        },
        {
          icon: "🥗",
          title: "Nutrition Plans",
          desc: "Personalized diet plans designed by nutrition experts for a healthier lifestyle.",
        },
        {
          icon: "🏋️",
          title: "Fitness Coaching",
          desc: "Get fit with professional coaching tailored to your goals and abilities.",
        },
      ],
    },
    blog: {
      carousel: [
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
      ],
      highlights: [
        { text: "wellness tips", bg: image6 },
        { text: "nutrition guides", bg: image7 },
        { text: "mindful living", bg: image8 },
      ],
      readMore: "READ MORE",
      liveBlog: "Live Blog",
    },
    achievements: {
      heading: "Our Achievements",
      cards: [
        "Happy Clients",
        "Wellness Programs",
        "Expert Coaches",
        "Years of Service",
      ],
    },
    contact: {
      heading: "Get in Touch",
      desc: "Have questions or need guidance on your wellness journey? Reach out to us today.",
      button: "Contact Us",
    },
  },
  ar: {
    hero: {
      heading: "مرحبًا بكم في الصحة والعافية",
      sub: "رحلتك نحو أسلوب حياة أكثر صحة تبدأ هنا",
      knowMore: "اعرف المزيد",
    },
    about: {
      heading: "عافيتك بطريقتك",
      desc: "تولى مسؤولية صحتك مع برامج العافية الشخصية المصممة خصيصًا لك.",
      list: [
        "تخطيط التغذية والوجبات الشخصية",
        "برامج اللياقة البدنية واليوغا الشاملة",
        "العافية الذهنية وممارسات اليقظة",
      ],
      aboutUs: "معلومات عنا",
    },
    services: {
      heading: "خدمات العافية لدينا",
      cards: [
        {
          icon: "🧘",
          title: "يوغا وتأمل",
          desc: "ابحث عن السلام الداخلي وحسن مرونتك مع جلسات اليوغا والتأمل الموجهة.",
        },
        {
          icon: "🥗",
          title: "خطط التغذية",
          desc: "خطط غذائية شخصية صممها خبراء التغذية لأسلوب حياة أكثر صحة.",
        },
        {
          icon: "🏋️",
          title: "تدريب اللياقة البدنية",
          desc: "احصل على اللياقة مع تدريب احترافي مصمم لأهدافك وقدراتك.",
        },
      ],
    },
    blog: {
      carousel: [
        {
          title: "5 نصائح للعيش الواعي",
          desc: "نصائح عملية تساعدك على البقاء حاضرًا وتقليل التوتر يوميًا.",
          img: image7,
        },
        {
          title: "وصفات سموذي صحية",
          desc: "جرب هذه الوصفات السهلة والمغذية للطاقة والحيوية.",
          img: image6,
        },
        {
          title: "قوة المشي اليومي",
          desc: "تعرف على كيف يمكن للمشي 30 دقيقة يوميًا أن يغير صحتك.",
          img: image8,
        },
      ],
      highlights: [
        { text: "نصائح العافية", bg: image6 },
        { text: "أدلة التغذية", bg: image7 },
        { text: "العيش الواعي", bg: image8 },
      ],
      readMore: "اقرأ المزيد",
      liveBlog: "مدونة مباشرة",
    },
    achievements: {
      heading: "إنجازاتنا",
      cards: [
        "عملاء سعداء",
        "برامج العافية",
        "مدربون خبراء",
        "سنوات الخدمة",
      ],
    },
    contact: {
      heading: "تواصل معنا",
      desc: "هل لديك أسئلة أو تحتاج إلى إرشاد في رحلتك الصحية؟ تواصل معنا اليوم.",
      button: "اتصل بنا",
    },
  },
  he: {
    hero: {
      heading: "ברוכים הבאים לבריאות ורווחה",
      sub: "המסע שלך לאורח חיים בריא יותר מתחיל כאן",
      knowMore: "למידע נוסף",
    },
    about: {
      heading: "הרווחה שלך, בדרך שלך",
      desc: "קח שליטה על הבריאות שלך עם תוכניות רווחה מותאמות אישית במיוחד בשבילך.",
      list: [
        "תכנון תזונה וארוחות מותאמות אישית",
        "תוכניות כושר ויוגה הוליסטיות",
        "רווחה נפשית ותרגולי מיינדפולנס",
      ],
      aboutUs: "אודות",
    },
    services: {
      heading: "שירותי הרווחה שלנו",
      cards: [
        {
          icon: "🧘",
          title: "יוגה ומדיטציה",
          desc: "מצא שלווה פנימית ושפר גמישות עם שיעורי יוגה ומדיטציה מודרכים.",
        },
        {
          icon: "🥗",
          title: "תוכניות תזונה",
          desc: "תוכניות תזונה מותאמות אישית שנבנו על ידי מומחים לאורח חיים בריא יותר.",
        },
        {
          icon: "🏋️",
          title: "אימון כושר",
          desc: "היכנס לכושר עם אימון מקצועי המותאם למטרות וליכולות שלך.",
        },
      ],
    },
    blog: {
      carousel: [
        {
          title: "5 טיפים לחיים מודעים",
          desc: "טיפים מעשיים שיעזרו לך להישאר נוכח ולהפחית לחץ יום-יום.",
          img: image7,
        },
        {
          title: "מתכוני שייקים בריאים",
          desc: "נסה את המתכונים הקלים והבריאים האלה לאנרגיה וחיוניות.",
          img: image6,
        },
        {
          title: "הכוח של הליכות יומיות",
          desc: "גלה כיצד הליכה של 30 דקות ביום יכולה לשנות את הבריאות שלך.",
          img: image8,
        },
      ],
      highlights: [
        { text: "טיפים לרווחה", bg: image6 },
        { text: "מדריכי תזונה", bg: image7 },
        { text: "חיים מודעים", bg: image8 },
      ],
      readMore: "קרא עוד",
      liveBlog: "בלוג חי",
    },
    achievements: {
      heading: "ההישגים שלנו",
      cards: [
        "לקוחות מרוצים",
        "תוכניות רווחה",
        "מאמנים מומחים",
        "שנות שירות",
      ],
    },
    contact: {
      heading: "צור קשר",
      desc: "יש לך שאלות או זקוק להכוונה במסע הבריאות שלך? צור קשר היום.",
      button: "צור קשר",
    },
  },
};

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

// ...existing code...
function HeroSection({ theme, t, isRTL }) {
  const text = t.hero.heading;
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => (index < text.length ? prev + text[index] : prev));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  const bubbles = Array.from({ length: 8 });

  return (
    <section
      className={`relative w-full h-screen flex items-center justify-center overflow-hidden bg-black ${
        isRTL ? "rtl" : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <video
        src={vedio}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      />
      {/* Add a dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-400/30 blur-2xl"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            top: `${(i * 13) % 80}%`,
            left: `${(i * 17) % 90}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{
            background: "linear-gradient(90deg, #e66465 10%, #b86adf 50%, #a259c6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {displayedText}
          <span className="border-r-4 border-purple-500 animate-pulse ml-1"></span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link
            to="/about"
            className="px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 bg-purple-500 text-white hover:bg-purple-600"
            dir={isRTL ? "rtl" : "ltr"}
          >
            {t.hero.knowMore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}




const Home1 = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LANGUAGE_KEY) || "en";
    }
    return "en";
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

  // Listen for language change from header
  useEffect(() => {
    const handleLangChange = () => {
      const newLang = localStorage.getItem(LANGUAGE_KEY) || "en";
      setLanguage(newLang);
    };
    window.addEventListener("language-changed", handleLangChange);
    window.addEventListener("storage", handleLangChange);
    return () => {
      window.removeEventListener("language-changed", handleLangChange);
      window.removeEventListener("storage", handleLangChange);
    };
  }, []);

  // RTL support
  const isRTL = language === "ar" || language === "he";

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themedClass = (base, dark, light) => `${base} ${theme === "dark" ? dark : light}`;

  // Animated achievement counter
  const counts = [500, 120, 45, 10];
  const [liveCounts, setLiveCounts] = useState([0, 0, 0, 0]);
  useEffect(() => {
    const intervals = counts.map((target, i) =>
      setInterval(() => {
        setLiveCounts((prev) => {
          const next = [...prev];
          if (next[i] < target) next[i] += Math.ceil(target / 100);
          if (next[i] > target) next[i] = target;
          return next;
        });
      }, 20)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  // Blog carousel animation
  const t = translations[language];
  const [blogIndex, setBlogIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setBlogIndex((prev) => (prev + 1) % t.blog.carousel.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [language]);

  return (
    <div
      className={themedClass(
        "min-h-screen flex flex-col items-center justify-center transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-900"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <HeroSection theme={theme} t={t} isRTL={isRTL} />





       <section
              className={themedClass(
                "w-full py-28 px-6 relative overflow-hidden",
                "bg-[#1E2A38]",
                "bg-white"
              )}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Left side - Circular images */}
                <div className="flex items-center gap-(-30px)">
                  <motion.div
                    className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src={image7}
                      alt="Healthy food"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-md transition-transform duration-500 hover:scale-110 hover:shadow-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <img
                      src={image8}
                      alt="Fitness and exercise"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                {/* Right side - Text content */}
                <motion.div
                  className="text-center md:text-left max-w-xl"
                  initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  dir={isRTL ? "rtl" : "ltr"}
                >
                  <h2
                    className={themedClass(
                      "text-purple-600 text-2xl font-semibold mb-3",
                      "text-purple-400",
                      "text-purple-600"
                    )}
                  >
                    {translations[language].about.heading}
                  </h2>
                  <h1
                    className={themedClass(
                      "text-3xl md:text-4xl font-extrabold mb-4",
                      "text-white",
                      "text-gray-900"
                    )}
                  >
                    {translations[language].about.title}
                  </h1>
                  <p
                    className={themedClass(
                      "text-lg leading-relaxed mb-6",
                      "text-gray-300",
                      "text-gray-600"
                    )}
                  >
                    {translations[language].about.desc}
                  </p>
                  <ul
                    className={themedClass(
                      "mb-8 text-left list-disc list-inside space-y-2",
                      "text-gray-300",
                      "text-gray-700"
                    )}
                  >
                    {translations[language].about.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-block px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300 shadow-lg"
                  >
                    {translations[language].about.getStarted}
                  </a>
                </motion.div>
              </div>
            </section>




      {/* About Us Section */}
      

      {/* Services Section */}
      <section
        className={themedClass(
          "w-full py-20 px-6 transition-colors duration-500",
          "bg-gradient-to-b from-gray-800 to-gray-900",
          "bg-gradient-to-b from-purple-50 to-purple-100"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.h2
          className={themedClass("text-4xl font-bold text-center mb-14", "text-white", "text-gray-900")}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.services.heading}
        </motion.h2>
        <div className="flex flex-col space-y-8 max-w-5xl mx-auto">
          {t.services.cards.map((service, idx) => (
            <motion.div
              key={idx}
              className={themedClass(
                "group flex items-center gap-6 rounded-2xl shadow-md p-6 border hover:border-purple-400 transform hover:scale-105 transition duration-500",
                "bg-[#1E2A38]",
                "bg-white"
              )}
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <motion.div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className={themedClass("text-2xl font-semibold mb-2", "text-white", "text-gray-800")}>
                  {service.title}
                </h3>
                <p className={themedClass("", "text-gray-300", "text-gray-600")}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section with carousel animation */}
      <section className="py-20 w-full" dir={isRTL ? "rtl" : "ltr"}>
        <div className="flex justify-center gap-8 mb-16">
          {t.blog.highlights.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg cursor-pointer group"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.08 }}
            >
              <img
                src={item.bg}
                alt={item.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-center px-3 text-sm font-semibold text-gray-800 leading-snug">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Blog carousel */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1">
            <motion.img
              src={t.blog.carousel[blogIndex].img}
              alt={t.blog.carousel[blogIndex].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="md:col-span-2 p-6">
            <motion.h2
              className="text-black text-2xl font-bold mb-2"
              initial={{ x: isRTL ? -30 : 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t.blog.carousel[blogIndex].title}
            </motion.h2>
            <motion.p
              className="text-gray-500 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t.blog.liveBlog}
            </motion.p>
            <motion.p
              className="text-gray-700 text-justify mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t.blog.carousel[blogIndex].desc}
            </motion.p>
            <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link
                to="#"
                className="text-purple-600 font-semibold hover:underline"
                dir={isRTL ? "rtl" : "ltr"}
              >
                {t.blog.readMore}
              </Link>
              <div className="flex gap-4 text-purple-600 text-xl">
                <Link to="#" className="hover:text-purple-800">
                  <i className="fab fa-pinterest"></i>
                </Link>
                <Link to="#" className="hover:text-purple-800">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="hover:text-purple-800">
                  <i className="fab fa-facebook"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section with animated counters */}
      <section className="w-full py-28 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800" dir={isRTL ? "rtl" : "ltr"}>
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.achievements.heading}
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {t.achievements.cards.map((item, i) => (
            <motion.div
              key={i}
              className="relative group p-[2px] rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 hover:from-blue-400 hover:via-purple-500 hover:to-pink-400 transition-all duration-500"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 flex flex-col items-center justify-center backdrop-blur-lg shadow-lg">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {/* You can add icons here if needed */}
                </div>
                <motion.h3
                  className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  {liveCounts[i]}+
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium text-center">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section with animated button */}
      <section
        className="relative w-full py-24 px-6 text-center overflow-hidden transition-colors duration-500"
        style={{
          backgroundImage: `url(${image9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full px-6 md:px-12 text-left md:text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {t.contact.heading}
          </motion.h2>
          <motion.p
            className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {t.contact.desc}
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {t.contact.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default Home1;