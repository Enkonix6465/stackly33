import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Services4.mp4";
import sleepImage from "../assets/SO.jpg";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: "Sleep Optimization",
    heroSub: "Improve your sleep quality, regulate your internal clock, and wake up refreshed with evidence-based techniques.",
    info: {
      heading: "Sleep Better,",
      highlight: "Restore Your Energy",
      features: [
        { title: "Relaxation Techniques", desc: "Calm your mind and body before sleep." },
        { title: "Circadian Support", desc: "Natural rhythms for optimal rest." }
      ],
      button: "Begin Your Journey"
    },
    servicesHeading: "Our Sleep Services",
    servicesSub: "Techniques and routines to help you fall asleep faster, stay asleep longer, and wake up refreshed.",
    services: [
      { icon: "🛌", title: "Sleep Hygiene", desc: "Optimize bedroom environment and habits." },
      { icon: "🌙", title: "Relaxation Techniques", desc: "Guided breathing and meditation." },
      { icon: "💤", title: "Circadian Support", desc: "Align your internal clock naturally." },
      { icon: "📊", title: "Progress Tracking", desc: "Monitor sleep quality improvements." },
    ],
    benefitsHeading: "Why Sleep Optimization?",
    benefits: [
      { icon: "😴", title: "Deeper Sleep", desc: "Achieve restorative sleep cycles." },
      { icon: "🌅", title: "Morning Energy", desc: "Wake up refreshed and alert." },
      { icon: "🧘‍♂️", title: "Mental Clarity", desc: "Enhance focus, mood, and cognitive performance." },
    ],
    plansHeading: "Sleep Optimization Plans",
    plansSub: "Choose a program to improve your sleep, energy, and overall wellbeing.",
    plans: [
      { title: "Basic Plan", price: "$29/month", features: ["Sleep Tips", "Weekly Guidance", "Email Support"] },
      { title: "Standard Plan", price: "$59/month", features: ["All Basic Features", "Relaxation Coaching", "Sleep Tracking"] },
      { title: "Premium Plan", price: "$99/month", features: ["Full Sleep Optimization Coaching", "Progress Reports", "Priority Support"] },
    ],
    contactHeading: "Ready to Sleep Better?",
    contactSub: "Contact us today and start your journey toward restful nights and energized mornings.",
    contactButton: "Contact Us"
  },
  ar: {
    hero: "تحسين النوم",
    heroSub: "حسّن جودة نومك، ونظم ساعتك البيولوجية، واستيقظ منتعشًا بتقنيات مثبتة علميًا.",
    info: {
      heading: "نم أفضل،",
      highlight: "استعد طاقتك",
      features: [
        { title: "تقنيات الاسترخاء", desc: "هدئ عقلك وجسمك قبل النوم." },
        { title: "دعم الإيقاع الحيوي", desc: "إيقاعات طبيعية لراحة مثالية." }
      ],
      button: "ابدأ رحلتك"
    },
    servicesHeading: "خدمات النوم",
    servicesSub: "تقنيات وروتينات تساعدك على النوم بسرعة، والبقاء نائمًا لفترة أطول، والاستيقاظ منتعشًا.",
    services: [
      { icon: "🛌", title: "نظافة النوم", desc: "تحسين بيئة وعادات غرفة النوم." },
      { icon: "🌙", title: "تقنيات الاسترخاء", desc: "تمارين التنفس والتأمل الموجهة." },
      { icon: "💤", title: "دعم الإيقاع الحيوي", desc: "تنظيم ساعتك البيولوجية بشكل طبيعي." },
      { icon: "📊", title: "متابعة التقدم", desc: "مراقبة تحسن جودة النوم." },
    ],
    benefitsHeading: "لماذا تحسين النوم؟",
    benefits: [
      { icon: "😴", title: "نوم أعمق", desc: "حقق دورات نوم مريحة." },
      { icon: "🌅", title: "طاقة صباحية", desc: "استيقظ منتعشًا ونشيطًا." },
      { icon: "🧘‍♂️", title: "صفاء ذهني", desc: "عزز التركيز والمزاج والأداء الذهني." },
    ],
    plansHeading: "خطط تحسين النوم",
    plansSub: "اختر برنامجًا لتحسين نومك وطاقة جسمك وصحتك العامة.",
    plans: [
      { title: "الخطة الأساسية", price: "$29/شهريًا", features: ["نصائح النوم", "إرشاد أسبوعي", "دعم عبر البريد الإلكتروني"] },
      { title: "الخطة القياسية", price: "$59/شهريًا", features: ["كل ميزات الأساسية", "تدريب على الاسترخاء", "متابعة النوم"] },
      { title: "الخطة المميزة", price: "$99/شهريًا", features: ["تدريب كامل لتحسين النوم", "تقارير تقدم", "دعم أولوية"] },
    ],
    contactHeading: "جاهز لنوم أفضل؟",
    contactSub: "تواصل معنا اليوم وابدأ رحلتك نحو ليالٍ هادئة وصباحات مليئة بالطاقة.",
    contactButton: "تواصل معنا"
  },
  he: {
    hero: "אופטימיזציית שינה",
    heroSub: "שפר את איכות השינה, סדר את השעון הביולוגי, והתעורר רענן עם טכניקות מוכחות.",
    info: {
      heading: "שינה טובה יותר,",
      highlight: "השב את האנרגיה שלך",
      features: [
        { title: "טכניקות הרפיה", desc: "הרגע את הגוף והנפש לפני השינה." },
        { title: "תמיכה בצירקדיאן", desc: "קצב טבעי למנוחה מיטבית." }
      ],
      button: "התחל את המסע שלך"
    },
    servicesHeading: "שירותי שינה",
    servicesSub: "טכניקות ושגרות שיעזרו לך להירדם מהר, לישון עמוק ולהתעורר רענן.",
    services: [
      { icon: "🛌", title: "היגיינת שינה", desc: "שיפור סביבת וחוקי השינה." },
      { icon: "🌙", title: "טכניקות הרפיה", desc: "נשימות מודרכות ומדיטציה." },
      { icon: "💤", title: "תמיכה בצירקדיאן", desc: "איזון השעון הביולוגי שלך." },
      { icon: "📊", title: "מעקב התקדמות", desc: "מעקב אחר שיפור איכות השינה." },
    ],
    benefitsHeading: "למה אופטימיזציית שינה?",
    benefits: [
      { icon: "😴", title: "שינה עמוקה יותר", desc: "הגש מחזורי שינה משקמים." },
      { icon: "🌅", title: "אנרגיה בבוקר", desc: "התעורר רענן ומלא אנרגיה." },
      { icon: "🧘‍♂️", title: "בהירות מנטלית", desc: "שפר ריכוז, מצב רוח ותפקוד קוגניטיבי." },
    ],
    plansHeading: "תוכניות אופטימיזציית שינה",
    plansSub: "בחר תוכנית לשיפור השינה, האנרגיה והרווחה שלך.",
    plans: [
      { title: "תוכנית בסיסית", price: "$29/חודש", features: ["טיפים לשינה", "הכוונה שבועית", "תמיכה במייל"] },
      { title: "תוכנית סטנדרטית", price: "$59/חודש", features: ["כל היתרונות הבסיסיים", "אימון הרפיה", "מעקב שינה"] },
      { title: "תוכנית פרימיום", price: "$99/חודש", features: ["אימון מלא לאופטימיזציית שינה", "דוחות התקדמות", "תמיכה מועדפת"] },
    ],
    contactHeading: "מוכן לשינה טובה יותר?",
    contactSub: "צור קשר והתחל את הדרך ללילות רגועים ובקרים מלאי אנרגיה.",
    contactButton: "צור קשר"
  }
};

