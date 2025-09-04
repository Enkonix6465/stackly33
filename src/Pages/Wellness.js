import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Services7.mp4";
import wellnessImage from "../assets/FC.jpg";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Droplet } from "lucide-react";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: "Wellness Coaching",
    heroSub: "Personalized wellness coaching to enhance fitness, mental clarity, and emotional wellbeing.",
    info: {
      heading: "Love Your Body,",
      highlight: "Elevate Your Spirit",
      features: [
        { title: "Deep Hydration", desc: "Boost vitality with mindful hydration." },
        { title: "Mind & Clarity", desc: "Improve focus and reduce stress." }
      ],
      button: "Begin Your Journey"
    },
    servicesHeading: "Our Wellness Services",
    servicesSub: "Holistic guidance to improve your health, energy, and lifestyle.",
    services: [
      { icon: "🏃", title: "Fitness & Nutrition", desc: "Tailored plans for healthy living." },
      { icon: "🧘", title: "Mindfulness Coaching", desc: "Manage stress and enhance clarity." },
      { icon: "💡", title: "Lifestyle Coaching", desc: "Build sustainable healthy habits." },
      { icon: "📊", title: "Progress Tracking", desc: "Monitor improvements and results." }
    ],
    benefitsHeading: "Why Wellness Coaching?",
    benefits: [
      { icon: "🏃", title: "Healthy Body", desc: "Improve fitness, nutrition, and vitality." },
      { icon: "🧘", title: "Mind & Clarity", desc: "Reduce stress and enhance focus." },
      { icon: "💡", title: "Sustainable Lifestyle", desc: "Build habits for long-term wellness." }
    ],
    plansHeading: "Wellness Coaching Plans",
    plansSub: "Choose a coaching program to improve your fitness, mindset, and overall wellbeing.",
    plans: [
      { title: "Basic Plan", price: "$39/month", features: ["Fitness & Nutrition Tips", "Weekly Guidance", "Email Support"] },
      { title: "Standard Plan", price: "$69/month", features: ["All Basic Features", "Mindfulness Coaching", "Progress Tracking"] },
      { title: "Premium Plan", price: "$109/month", features: ["Full Wellness Coaching", "Progress Reports", "Priority Support"] }
    ],
    contactHeading: "Ready to Transform Your Life?",
    contactSub: "Join our wellness coaching program and start your journey today.",
    contactButton: "Contact Us"
  },
  ar: {
    hero: "تدريب العافية",
    heroSub: "تدريب شخصي لتحسين اللياقة والوضوح الذهني والرفاهية العاطفية.",
    info: {
      heading: "احب جسدك،",
      highlight: "ارتقِ بروحك",
      features: [
        { title: "ترطيب عميق", desc: "عزز الحيوية بالترطيب الواعي." },
        { title: "الذهن والصفاء", desc: "حسّن التركيز وقلل التوتر." }
      ],
      button: "ابدأ رحلتك"
    },
    servicesHeading: "خدمات العافية",
    servicesSub: "إرشاد شامل لتحسين صحتك وطاقة جسمك ونمط حياتك.",
    services: [
      { icon: "🏃", title: "اللياقة والتغذية", desc: "خطط مخصصة لحياة صحية." },
      { icon: "🧘", title: "تدريب اليقظة الذهنية", desc: "إدارة التوتر وتعزيز الصفاء." },
      { icon: "💡", title: "تدريب نمط الحياة", desc: "بناء عادات صحية مستدامة." },
      { icon: "📊", title: "متابعة التقدم", desc: "مراقبة التحسن والنتائج." }
    ],
    benefitsHeading: "لماذا تدريب العافية؟",
    benefits: [
      { icon: "🏃", title: "جسم صحي", desc: "حسّن اللياقة والتغذية والحيوية." },
      { icon: "🧘", title: "الذهن والصفاء", desc: "قلل التوتر وحسّن التركيز." },
      { icon: "💡", title: "نمط حياة مستدام", desc: "ابنِ عادات للرفاهية طويلة الأمد." }
    ],
    plansHeading: "خطط تدريب العافية",
    plansSub: "اختر برنامج تدريب لتحسين لياقتك وعقليتك وصحتك العامة.",
    plans: [
      { title: "الخطة الأساسية", price: "$39/شهريًا", features: ["نصائح اللياقة والتغذية", "إرشاد أسبوعي", "دعم عبر البريد الإلكتروني"] },
      { title: "الخطة القياسية", price: "$69/شهريًا", features: ["كل ميزات الأساسية", "تدريب اليقظة الذهنية", "متابعة التقدم"] },
      { title: "الخطة المميزة", price: "$109/شهريًا", features: ["تدريب كامل للعافية", "تقارير تقدم", "دعم أولوية"] }
    ],
    contactHeading: "جاهز لتحويل حياتك؟",
    contactSub: "انضم إلى برنامج تدريب العافية وابدأ رحلتك اليوم.",
    contactButton: "تواصل معنا"
  },
  he: {
    hero: "אימון רווחה",
    heroSub: "אימון אישי לשיפור הכושר, בהירות מנטלית ורווחה רגשית.",
    info: {
      heading: "אהוב את גופך,",
      highlight: "העלה את רוחך",
      features: [
        { title: "הידרציה עמוקה", desc: "הגבר חיוניות עם שתייה מודעת." },
        { title: "מיינד וצלילות", desc: "שפר ריכוז והפחת לחץ." }
      ],
      button: "התחל את המסע שלך"
    },
    servicesHeading: "שירותי רווחה",
    servicesSub: "הכוונה הוליסטית לשיפור הבריאות, האנרגיה ואורח החיים שלך.",
    services: [
      { icon: "🏃", title: "כושר ותזונה", desc: "תוכניות מותאמות לחיים בריאים." },
      { icon: "🧘", title: "אימון מיינדפולנס", desc: "ניהול לחץ ושיפור בהירות." },
      { icon: "💡", title: "אימון אורח חיים", desc: "בניית הרגלים בריאים לאורך זמן." },
      { icon: "📊", title: "מעקב התקדמות", desc: "מעקב אחר שיפור ותוצאות." }
    ],
    benefitsHeading: "למה אימון רווחה?",
    benefits: [
      { icon: "🏃", title: "גוף בריא", desc: "שפר כושר, תזונה וחיוניות." },
      { icon: "🧘", title: "מיינד וצלילות", desc: "הפחת לחץ ושפר ריכוז." },
      { icon: "💡", title: "אורח חיים בר קיימא", desc: "בנה הרגלים לרווחה ארוכת טווח." }
    ],
    plansHeading: "תוכניות אימון רווחה",
    plansSub: "בחר תוכנית אימון לשיפור הכושר, המיינדסט והרווחה שלך.",
    plans: [
      { title: "תוכנית בסיסית", price: "$39/חודש", features: ["טיפים לכושר ותזונה", "הכוונה שבועית", "תמיכה במייל"] },
      { title: "תוכנית סטנדרטית", price: "$69/חודש", features: ["כל היתרונות הבסיסיים", "אימון מיינדפולנס", "מעקב התקדמות"] },
      { title: "תוכנית פרימיום", price: "$109/חודש", features: ["אימון רווחה מלא", "דוחות התקדמות", "תמיכה מועדפת"] }
    ],
    contactHeading: "מוכן לשנות את חייך?",
    contactSub: "הצטרף לתוכנית אימון רווחה והתחל את המסע שלך היום.",
    contactButton: "צור קשר"
  }
};

