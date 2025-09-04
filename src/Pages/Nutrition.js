import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Nutrition.mp4";
import nutritionImage from "../assets/nutrition.jpg";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Droplet } from "lucide-react";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Personalized Nutrition",
      sub: "Fuel your body, elevate your health. Get custom plans for your goals and lifestyle.",
      button: "Start Your Nutrition Journey",
    },
    info: {
      heading: "Fuel Your Body, Elevate Your Health",
      desc: "Personalized nutrition plans to optimize energy, balance meals, and improve performance with tailored guidance.",
      features: [
        { title: "Customized Meal Plans", desc: "Tailored to your goals and preferences." },
        { title: "Hydration & Lifestyle", desc: "Support optimal body and mind health." }
      ],
      cta: "Start Your Nutrition Journey",
    },
    services: {
      heading: "Our Nutrition Services",
      desc: "Personalized strategies for balanced diets and optimal health.",
      items: [
        { icon: "🥗", title: "Customized Meal Plans", desc: "Tailored meals for your body and goals." },
        { icon: "🍎", title: "Nutrient Optimization", desc: "Optimizing vitamins, minerals & macros." },
        { icon: "💧", title: "Hydration & Lifestyle", desc: "Healthy routines for mind and body." },
        { icon: "📊", title: "Progress Tracking", desc: "Monitor improvements & adapt plans." }
      ],
    },
    benefits: {
      heading: "Why Personalized Nutrition?",
      items: [
        { icon: "⚡", title: "Better Energy", desc: "Fuel your body efficiently for daily performance." },
        { icon: "🧠", title: "Mental Focus", desc: "Support cognitive clarity and focus with balanced nutrition." },
        { icon: "💪", title: "Stronger Immunity", desc: "Enhance resilience with nutrient-rich eating habits." }
      ],
    },
    plans: {
      heading: "Nutrition Plans",
      desc: "Select a plan to optimize your health and lifestyle.",
      items: [
        {
          title: "Starter Plan",
          price: "$49/month",
          features: ["Custom Meal Plan", "Weekly Guidance", "Email Support"]
        },
        {
          title: "Balanced Plan",
          price: "$79/month",
          features: ["All Starter Features", "1-on-1 Coaching", "Lifestyle Tips"]
        },
        {
          title: "Premium Plan",
          price: "$129/month",
          features: ["Full Nutrition Coaching", "Daily Meal Tracking", "Priority Support"]
        }
      ],
      button: "Get Started",
    },
    contact: {
      heading: "Ready to Transform Your Nutrition?",
      desc: "Start your journey to better health with personalized guidance and support.",
      button: "Contact Us →",
    },
  },
  ar: {
    hero: {
      heading: "التغذية الشخصية",
      sub: "زود جسمك بالطاقة، وارفع صحتك. خطط مخصصة لأهدافك ونمط حياتك.",
      button: "ابدأ رحلتك الغذائية",
    },
    info: {
      heading: "زود جسمك بالطاقة، وارفع صحتك",
      desc: "خطط تغذية شخصية لتحسين الطاقة، وتوازن الوجبات، وتحسين الأداء بإرشاد مخصص.",
      features: [
        { title: "خطط وجبات مخصصة", desc: "مصممة لأهدافك وتفضيلاتك." },
        { title: "الترطيب ونمط الحياة", desc: "دعم صحة الجسم والعقل المثلى." }
      ],
      cta: "ابدأ رحلتك الغذائية",
    },
    services: {
      heading: "خدمات التغذية",
      desc: "استراتيجيات شخصية لنظام غذائي متوازن وصحة مثالية.",
      items: [
        { icon: "🥗", title: "خطط وجبات مخصصة", desc: "وجبات مصممة لجسمك وأهدافك." },
        { icon: "🍎", title: "تحسين العناصر الغذائية", desc: "تحسين الفيتامينات والمعادن والمغذيات." },
        { icon: "💧", title: "الترطيب ونمط الحياة", desc: "روتينات صحية للجسم والعقل." },
        { icon: "📊", title: "متابعة التقدم", desc: "مراقبة التحسن وتعديل الخطط." }
      ],
    },
    benefits: {
      heading: "لماذا التغذية الشخصية؟",
      items: [
        { icon: "⚡", title: "طاقة أفضل", desc: "زود جسمك بكفاءة لأداء يومي." },
        { icon: "🧠", title: "تركيز ذهني", desc: "دعم صفاء الذهن والتركيز بتغذية متوازنة." },
        { icon: "💪", title: "مناعة أقوى", desc: "تعزيز المناعة بعادات غذائية غنية." }
      ],
    },
    plans: {
      heading: "خطط التغذية",
      desc: "اختر خطة لتحسين صحتك ونمط حياتك.",
      items: [
        {
          title: "الخطة الأساسية",
          price: "$49/شهريًا",
          features: ["خطة وجبات مخصصة", "إرشاد أسبوعي", "دعم عبر البريد الإلكتروني"]
        },
        {
          title: "الخطة المتوازنة",
          price: "$79/شهريًا",
          features: ["كل ميزات الأساسية", "تدريب فردي", "نصائح نمط الحياة"]
        },
        {
          title: "الخطة المميزة",
          price: "$129/شهريًا",
          features: ["تدريب تغذية كامل", "متابعة يومية للوجبات", "دعم أولوية"]
        }
      ],
      button: "ابدأ الآن",
    },
    contact: {
      heading: "جاهز لتحويل تغذيتك؟",
      desc: "ابدأ رحلتك نحو صحة أفضل بإرشاد ودعم شخصي.",
      button: "اتصل بنا →",
    },
  },
  he: {
    hero: {
      heading: "תזונה מותאמת אישית",
      sub: "תן לגוף שלך דלק, שפר את הבריאות. תוכניות מותאמות למטרותיך ואורח החיים שלך.",
      button: "התחל את מסע התזונה שלך",
    },
    info: {
      heading: "תן לגוף שלך דלק, שפר את הבריאות",
      desc: "תוכניות תזונה מותאמות אישית לאנרגיה מיטבית, איזון ארוחות ושיפור ביצועים עם ליווי אישי.",
      features: [
        { title: "תוכניות ארוחות מותאמות", desc: "מותאם למטרותיך והעדפותיך." },
        { title: "הידרציה ואורח חיים", desc: "תמיכה בבריאות גוף ונפש מיטבית." }
      ],
      cta: "התחל את מסע התזונה שלך",
    },
    services: {
      heading: "שירותי תזונה",
      desc: "אסטרטגיות מותאמות לתזונה מאוזנת ובריאות מיטבית.",
      items: [
        { icon: "🥗", title: "תוכניות ארוחות מותאמות", desc: "ארוחות מותאמות לגוף ולמטרות שלך." },
        { icon: "🍎", title: "אופטימיזציה תזונתית", desc: "אופטימיזציה של ויטמינים, מינרלים ומקרו." },
        { icon: "💧", title: "הידרציה ואורח חיים", desc: "שגרות בריאות לגוף ולנפש." },
        { icon: "📊", title: "מעקב התקדמות", desc: "ניטור שיפורים והתאמת תוכניות." }
      ],
    },
    benefits: {
      heading: "למה תזונה מותאמת אישית?",
      items: [
        { icon: "⚡", title: "אנרגיה טובה יותר", desc: "תן לגוף שלך דלק יעיל לביצועים יומיים." },
        { icon: "🧠", title: "מיקוד מנטלי", desc: "תמוך בבהירות ומיקוד עם תזונה מאוזנת." },
        { icon: "💪", title: "חסינות חזקה יותר", desc: "שפר עמידות עם הרגלי אכילה עשירים." }
      ],
    },
    plans: {
      heading: "תוכניות תזונה",
      desc: "בחר תוכנית לשיפור הבריאות ואורח החיים שלך.",
      items: [
        {
          title: "תוכנית מתחילים",
          price: "$49/חודש",
          features: ["תוכנית ארוחות מותאמת", "הכוונה שבועית", "תמיכה במייל"]
        },
        {
          title: "תוכנית מאוזנת",
          price: "$79/חודש",
          features: ["כל תכונות המתחילים", "אימון אישי", "טיפים לאורח חיים"]
        },
        {
          title: "תוכנית פרימיום",
          price: "$129/חודש",
          features: ["אימון תזונה מלא", "מעקב יומי לארוחות", "תמיכה בעדיפות"]
        }
      ],
      button: "התחל עכשיו",
    },
    contact: {
      heading: "מוכן לשנות את התזונה שלך?",
      desc: "התחל את המסע לבריאות טובה יותר עם ליווי ותמיכה אישית.",
      button: "צור קשר →",
    },
  },
};

export default function PersonalizedNutrition() {
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
            src={nutritionImage}
            alt="Personalized Nutrition"
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
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section
        className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-fixed"
        style={{
          backgroundImage: `url(${nutritionImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-white/90 mb-6">
            {t.contact.desc}
          </p>
          <motion.button
            onClick={() => handleGetStarted("/contact")}
            className={themedClass(
              "px-6 py-3 rounded-lg font-semibold transition",
              "bg-purple-700 text-white hover:bg-purple-600",
              "bg-purple-600 text-white hover:bg-purple-700"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.contact.button}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}