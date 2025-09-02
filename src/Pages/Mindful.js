import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Services3.mp4";
import movementImage from "../assets/MM.jpg";
import { useNavigate } from "react-router-dom";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Mindful Movement",
      sub: "Move with presence, flow with ease. Build strength, flexibility, and calm through gentle, intentional movement.",
      button: "Start Your Journey",
    },
    info: {
      heading: "Move with Presence, Flow with Ease",
      desc: "Build strength gently, improve flexibility, and connect your breath to every movement for calmer days and deeper body awareness.",
      features: [
        { title: "Mindful Sequences", desc: "Slow, intentional flows for all levels." },
        { title: "Posture & Alignment", desc: "Move safely with guided cues." },
      ],
      cta: "Start Your Journey",
    },
    services: {
      heading: "Our Mindful Movement Services",
      desc: "Thoughtfully designed practices to nurture strength, flexibility, and calm.",
      items: [
        { icon: "🧘‍♀️", title: "Yoga Flow", desc: "Gentle postures to build balance & flexibility." },
        { icon: "🤸", title: "Mobility Routines", desc: "Daily drills to improve range of motion." },
        { icon: "🫁", title: "Breath & Motion", desc: "Synchronize your breath with mindful movement." },
        { icon: "🌙", title: "Restorative Sessions", desc: "Slow, soothing practices to calm the nervous system." }
      ],
    },
    benefits: {
      heading: "Why Mindful Movement?",
      items: [
        { icon: "💪", title: "Strength & Stability", desc: "Build core stability and functional strength without strain." },
        { icon: "🧘‍♂️", title: "Flexibility & Ease", desc: "Increase mobility and release tension through gentle flows." },
        { icon: "💜", title: "Calm & Clarity", desc: "Synchronize breath and motion to quiet the mind." },
      ],
    },
    plans: {
      heading: "Mindful Movement Plans",
      desc: "Choose a program to progress at your pace—gently build strength, relax your mind, and move with confidence.",
      items: [
        {
          title: "Beginner Plan",
          price: "$39/month",
          features: ["Guided Stretching", "Weekly Routines", "Email Support"],
        },
        {
          title: "Intermediate Plan",
          price: "$69/month",
          features: ["All Beginner Features", "1-on-1 Guidance", "Breathwork Coaching"],
        },
        {
          title: "Advanced Plan",
          price: "$119/month",
          features: ["Personal Coaching", "Daily Practices", "Progress Tracking"],
        },
      ],
      button: "Get Started",
    },
    contact: {
      heading: "Ready to Move Mindfully?",
      desc: "Begin your journey to strength, ease, and clarity—one mindful step at a time.",
      button: "Contact Us →",
    },
  },
  ar: {
    hero: {
      heading: "الحركة الواعية",
      sub: "تحرك بوعي، وتدفق بسهولة. ابنِ القوة والمرونة والهدوء من خلال الحركة اللطيفة والهادفة.",
      button: "ابدأ رحلتك",
    },
    info: {
      heading: "تحرك بوعي، تدفق بسهولة",
      desc: "ابنِ القوة بلطف، وحسّن المرونة، واربط أنفاسك بكل حركة لأيام أكثر هدوءًا ووعيًا بالجسم.",
      features: [
        { title: "تسلسلات واعية", desc: "تدفقات بطيئة وهادفة لجميع المستويات." },
        { title: "الوضعية والمحاذاة", desc: "تحرك بأمان مع إرشادات موجهة." },
      ],
      cta: "ابدأ رحلتك",
    },
    services: {
      heading: "خدمات الحركة الواعية",
      desc: "ممارسات مصممة بعناية لتعزيز القوة والمرونة والهدوء.",
      items: [
        { icon: "🧘‍♀️", title: "تدفق اليوغا", desc: "وضعيات لطيفة لبناء التوازن والمرونة." },
        { icon: "🤸", title: "روتينات الحركة", desc: "تمارين يومية لتحسين نطاق الحركة." },
        { icon: "🫁", title: "التنفس والحركة", desc: "زامن أنفاسك مع الحركة الواعية." },
        { icon: "🌙", title: "جلسات استعادة", desc: "ممارسات بطيئة ومهدئة لتهدئة الجهاز العصبي." }
      ],
    },
    benefits: {
      heading: "لماذا الحركة الواعية؟",
      items: [
        { icon: "💪", title: "القوة والثبات", desc: "ابنِ ثباتًا أساسيًا وقوة وظيفية بدون إجهاد." },
        { icon: "🧘‍♂️", title: "المرونة والسهولة", desc: "زد الحركة وحرر التوتر من خلال التدفقات اللطيفة." },
        { icon: "💜", title: "الهدوء والصفاء", desc: "زامن التنفس والحركة لتهدئة العقل." },
      ],
    },
    plans: {
      heading: "خطط الحركة الواعية",
      desc: "اختر برنامجًا لتتقدم بوتيرتك—ابنِ القوة بلطف، واسترخِ ذهنك، وتحرك بثقة.",
      items: [
        {
          title: "الخطة المبتدئة",
          price: "$39/شهريًا",
          features: ["تمارين تمدد موجهة", "روتينات أسبوعية", "دعم عبر البريد الإلكتروني"],
        },
        {
          title: "الخطة المتوسطة",
          price: "$69/شهريًا",
          features: ["كل ميزات المبتدئين", "إرشاد فردي", "تدريب على التنفس"],
        },
        {
          title: "الخطة المتقدمة",
          price: "$119/شهريًا",
          features: ["تدريب شخصي", "ممارسات يومية", "متابعة التقدم"],
        },
      ],
      button: "ابدأ الآن",
    },
    contact: {
      heading: "جاهز للحركة الواعية؟",
      desc: "ابدأ رحلتك نحو القوة والسهولة والصفاء—خطوة واعية في كل مرة.",
      button: "اتصل بنا →",
    },
  },
  he: {
    hero: {
      heading: "תנועה מודעת",
      sub: "הזז את הגוף בנוכחות, זרום בקלות. בנה כוח, גמישות ורוגע בתנועה עדינה ומכוונת.",
      button: "התחל את המסע שלך",
    },
    info: {
      heading: "הזז בנוכחות, זרום בקלות",
      desc: "בנה כוח בעדינות, שפר גמישות, וחבר את הנשימה לכל תנועה לימים רגועים ומודעות עמוקה לגוף.",
      features: [
        { title: "רצפים מודעים", desc: "זרימות איטיות ומכוונות לכל הרמות." },
        { title: "יציבה ויישור", desc: "הזז בבטחה עם הנחיות מודרכות." },
      ],
      cta: "התחל את המסע שלך",
    },
    services: {
      heading: "שירותי תנועה מודעת",
      desc: "תרגולים מעוצבים בקפידה לטיפוח כוח, גמישות ורוגע.",
      items: [
        { icon: "🧘‍♀️", title: "זרימת יוגה", desc: "תנוחות עדינות לבניית איזון וגמישות." },
        { icon: "🤸", title: "שגרות מוביליות", desc: "תרגילים יומיים לשיפור טווח התנועה." },
        { icon: "🫁", title: "נשימה ותנועה", desc: "סנכרן נשימה עם תנועה מודעת." },
        { icon: "🌙", title: "מפגשי שיקום", desc: "תרגולים איטיים ומרגיעים להרגעת מערכת העצבים." }
      ],
    },
    benefits: {
      heading: "למה תנועה מודעת?",
      items: [
        { icon: "💪", title: "כוח ויציבות", desc: "בנה יציבות ליבה וכוח פונקציונלי ללא מאמץ." },
        { icon: "🧘‍♂️", title: "גמישות וקלות", desc: "הגדל מוביליות ושחרר מתחים בזרימות עדינות." },
        { icon: "💜", title: "רוגע ובהירות", desc: "סנכרן נשימה ותנועה להרגעת המחשבות." },
      ],
    },
    plans: {
      heading: "תוכניות תנועה מודעת",
      desc: "בחר תוכנית להתקדמות בקצב שלך—בנה כוח בעדינות, הרפה את המחשבות, והזז בביטחון.",
      items: [
        {
          title: "תוכנית מתחילים",
          price: "$39/חודש",
          features: ["מתיחות מודרכות", "שגרות שבועיות", "תמיכה במייל"],
        },
        {
          title: "תוכנית בינונית",
          price: "$69/חודש",
          features: ["כל תכונות המתחילים", "הכוונה אישית", "אימון נשימה"],
        },
        {
          title: "תוכנית מתקדמת",
          price: "$119/חודש",
          features: ["אימון אישי", "תרגולים יומיים", "מעקב התקדמות"],
        },
      ],
      button: "התחל עכשיו",
    },
    contact: {
      heading: "מוכן לתנועה מודעת?",
      desc: "התחל את המסע שלך לכוח, קלות ובהירות—צעד מודע בכל פעם.",
      button: "צור קשר →",
    },
  },
};

