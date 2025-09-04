import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from '../assets/Services5.mp4';
import stressImage from "../assets/SR.jpg";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

// Use purple color palette
const purpleLight = "from-purple-50 via-white to-purple-100";
const purpleDark = "bg-[#0a0a0a]";
const purpleGradient = "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200";
const purpleGradientDark = "bg-gradient-to-br from-[#0a0515] via-[#120a20] to-[#1e0f2d]";
const purpleAccent = "from-purple-400 to-purple-600";
const purpleAccentDark = "from-purple-600 to-purple-500";
const purpleBorder = "border-purple-200";
const purpleBorderDark = "border-purple-700";
const purpleText = "text-purple-700";
const purpleTextDark = "text-purple-200";
const purpleBtn = "bg-gradient-to-r from-purple-500 to-purple-400 text-white hover:opacity-90";
const purpleBtnDark = "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:opacity-90";

const translations = {
  en: {
    hero: "Stress Resilience",
    heroSub: "Proven techniques to manage stress, enhance emotional resilience, and maintain mental clarity.",
    info: {
      heading: "Build Calm & Resilience",
      highlight: "Strengthen Your Mind",
      features: [
        { title: "Mindfulness exercises", desc: "🧘 Practice daily meditation." },
        { title: "Relaxation techniques", desc: "🌿 Breathing & body relaxation." }
      ],
      button: "Start Your Journey"
    },
    servicesHeading: "Our Stress Resilience Services",
    servicesSub: "Techniques and routines to help you reduce stress, stay calm, and strengthen mental resilience.",
    services: [
      { icon: "🧘", title: "Mindfulness", desc: "Guided meditation to calm the mind." },
      { icon: "🌿", title: "Relaxation", desc: "Breathing and body relaxation exercises." },
      { icon: "💡", title: "Coping Skills", desc: "Practical strategies for stressful situations." },
      { icon: "📊", title: "Progress Tracking", desc: "Monitor stress levels and improvements." }
    ],
    benefitsHeading: "Why Stress Resilience?",
    benefits: [
      { icon: "🧘", title: "Calm Mind", desc: "Reduce anxiety and maintain mental clarity throughout the day." },
      { icon: "💪", title: "Emotional Resilience", desc: "Strengthen your ability to cope with stress and challenges." },
      { icon: "🌿", title: "Overall Wellbeing", desc: "Support mental, emotional, and physical health daily." }
    ],
    plansHeading: "Stress Resilience Plans",
    plansSub: "Choose a program to manage stress, strengthen resilience, and improve overall wellbeing.",
    plans: [
      { title: "Basic Plan", price: "$29/month", features: ["Mindfulness Exercises", "Weekly Guidance", "Email Support"] },
      { title: "Standard Plan", price: "$59/month", features: ["All Basic Features", "Relaxation Coaching", "Progress Tracking"] },
      { title: "Premium Plan", price: "$99/month", features: ["Full Resilience Coaching", "Progress Reports", "Priority Support"] }
    ],
    contactHeading: "Ready to Build Resilience?",
    contactSub: "Connect with us to start your stress resilience journey today.",
    contactButton: "Contact Us"
  },
  ar: {
    hero: "المرونة ضد التوتر",
    heroSub: "تقنيات مثبتة لإدارة التوتر، وتعزيز المرونة العاطفية، والحفاظ على صفاء الذهن.",
    info: {
      heading: "ابنِ الهدوء والمرونة",
      highlight: "قوّي عقلك",
      features: [
        { title: "تمارين اليقظة الذهنية", desc: "🧘 مارس التأمل اليومي." },
        { title: "تقنيات الاسترخاء", desc: "🌿 تمارين التنفس واسترخاء الجسم." }
      ],
      button: "ابدأ رحلتك"
    },
    servicesHeading: "خدمات المرونة ضد التوتر",
    servicesSub: "تقنيات وروتينات تساعدك على تقليل التوتر، والبقاء هادئًا، وتقوية المرونة الذهنية.",
    services: [
      { icon: "🧘", title: "اليقظة الذهنية", desc: "تأمل موجه لتهدئة العقل." },
      { icon: "🌿", title: "الاسترخاء", desc: "تمارين التنفس واسترخاء الجسم." },
      { icon: "💡", title: "مهارات المواجهة", desc: "استراتيجيات عملية للمواقف المجهدة." },
      { icon: "📊", title: "متابعة التقدم", desc: "مراقبة مستويات التوتر والتحسن." }
    ],
    benefitsHeading: "لماذا المرونة ضد التوتر؟",
    benefits: [
      { icon: "🧘", title: "عقل هادئ", desc: "قلل القلق وحافظ على صفاء الذهن طوال اليوم." },
      { icon: "💪", title: "مرونة عاطفية", desc: "قوّي قدرتك على مواجهة التوتر والتحديات." },
      { icon: "🌿", title: "رفاهية شاملة", desc: "ادعم الصحة الذهنية والعاطفية والجسدية يوميًا." }
    ],
    plansHeading: "خطط المرونة ضد التوتر",
    plansSub: "اختر برنامجًا لإدارة التوتر، وتقوية المرونة، وتحسين الصحة العامة.",
    plans: [
      { title: "الخطة الأساسية", price: "$29/شهريًا", features: ["تمارين اليقظة الذهنية", "إرشاد أسبوعي", "دعم عبر البريد الإلكتروني"] },
      { title: "الخطة القياسية", price: "$59/شهريًا", features: ["كل ميزات الأساسية", "تدريب على الاسترخاء", "متابعة التقدم"] },
      { title: "الخطة المميزة", price: "$99/شهريًا", features: ["تدريب كامل للمرونة", "تقارير تقدم", "دعم أولوية"] }
    ],
    contactHeading: "جاهز لبناء المرونة؟",
    contactSub: "تواصل معنا وابدأ رحلتك نحو المرونة ضد التوتر اليوم.",
    contactButton: "تواصل معنا"
  },
  he: {
    hero: "חוסן נפשי",
    heroSub: "טכניקות מוכחות לניהול לחץ, חיזוק חוסן רגשי ושמירה על בהירות מנטלית.",
    info: {
      heading: "בנה רוגע וחוסן",
      highlight: "חזק את המוח שלך",
      features: [
        { title: "תרגולי מיינדפולנס", desc: "🧘 תרגל מדיטציה יומית." },
        { title: "טכניקות הרפיה", desc: "🌿 נשימות והרפיית הגוף." }
      ],
      button: "התחל את המסע שלך"
    },
    servicesHeading: "שירותי חוסן נפשי",
    servicesSub: "טכניקות ושגרות שיעזרו לך להפחית לחץ, להישאר רגוע ולחזק את החוסן המנטלי.",
    services: [
      { icon: "🧘", title: "מיינדפולנס", desc: "מדיטציה מודרכת להרגעת המחשבות." },
      { icon: "🌿", title: "הרפיה", desc: "תרגילי נשימה והרפיית הגוף." },
      { icon: "💡", title: "מיומנויות התמודדות", desc: "אסטרטגיות מעשיות למצבים מלחיצים." },
      { icon: "📊", title: "מעקב התקדמות", desc: "מעקב אחר רמות לחץ ושיפור." }
    ],
    benefitsHeading: "למה חוסן נפשי?",
    benefits: [
      { icon: "🧘", title: "מחשבה רגועה", desc: "הפחת חרדה ושמור על בהירות מנטלית לאורך היום." },
      { icon: "💪", title: "חוסן רגשי", desc: "חזק את היכולת להתמודד עם לחץ ואתגרים." },
      { icon: "🌿", title: "רווחה כללית", desc: "תמוך בבריאות נפשית, רגשית וגופנית יום-יום." }
    ],
    plansHeading: "תוכניות חוסן נפשי",
    plansSub: "בחר תוכנית לניהול לחץ, חיזוק החוסן ושיפור הרווחה.",
    plans: [
      { title: "תוכנית בסיסית", price: "$29/חודש", features: ["תרגולי מיינדפולנס", "הכוונה שבועית", "תמיכה במייל"] },
      { title: "תוכנית סטנדרטית", price: "$59/חודש", features: ["כל היתרונות הבסיסיים", "אימון הרפיה", "מעקב התקדמות"] },
      { title: "תוכנית פרימיום", price: "$99/חודש", features: ["אימון מלא לחוסן נפשי", "דוחות התקדמות", "תמיכה מועדפת"] }
    ],
    contactHeading: "מוכן לבנות חוסן?",
    contactSub: "צור קשר והתחל את הדרך לחוסן נפשי היום.",
    contactButton: "צור קשר"
  }
};

