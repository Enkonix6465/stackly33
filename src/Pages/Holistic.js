import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Services6.mp4";
import detoxImage from "../assets/HD.jpg";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Droplet } from "lucide-react";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Holistic Detox",
      sub: "Cleanse, rejuvenate, and restore your body and mind with holistic wellness.",
      button: "Begin Your Journey",
    },
    info: {
      heading: "Love Your Body, Elevate Your Spirit",
      desc: "Experience modern holistic wellness with calming rituals, rejuvenating practices, and lifestyle habits designed to balance body, mind, and soul.",
      features: [
        { title: "Deep Hydration", desc: "Boost vitality with mindful hydration." },
        { title: "Natural Healing", desc: "Restore with herbs & nature." },
      ],
      cta: "Begin Your Journey",
    },
    services: {
      heading: "Our Holistic Detox Services",
      desc: "Natural methods and routines to cleanse your body, improve energy, and enhance overall wellbeing.",
      items: [
        { icon: "🍋", title: "Detox Nutrition", desc: "Cleansing meal plans for vitality." },
        { icon: "🌿", title: "Herbal Cleansing", desc: "Support body detox naturally." },
        { icon: "💧", title: "Hydration Support", desc: "Boost detoxification and elimination." },
        { icon: "📊", title: "Progress Tracking", desc: "Monitor your wellness improvements." }
      ],
    },
    benefits: {
      heading: "Why Holistic Detox?",
      items: [
        { icon: "🍋", title: "Purified Body", desc: "Eliminate toxins and support overall physical health." },
        { icon: "🌿", title: "Renewed Energy", desc: "Experience revitalized energy, clarity, and vitality." },
        { icon: "💧", title: "Enhanced Wellbeing", desc: "Promote long-term wellness and holistic balance." },
      ],
    },
    plans: {
      heading: "Holistic Detox Plans",
      desc: "Choose a program to cleanse, rejuvenate, and restore your mind and body.",
      items: [
        {
          title: "Basic Plan",
          price: "$29/month",
          features: ["Detox Nutrition Tips", "Weekly Guidance", "Email Support"]
        },
        {
          title: "Standard Plan",
          price: "$59/month",
          features: ["All Basic Features", "Herbal Cleansing", "Progress Tracking"]
        },
        {
          title: "Premium Plan",
          price: "$99/month",
          features: ["Full Holistic Detox Coaching", "Progress Reports", "Priority Support"]
        }
      ],
      button: "Get Started",
    },
    contact: {
      heading: "Ready for a Holistic Detox?",
      desc: "Begin your journey to cleanse, rejuvenate, and restore your body and mind today.",
      button: "Contact Us →",
    },
  },
  ar: {
    hero: {
      heading: "التخلص الشامل من السموم",
      sub: "نظف، وجدد، واستعد صحة جسدك وعقلك بأساليب العافية الشاملة.",
      button: "ابدأ رحلتك",
    },
    info: {
      heading: "أحب جسدك، وارفع روحك",
      desc: "اختبر العافية الحديثة مع طقوس مهدئة وممارسات متجددة وعادات حياة متوازنة للجسد والعقل والروح.",
      features: [
        { title: "ترطيب عميق", desc: "عزز الحيوية بالترطيب الواعي." },
        { title: "شفاء طبيعي", desc: "استعد صحتك بالأعشاب والطبيعة." },
      ],
      cta: "ابدأ رحلتك",
    },
    services: {
      heading: "خدمات التخلص الشامل من السموم",
      desc: "طرق طبيعية وروتينات لتنظيف الجسم، وزيادة الطاقة، وتعزيز العافية.",
      items: [
        { icon: "🍋", title: "تغذية التخلص من السموم", desc: "خطط وجبات تنظيفية للحيوية." },
        { icon: "🌿", title: "تنظيف بالأعشاب", desc: "دعم التخلص من السموم بشكل طبيعي." },
        { icon: "💧", title: "دعم الترطيب", desc: "تعزيز إزالة السموم والإخراج." },
        { icon: "📊", title: "متابعة التقدم", desc: "راقب تحسن العافية لديك." }
      ],
    },
    benefits: {
      heading: "لماذا التخلص الشامل من السموم؟",
      items: [
        { icon: "🍋", title: "جسم نقي", desc: "إزالة السموم ودعم الصحة الجسدية." },
        { icon: "🌿", title: "طاقة متجددة", desc: "اختبر طاقة وصفاء وحيوية متجددة." },
        { icon: "💧", title: "عافية محسنة", desc: "تعزيز العافية طويلة الأمد والتوازن الشامل." },
      ],
    },
    plans: {
      heading: "خطط التخلص الشامل من السموم",
      desc: "اختر برنامجًا لتنظيف وتجديد واستعادة العقل والجسد.",
      items: [
        {
          title: "الخطة الأساسية",
          price: "$29/شهريًا",
          features: ["نصائح تغذية التخلص من السموم", "إرشاد أسبوعي", "دعم عبر البريد الإلكتروني"]
        },
        {
          title: "الخطة القياسية",
          price: "$59/شهريًا",
          features: ["كل ميزات الأساسية", "تنظيف بالأعشاب", "متابعة التقدم"]
        },
        {
          title: "الخطة المميزة",
          price: "$99/شهريًا",
          features: ["تدريب التخلص الشامل من السموم", "تقارير التقدم", "دعم أولوية"]
        }
      ],
      button: "ابدأ الآن",
    },
    contact: {
      heading: "جاهز للتخلص الشامل من السموم؟",
      desc: "ابدأ رحلتك لتنظيف وتجديد واستعادة جسدك وعقلك اليوم.",
      button: "اتصل بنا →",
    },
  },
  he: {
    hero: {
      heading: "דיטוקס הוליסטי",
      sub: "נקה, חדש ושקם את הגוף והנפש שלך עם רווחה הוליסטית.",
      button: "התחל את המסע שלך",
    },
    info: {
      heading: "אהוב את גופך, הרם את רוחך",
      desc: "חווה רווחה מודרנית עם טקסים מרגיעים, תרגולים מחדשים והרגלי חיים לאיזון גוף, נפש ורוח.",
      features: [
        { title: "הידרציה עמוקה", desc: "הגבר חיוניות עם שתייה מודעת." },
        { title: "ריפוי טבעי", desc: "שקם עם צמחי מרפא וטבע." },
      ],
      cta: "התחל את המסע שלך",
    },
    services: {
      heading: "שירותי דיטוקס הוליסטי",
      desc: "שיטות טבעיות ושגרות לניקוי הגוף, שיפור האנרגיה והגברת הרווחה.",
      items: [
        { icon: "🍋", title: "תזונת דיטוקס", desc: "תוכניות ארוחות לניקוי וחיוניות." },
        { icon: "🌿", title: "ניקוי בצמחי מרפא", desc: "תמיכה בניקוי רעלים טבעי." },
        { icon: "💧", title: "תמיכה בהידרציה", desc: "הגבר ניקוי רעלים והפרשה." },
        { icon: "📊", title: "מעקב התקדמות", desc: "עקוב אחרי שיפור הרווחה שלך." }
      ],
    },
    benefits: {
      heading: "למה דיטוקס הוליסטי?",
      items: [
        { icon: "🍋", title: "גוף מטוהר", desc: "הסר רעלים ותמוך בבריאות הגוף." },
        { icon: "🌿", title: "אנרגיה מחודשת", desc: "חווה אנרגיה, בהירות וחיוניות מחודשת." },
        { icon: "💧", title: "רווחה מוגברת", desc: "קדם רווחה ארוכת טווח ואיזון הוליסטי." },
      ],
    },
    plans: {
      heading: "תוכניות דיטוקס הוליסטי",
      desc: "בחר תוכנית לניקוי, חידוש ושיקום הגוף והנפש.",
      items: [
        {
          title: "תוכנית בסיסית",
          price: "$29/חודש",
          features: ["טיפים לתזונת דיטוקס", "הכוונה שבועית", "תמיכה במייל"]
        },
        {
          title: "תוכנית סטנדרטית",
          price: "$59/חודש",
          features: ["כל התכונות הבסיסיות", "ניקוי בצמחי מרפא", "מעקב התקדמות"]
        },
        {
          title: "תוכנית פרימיום",
          price: "$99/חודש",
          features: ["אימון דיטוקס הוליסטי מלא", "דוחות התקדמות", "תמיכה בעדיפות"]
        }
      ],
      button: "התחל עכשיו",
    },
    contact: {
      heading: "מוכן לדיטוקס הוליסטי?",
      desc: "התחל את המסע שלך לניקוי, חידוש ושיקום הגוף והנפש היום.",
      button: "צור קשר →",
    },
  },
};

export default function HolisticDetox() {
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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-8 relative z-10 flex flex-col justify-center">
          <motion.h2
            className={`text-4xl md:text-5xl font-extrabold leading-tight ${theme === "dark" ? "text-white" : "text-purple-700"}`}
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t.info.heading}
          </motion.h2>
          <motion.p
            className={`max-w-xl text-lg md:text-xl leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.info.desc}
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
            {t.info.cta}
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
            src={detoxImage}
            alt="Holistic Detox"
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
            {t.services.heading}
            <Sparkles className={`animate-pulse ${theme === "dark" ? "text-purple-400" : "text-purple-500"}`} />
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
          backgroundImage: `url(${detoxImage})`,
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
            <span className="relative z-10 flex items-center gap-2">
              {t.contact.button}
            </span>
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