export default function MindfulMovement() {
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
        const newTheme = localStorage.getItem(THEME_KEY) || "light";
        setTheme(newTheme);
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);

      const handleLangChange = () => {
        const newLang = localStorage.getItem(LANGUAGE_KEY) || "en";
        setLanguage(newLang);
      };
      window.addEventListener("language-changed", handleLangChange);
      window.addEventListener("storage", handleLangChange);

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

  const isRTL = language === "ar" || language === "he";
  const t = translations[language];

  const handleGetStarted = (path) => {
    navigate(path);
  };

  return (
    <div
      className={themedClass(
        "transition-colors duration-500 min-h-screen",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-900"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-purple-400">
              {t.hero.heading}
            </h1>
            <p className="text-xl mt-6 text-white">{t.hero.sub}</p>
            <motion.button
              onClick={() => handleGetStarted("/contact")}
              className="mt-10 px-10 py-4 rounded-full font-bold shadow-xl transition-all text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== Info Section ===== */}
      <motion.section
        className={`relative w-full py-20 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gradient-to-b from-purple-50 via-white to-purple-100"}`}
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
        <div className="flex-1 text-center md:text-left space-y-8 relative z-10 flex flex-col justify-center">
          <motion.h2
            className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : "text-purple-700"}`}
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t.info.heading}
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"></span>
          </motion.h2>
          <motion.p
            className={`max-w-xl text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.info.desc}
          </motion.p>
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
          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className={`mt-10 px-10 py-4 rounded-full font-bold shadow-xl transition-all text-lg ${theme === "dark" ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90" : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.info.cta}
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
            src={movementImage}
            alt="Mindful Movement"
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
            {t.services.heading}
          </h2>
          <p className={`max-w-xl mx-auto mt-4 text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            {t.services.desc}
          </p>
        </div>
        <div className="relative z-10 mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => (
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
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold mb-16 relative z-10 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t.benefits.heading}
        </motion.h2>
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-center gap-16 md:gap-12 z-10">
          {t.benefits.items.map((item, i) => (
            <motion.div
              key={i}
              className="flex-1 space-y-3 relative max-w-sm mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
            >
              <motion.div
                className="text-6xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>
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
        <h2 className={`text-4xl font-extrabold mb-4 ${theme === "dark" ? "text-purple-200" : "text-purple-700"}`}>{t.plans.heading}</h2>
        <p className={`max-w-xl text-lg md:text-xl leading-relaxed mx-auto mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{t.plans.desc}</p>
        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {t.plans.items.map((plan, i) => (
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
              <button
                onClick={() => handleGetStarted("/contact")}
                className="mt-8 px-6 py-2 rounded-lg relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="relative z-10">{t.plans.button}</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section
        className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${movementImage})`,
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
            {t.contact.heading}
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            {t.contact.desc}
          </p>
          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className="relative px-8 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{t.contact.button}</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-purple-400/40"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}