export default function StressResilience() {
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
          ${theme === "dark" ? purpleDark : `bg-gradient-to-b ${purpleLight}`}
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

        <div className="flex-1 text-center md:text-left space-y-8 relative z-10 flex flex-col justify-center" dir={isRTL ? "rtl" : "ltr"}>
          <motion.h2
            className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : purpleText}`}
            initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t.info.heading}
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            {t.info.features.map((feature, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-2xl shadow-lg backdrop-blur-md
                  ${theme === "dark" ? "bg-[#1a1a1a]/80 text-white hover:bg-[#2a2a2a]" : "bg-white/70 text-gray-800 hover:bg-purple-100"}`}
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

          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className={`mt-10 px-10 py-4 rounded-full font-bold shadow-xl transition-all text-lg
              ${theme === "dark" ? purpleBtnDark : purpleBtn}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.info.button}
          </motion.button>
        </div>

        <motion.div
          className="flex-1 flex items-center justify-center relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          animate={{ y: [0, -15, 0] }}
        >
          <img
            src={stressImage}
            alt={t.hero}
            className="rounded-3xl shadow-2xl max-h-[420px] w-full object-cover border-4 border-purple-300/50"
          />
        </motion.div>
      </motion.section>

      {/* ===== Services Section ===== */}
      <motion.section
        className={`relative py-24 px-6 text-center overflow-hidden
          ${theme === "dark" ? purpleGradientDark : purpleGradient}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="relative z-10">
          <h2 className={`text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-3 ${theme === "dark" ? purpleTextDark : "text-purple-800"}`}>
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
              className={`group p-8 rounded-2xl relative shadow-md transition-all duration-500 hover:shadow-xl hover:scale-105
                ${theme === "dark" ? "bg-[#1b112a] border border-purple-700" : "bg-white border border-purple-200"}`}
              whileHover={{ y: -5 }}
            >
              <span className={`relative z-10 text-6xl block ${theme === "dark" ? "text-purple-300" : "text-purple-600"}`}>{s.icon}</span>
              <h3 className={`mt-5 text-2xl font-bold relative z-10 ${theme === "dark" ? purpleTextDark : "text-purple-800"}`}>{s.title}</h3>
              <p className={`mt-3 text-sm relative z-10 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Benefits Section ===== */}
      <motion.section
        className={`relative w-full py-20 px-6 lg:px-12 text-center overflow-hidden 
          ${theme === "dark" ? "bg-[#0d0d0d]" : "bg-gradient-to-b from-purple-50 to-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl bg-gradient-to-r from-purple-500/30 to-purple-400/30"
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
            <motion.div key={i} className="flex-1 space-y-3 relative max-w-sm mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
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
        <h2 className={`text-4xl font-extrabold mb-4 ${theme === "dark" ? purpleTextDark : purpleText}`}>{t.plansHeading}</h2>
        <p className={`max-w-xl text-lg md:text-xl leading-relaxed mx-auto mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.plansSub}</p>

        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {t.plans.map((plan, i) => (
            <motion.div key={i} className={`relative group p-8 rounded-2xl shadow-lg border overflow-hidden cursor-pointer transition-all
              ${theme === "dark" ? "bg-[#1f1330] border-purple-700 text-gray-300" : "bg-white border-purple-200 text-gray-700"}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <h3 className={`font-semibold text-xl relative z-10 ${theme === "dark" ? purpleTextDark : purpleText}`}>{plan.title}</h3>
              <p className={`text-3xl font-bold mt-3 relative z-10 ${theme === "dark" ? "text-purple-100" : "text-purple-800"}`}>{plan.price}</p>
              <ul className="mt-5 space-y-3 flex flex-col items-center relative z-10">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleGetStarted("/contact")}
                className="mt-8 px-6 py-2 rounded-lg relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                {t.contactButton}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-fixed"
        style={{ backgroundImage: `url(${stressImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contactHeading}</h2>
          <p className="text-white/90 text-lg md:text-xl mb-6">{t.contactSub}</p>
          <button onClick={() => handleGetStarted("/contact")} className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            {t.contactButton}
          </button>
        </div>
      </motion.section>
    </div>
  );
}