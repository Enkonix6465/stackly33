import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaMedal, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom";
import blogVideo from "../assets/blogVideo.mp4";
import image from "../assets/B2.jpg";
import image2 from "../assets/BG1.jpg";
import image3 from "../assets/YM.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Health & Wellness Blog",
      sub: "Explore articles, tips, and guides to improve your health and lifestyle.",
      explore: "Explore Blogs",
    },
    routine: {
      heading: "Daily Balance Routine",
      sub: "Flow through your day in four mindful rhythms — from sunrise to night.",
      steps: [
        {
          title: "Morning Rise",
          description: "Wake with gratitude and stretches to activate fresh energy.",
        },
        {
          title: "Midday Focus",
          description: "Take a pause, breathe deeply, and recharge your mental clarity.",
        },
        {
          title: "Evening Calm",
          description: "Reflect and release tension with light journaling or meditation.",
        },
        {
          title: "Night Reset",
          description: "Disconnect, rest fully, and prepare your body for tomorrow.",
        },
      ],
    },
    featured: {
      heading: "Featured Wellness Reads ✨",
      articles: [
        {
          title: "Unlock Calm: A Beginner’s Guide to Daily Meditation",
          desc: "Learn how short mindful breaks can reset your energy and improve focus all day long.",
          img: image,
          link: "/article",
          button: "Read More",
        },
        {
          title: "Recharge Naturally: Evening Rituals That Work",
          desc: "Explore simple habits that prepare your body for deep, restorative sleep.",
          img: image2,
          link: "/article",
          button: "Read More →",
        },
        {
          title: "Mindful Eating: Transform Every Meal",
          desc: "Shift your relationship with food and discover the joy of eating with awareness.",
          img: image3,
          link: "/article",
          button: "Read More →",
        },
      ],
    },
    tips: {
      heading: "Expert Advice",
      cards: [
        {
          icon: "🥗",
          title: "Nutrition Tips",
          desc: "Learn from certified dietitians about balanced meals. Focus on whole foods, proper hydration, and balanced portions for a healthy lifestyle.",
        },
        {
          icon: "🧘‍♀️",
          title: "Mental Health",
          desc: "Advice from therapists to manage stress and anxiety. Practice mindfulness, journaling, and self-care to maintain emotional well-being.",
        },
        {
          icon: "🏋️‍♂️",
          title: "Fitness Guidance",
          desc: "Workout routines and tips from professional trainers. Incorporate strength, cardio, and flexibility exercises to stay active and energized.",
        },
      ],
    },
    newsletter: {
      heading: "Join Our Wellness Circle",
      desc: "Get exclusive wellness tips, mindful routines, and healthy lifestyle guides delivered directly to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe Now",
    },
    routineStepsIcons: [
      <FaHandsHelping size={40} />,
      <FaMedal size={40} />,
      <FaRunning size={40} />,
      <FaMedal size={40} />,
    ],
  },
  ar: {
    hero: {
      heading: "مدونة الصحة والعافية",
      sub: "استكشف مقالات ونصائح وأدلة لتحسين صحتك ونمط حياتك.",
      explore: "استكشف المدونات",
    },
    routine: {
      heading: "روتين التوازن اليومي",
      sub: "مرّن يومك في أربع إيقاعات واعية — من الشروق حتى الليل.",
      steps: [
        {
          title: "بداية الصباح",
          description: "استيقظ بالامتنان وتمارين التمدد لتنشيط الطاقة.",
        },
        {
          title: "تركيز منتصف اليوم",
          description: "خذ استراحة، وتنفس بعمق، واشحن صفاء ذهنك.",
        },
        {
          title: "هدوء المساء",
          description: "تأمل وأطلق التوتر مع كتابة يوميات أو التأمل الخفيف.",
        },
        {
          title: "إعادة ضبط الليل",
          description: "افصل الأجهزة، واسترح جيدًا، وجهز جسمك للغد.",
        },
      ],
    },
    featured: {
      heading: "مقالات مميزة ✨",
      articles: [
        {
          title: "دليل المبتدئين للتأمل اليومي",
          desc: "تعلم كيف يمكن لفترات التأمل القصيرة إعادة ضبط طاقتك وتحسين تركيزك طوال اليوم.",
          img: image,
          link: "/article",
          button: "اقرأ المزيد",
        },
        {
          title: "استعادة النشاط: طقوس المساء الفعالة",
          desc: "اكتشف عادات بسيطة تهيئ جسمك لنوم عميق ومريح.",
          img: image2,
          link: "/article",
          button: "اقرأ المزيد →",
        },
        {
          title: "الأكل الواعي: غيّر كل وجبة",
          desc: "غيّر علاقتك مع الطعام واكتشف متعة الأكل بوعي.",
          img: image3,
          link: "/article",
          button: "اقرأ المزيد →",
        },
      ],
    },
    tips: {
      heading: "نصائح الخبراء",
      cards: [
        {
          icon: "🥗",
          title: "نصائح التغذية",
          desc: "تعلم من خبراء التغذية حول الوجبات المتوازنة. ركز على الأطعمة الكاملة، والترطيب الجيد، والكميات المناسبة لنمط حياة صحي.",
        },
        {
          icon: "🧘‍♀️",
          title: "الصحة النفسية",
          desc: "نصائح من المعالجين لإدارة التوتر والقلق. مارس التأمل والكتابة والرعاية الذاتية للحفاظ على الصحة العاطفية.",
        },
        {
          icon: "🏋️‍♂️",
          title: "إرشادات اللياقة",
          desc: "تمارين ونصائح من مدربين محترفين. أضف القوة، والكارديو، والمرونة للبقاء نشيطًا ومفعمًا بالطاقة.",
        },
      ],
    },
    newsletter: {
      heading: "انضم لدائرة العافية",
      desc: "احصل على نصائح حصرية وروتينات واعية وأدلة نمط حياة صحي مباشرة إلى بريدك.",
      placeholder: "أدخل بريدك الإلكتروني",
      button: "اشترك الآن",
    },
    routineStepsIcons: [
      <FaHandsHelping size={40} />,
      <FaMedal size={40} />,
      <FaRunning size={40} />,
      <FaMedal size={40} />,
    ],
  },
  he: {
    hero: {
      heading: "בלוג הבריאות והרווחה",
      sub: "גלה מאמרים, טיפים ומדריכים לשיפור הבריאות ואורח החיים שלך.",
      explore: "גלה בלוגים",
    },
    routine: {
      heading: "שגרת איזון יומית",
      sub: "הזרם את יומך בארבעה קצבים מודעים — מהזריחה ועד הלילה.",
      steps: [
        {
          title: "בוקר מלא תודה",
          description: "התעורר בהכרת תודה ומתיחות להפעלת אנרגיה חדשה.",
        },
        {
          title: "פוקוס בצהריים",
          description: "עצור, נשום עמוק, וטען את הבהירות המנטלית שלך.",
        },
        {
          title: "רוגע בערב",
          description: "הרהר ושחרר מתחים עם כתיבה או מדיטציה קלה.",
        },
        {
          title: "איפוס בלילה",
          description: "התנתק, תנוח היטב, והכן את הגוף למחר.",
        },
      ],
    },
    featured: {
      heading: "מאמרים נבחרים ✨",
      articles: [
        {
          title: "מדריך למתחילים למדיטציה יומית",
          desc: "גלה כיצד הפסקות מודעות קצרות יכולות לחדש אנרגיה ולשפר את הריכוז לאורך כל היום.",
          img: image,
          link: "/article",
          button: "קרא עוד",
        },
        {
          title: "להיטען מחדש: טקסי ערב שעובדים",
          desc: "גלה הרגלים פשוטים שמכינים את הגוף לשינה עמוקה ומשקמת.",
          img: image2,
          link: "/article",
          button: "קרא עוד →",
        },
        {
          title: "אכילה מודעת: שנה כל ארוחה",
          desc: "שנה את היחס שלך לאוכל וגלה את שמחת האכילה במודעות.",
          img: image3,
          link: "/article",
          button: "קרא עוד →",
        },
      ],
    },
    tips: {
      heading: "עצות מומחים",
      cards: [
        {
          icon: "🥗",
          title: "טיפים לתזונה",
          desc: "למד מדיאטנים מוסמכים על ארוחות מאוזנות. התמקד במזון מלא, שתייה מספקת וכמויות מאוזנות לאורח חיים בריא.",
        },
        {
          icon: "🧘‍♀️",
          title: "בריאות נפשית",
          desc: "עצות ממטפלים לניהול לחץ וחרדה. תרגל מיינדפולנס, כתיבה וטיפוח עצמי לשמירה על רווחה רגשית.",
        },
        {
          icon: "🏋️‍♂️",
          title: "הכוונה לפעילות גופנית",
          desc: "שגרות אימון וטיפים ממאמנים מקצועיים. שלב כוח, אירובי וגמישות כדי להישאר פעיל ומלא אנרגיה.",
        },
      ],
    },
    newsletter: {
      heading: "הצטרף למעגל הבריאות שלנו",
      desc: "קבל טיפים בלעדיים, שגרות מודעות ומדריכי אורח חיים בריא ישירות למייל שלך.",
      placeholder: "הזן את האימייל שלך",
      button: "הירשם עכשיו",
    },
    routineStepsIcons: [
      <FaHandsHelping size={40} />,
      <FaMedal size={40} />,
      <FaRunning size={40} />,
      <FaMedal size={40} />,
    ],
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Blog = () => {
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
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
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

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const isRTL = language === "ar" || language === "he";
  const t = translations[language];

  return (
    <div
      className={themedClass(
        "w-full overflow-x-hidden min-h-screen transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white shadow hover:bg-purple-700 transition"
        >
          {theme === "light"
            ? "Dark Mode"
            : "Light Mode"}
        </button>
      </div>

      {/* ===== 1. HERO SECTION ===== */}
      <section className="relative h-screen w-full flex items-center justify-center" dir={isRTL ? "rtl" : "ltr"}>
        <video
          src={blogVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col justify-center items-center h-full text-center text-white px-6 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              {t.hero.heading}
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {t.hero.sub}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to="/blogs"
              className="px-8 py-4 rounded-full font-semibold shadow-xl 
                       text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700
                       hover:from-purple-600 hover:to-purple-800 transition duration-300"
            >
              {t.hero.explore}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== 2. FEATURED DAILY ROUTINE ===== */}
      <motion.section
        className={themedClass(
          "relative w-full py-16 text-center overflow-hidden",
          "bg-gradient-to-b from-[#1A1028] via-[#241634] to-[#1A1028]",
          "bg-gradient-to-b from-purple-50 via-purple-100 to-white"
        )}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Background blobs */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-fuchsia-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div className="mb-12" variants={item}>
          <h2
            className={themedClass(
              "text-6xl font-extrabold tracking-tight",
              "text-purple-300 drop-shadow-md",
              "text-purple-700"
            )}
          >
            {t.routine.heading}
          </h2>
          <p
            className={themedClass(
              "mt-3 text-2xl",
              "text-purple-200",
              "text-gray-700"
            )}
          >
            {t.routine.sub}
          </p>
        </motion.div>

        <div className="relative flex flex-col md:flex-row md:justify-center items-center gap-4 w-full px-2 md:px-0">
          {t.routine.steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center justify-center text-center px-10 py-14 rounded-full shadow-2xl text-white bg-gradient-to-br ${
                [
                  "from-purple-500 to-pink-500",
                  "from-pink-500 to-fuchsia-500",
                  "from-indigo-500 to-purple-500",
                  "from-violet-500 to-purple-600",
                ][index]
              } w-80 h-80`}
              animate={{
                y: [0, index % 2 === 0 ? -20 : 20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold mb-4">{step.title}</h3>
              <p className="text-xl opacity-90 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== 3. FEATURED ARTICLES ===== */}
      <motion.section
        className={themedClass(
          "relative w-full py-24 px-6 overflow-hidden",
          "bg-gradient-to-b from-[#140b1f] via-[#1e1230] to-[#140b1f]"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-20 relative z-10 text-purple-300 drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.featured.heading}
        </motion.h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
          {/* Featured Large Article */}
          <motion.div
            className="md:col-span-2 group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={t.featured.articles[0].img}
              alt="featured"
              className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-2xl">
                {t.featured.articles[0].title}
              </h3>
              <p className="text-purple-200 mb-4 max-w-xl drop-shadow-lg">
                {t.featured.articles[0].desc}
              </p>
              <Link
                to={t.featured.articles[0].link}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform inline-block w-max"
              >
                {t.featured.articles[0].button}
              </Link>
            </div>
          </motion.div>

          {/* Side Articles */}
          <div className="flex flex-col gap-10">
            {t.featured.articles.slice(1).map((article, idx) => (
              <motion.div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xl bg-black/80 backdrop-blur-md border border-purple-500/40"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 + idx * 0.1 }}
              >
                <img
                  src={article.img}
                  alt={`article ${idx + 2}`}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-100 mb-2 drop-shadow-lg">
                    {article.title}
                  </h3>
                  <p className="text-purple-200 mb-4 drop-shadow">
                    {article.desc}
                  </p>
                  <Link
                    to={article.link}
                    className="text-purple-300 hover:text-pink-400 font-semibold transition-colors"
                  >
                    {article.button}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== 4. WELLNESS TIPS ===== */}
      <motion.section
        className={themedClass(
          "w-full py-32 px-6 relative overflow-hidden transition-colors duration-500",
          "bg-black",
          "bg-gradient-to-b from-purple-50 via-purple-100 to-white"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Background animated blobs */}
        <motion.div
          className={themedClass(
            "absolute -top-40 -left-40 w-128 h-128 rounded-full blur-3xl",
            "bg-purple-700/30",
            "bg-purple-400/20"
          )}
          animate={{ y: [0, 60, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={themedClass(
            "absolute -bottom-40 -right-40 w-128 h-128 rounded-full blur-3xl",
            "bg-pink-600/20",
            "bg-pink-300/20"
          )}
          animate={{ y: [0, -60, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <h2
          className={themedClass(
            "text-4xl md:text-5xl font-extrabold mb-20 text-center relative z-10 drop-shadow-xl",
            "text-purple-300",
            "text-purple-900"
          )}
        >
          {t.tips.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto relative z-10">
          {t.tips.cards.map((tip, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.06 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Card */}
              <div
                className={themedClass(
                  "relative p-12 flex flex-col items-center justify-center rounded-tl-[80px] rounded-br-[60px] shadow-2xl transition-all duration-500 w-104 h-96",
                  "bg-gradient-to-br from-purple-700 to-pink-600 hover:shadow-[0_20px_60px_rgba(128,0,128,0.6)]",
                  "bg-gradient-to-br from-purple-200 to-pink-300 hover:shadow-[0_20px_40px_rgba(200,150,255,0.4)]"
                )}
              >
                {/* Floating icon */}
                <motion.div
                  className="text-7xl mb-6"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {tip.icon}
                </motion.div>

                <h3
                  className={themedClass(
                    "text-3xl font-bold mb-4 text-center drop-shadow-lg",
                    "text-white",
                    "text-purple-900"
                  )}
                >
                  {tip.title}
                </h3>
                <p
                  className={themedClass(
                    "text-center italic text-lg",
                    "text-white/90",
                    "text-purple-800"
                  )}
                >
                  {tip.desc}
                </p>

                {/* Animated decorative circles */}
                <motion.div
                  className={themedClass(
                    "absolute w-28 h-28 rounded-full top-[-2rem] left-[-2rem] blur-xl",
                    "bg-white/20",
                    "bg-purple-200/20"
                  )}
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className={themedClass(
                    "absolute w-20 h-20 rounded-full bottom-[-1.5rem] right-[-1.5rem] blur-lg",
                    "bg-white/10",
                    "bg-purple-100/20"
                  )}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== 5. NEWSLETTER ===== */}
      <motion.section
        className="w-full py-32 px-6 text-center relative overflow-hidden"
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
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Animated background blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.newsletter.heading}
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg md:text-xl italic drop-shadow-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.newsletter.desc}
          </motion.p>

          {/* Input and Button */}
          <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-xl mx-auto">
            <motion.input
              type="email"
              placeholder={t.newsletter.placeholder}
              className="p-4 rounded-full w-full sm:flex-1 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(128,0,128,0.3)" }}
            />

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(128,0,128,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-semibold mt-4 sm:mt-0 inline-block text-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {t.newsletter.button}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;