export default function WellnessPage() {
  const navigate = useNavigate();

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
      const handleThemeChange = () => {
        setTheme(localStorage.getItem(THEME_KEY) || "light");
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      const handleLangChange = () => {
        setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
      };
      window.addEventListener("language-changed", handleLangChange);
      window.addEventListener("storage", handleLangChange);

      setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");

      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("language-changed", handleLangChange);
        window.removeEventListener("storage", handleLangChange);
      };
    }
  }, []);

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const t = translations[language] || translations["en"];
  const isRTL = language === "ar" || language === "he";

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div className={themedClass(
      "transition-colors duration-500 min-h-screen",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-900"
    )} dir={isRTL ? "rtl" : "ltr"}>
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-purple-400 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.hero}
          </motion.h1>
        </div>
      </section>

      {/* ===== Info Section ===== */}
      <motion.section
        className={`relative w-full py-20 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-16 
          ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gradient-to-b from-purple-50 via-white to-purple-100"} 
          overflow-hidden`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${theme === "dark" ? "bg-purple-800/40" : "bg-purple-300/50"}`}
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              top: `${(i * 15) % 80}%`,
              left: `${(i * 20) % 90}%`,
              zIndex: 1,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-8 relative z-10 flex flex-col justify-center" dir={isRTL ? "rtl" : "ltr"}>
          <motion.h2
            className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : "text-purple-700"}`}
            initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t.info.heading}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t.info.highlight}
            </span>
          </motion.h2>

          <motion.p
            className={`max-w-xl text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.heroSub}
          </motion.p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            {t.info.features.map((feature, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl shadow-lg backdrop-blur-md ${theme === "dark" ? "bg-[#1a1a1a]/80 text-white hover:bg-[#2a2a2a]" : "bg-white/70 text-gray-800 hover:bg-purple-100"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-sm opacity-80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className={`mt-10 px-10 py-4 rounded-full font-bold shadow-xl transition-all text-lg ${theme === "dark" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90" : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.info.button}
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex items-center justify-center relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          animate={{ y: [0, -15, 0] }}
        >
          <img
            src={wellnessImage}
            alt={t.hero}
            className="rounded-3xl shadow-2xl max-h-[420px] w-full object-cover border-4 border-purple-300/50"
          />
        </motion.div>
      </motion.section>

      {/* ===== Services Section ===== */}
      <motion.section
        className={`relative py-24 px-6 text-center overflow-hidden ${theme === "dark" ? "bg-gradient-to-br from-[#0a0515] via-[#120a20] to-[#1e0f2d]" : "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="relative z-10">
          <h2 className={`text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-3 ${theme === "dark" ? "text-purple-200" : "text-purple-800"}`}>
            <Sparkles className={`animate-pulse ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`} />
            {t.servicesHeading}
            <Sparkles className={`animate-pulse ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`} />
          </h2>
          <p className={`max-w-xl mx-auto mt-4 text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            {t.servicesSub}
          </p>
        </div>

        <div className="relative z-10 mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {t.services.map((s, i) => (
            <motion.div
              key={i}
              className={`group p-8 rounded-2xl relative shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105 ${theme === "dark" ? "bg-[#1b112a] border border-purple-700" : "bg-white border border-purple-200"}`}
              whileHover={{ y: -5 }}
            >
              <span className={`relative z-10 text-6xl block ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>{s.icon}</span>
              <h3 className={`mt-5 text-2xl font-bold relative z-10 ${theme === "dark" ? "text-purple-100" : "text-purple-800"}`}>{s.title}</h3>
              <p className={`mt-3 text-sm relative z-10 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Benefits Section ===== */}
      <motion.section
        className={`relative w-full py-20 px-6 lg:px-12 text-center overflow-hidden ${theme === "dark" ? "bg-[#0d0d0d]" : "bg-gradient-to-b from-purple-50 to-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30"
            style={{
              width: `${160 + i * 60}px`,
              height: `${160 + i * 60}px`,
              top: `${(i * 25) % 70}%`,
              left: `${(i * 35) % 80}%`,
              zIndex: 0,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold mb-16 relative z-10 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.benefitsHeading}
        </motion.h2>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-center gap-16 md:gap-12 z-10">
          {t.benefits.map((item, i) => (
            <motion.div key={i} className="flex-1 space-y-3 relative max-w-sm mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.3, duration: 0.8 }}>
              <motion.div className="text-6xl" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>{item.icon}</motion.div>
              <h3 className={`text-xl font-semibold ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>{item.title}</h3>
              <p className={`max-w-xl text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Plans Section ===== */}
      <motion.section
        className={`py-20 px-6 text-center transition-colors duration-500 ${theme === "dark" ? "bg-[#0f0a19] text-gray-300" : "bg-gradient-to-br from-purple-50 via-purple-100 to-white text-gray-700"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className={`text-4xl font-extrabold mb-4 ${theme === "dark" ? "text-purple-200" : "text-purple-700"}`}>{t.plansHeading}</h2>
        <p className={`max-w-xl text-lg md:text-xl leading-relaxed mx-auto mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.plansSub}</p>

        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {t.plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative group p-8 rounded-2xl shadow-lg border overflow-hidden cursor-pointer transition-all ${theme === "dark" ? "bg-[#1f1330] border-purple-700 text-gray-300" : "bg-white border-purple-200 text-gray-700"}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <h3 className={`font-semibold text-xl relative z-10 ${theme === "dark" ? "text-purple-200" : "text-purple-700"}`}>{plan.title}</h3>
              <p className={`text-3xl font-bold mt-3 relative z-10 ${theme === "dark" ? "text-purple-100" : "text-purple-800"}`}>{plan.price}</p>
              <ul className="mt-5 space-y-3 flex flex-col items-center relative z-10">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleGetStarted("/contact")} className="mt-8 px-6 py-2 rounded-lg relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                {t.contactButton}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${wellnessImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{t.contactHeading}</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">{t.contactSub}</p>
          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.contactButton}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}