export default function SleepOptimization() {
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
    <div className={themedClass("transition-colors duration-500 min-h-screen", "bg-gray-900 text-gray-100", "bg-white text-gray-900")} dir={isRTL ? "rtl" : "ltr"}>
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
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
        ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gradient-to-b from-purple-50 via-white to-purple-100"} overflow-hidden`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Floating Bubbles */}
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
            animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
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
            src={sleepImage}
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
      <motion.section className={`relative w-full py-20 px-6 lg:px-12 text-center overflow-hidden ${theme === "dark" ? "bg-[#0d0d0d]" : "bg-gradient-to-b from-purple-50 to-white"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full blur-3xl bg-gradient-to-r from-purple-500/30 to-pink-500/30"
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

        <motion.h2 className={`text-4xl md:text-5xl font-extrabold mb-16 relative z-10 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
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
              <motion.div className="text-6xl" animate={{ scale: [1, 1.15, 1] }}
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
      <motion.section className={`py-20 px-6 text-center transition-colors duration-500 ${theme === "dark" ? "bg-[#0f0a19] text-gray-300" : "bg-gradient-to-br from-purple-50 via-purple-100 to-white text-gray-700"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className={`text-4xl font-extrabold mb-4 ${theme === "dark" ? "text-purple-200" : "text-purple-700"}`}>{t.plansHeading}</h2>
        <p className={`max-w-xl text-lg md:text-xl leading-relaxed mx-auto mb-12 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {t.plansSub}
        </p>

        <div className="grid gap-10 md:grid-cols-3 relative z-10">
          {t.plans.map((plan, i) => (
            <motion.div key={i} className={`relative group p-8 rounded-2xl shadow-lg border overflow-hidden cursor-pointer transition-all ${theme === "dark" ? "bg-[#1f1330] border-purple-700 text-gray-300" : "bg-white border-purple-200 text-gray-700"}`}
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
              <button onClick={() => handleGetStarted("/contact")}
                className="mt-8 px-6 py-2 rounded-lg relative z-10 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <span className="relative z-10">{t.contactButton}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-fixed"
        style={{ backgroundImage: `url(${sleepImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">{t.contactHeading}</h2>
          <p className="text-white/90 mb-8 text-lg md:text-xl drop-shadow-md">{t.contactSub}</p>
          <button onClick={() => handleGetStarted("/contact")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            {t.contactButton}
          </button>
        </div>
      </motion.section>
    </div>
  );
}