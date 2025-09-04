import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/Services4.mp4";
import morningImage from "../assets/5.jpg";
import foodImage from "../assets/N.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Latest Articles",
      sub: "Explore tips for better mornings, mindful eating, and a healthier lifestyle.",
    },
    morning: {
      title: "5 Steps to a Healthier Morning Routine",
      desc:
        "Start your day with energy, focus, and positivity. Build habits like early hydration, mindful breathing, and light exercise to set the tone for success. Small intentional actions in the morning can boost mental clarity and physical well-being.",
      list: [
        "Drink a glass of water immediately after waking up",
        "Spend 5 minutes on deep breathing or meditation",
        "Do light stretching or yoga",
        "Eat a nutrient-rich breakfast",
        "Plan your top 3 priorities for the day",
      ],
    },
    food: {
      title: "Transform Your Relationship with Food",
      desc:
        "Eating mindfully can help you build a healthier relationship with food. Focus on portion control, savoring flavors, and balancing nutrition without guilt.",
      list: [
        "Eat slowly and chew thoroughly",
        "Listen to your body's hunger and fullness cues",
        "Choose whole, unprocessed foods",
        "Avoid distractions while eating",
        "Practice gratitude for every meal",
      ],
    },
    tipsHeading: "Quick Healthy Lifestyle Tips",
    tips: [
      {
        icon: "🥗",
        title: "Balanced Meals",
        desc: "Include protein, carbs, and healthy fats in every meal for sustained energy and better health.",
      },
      {
        icon: "💧",
        title: "Stay Hydrated",
        desc: "Drink at least 2–3 liters of water daily to maintain hydration and support your body's functions.",
      },
      {
        icon: "🏃",
        title: "Move Daily",
        desc: "Even a simple 20-minute walk can improve your mood, boost energy, and keep you active.",
      },
      {
        icon: "🧘",
        title: "Mindful Moments",
        desc: "Spend 5–10 minutes daily on mindfulness or meditation to reduce stress and improve focus.",
      },
      {
        icon: "😴",
        title: "Rest Well",
        desc: "Get 7–8 hours of quality sleep every night to recharge your body and mind.",
      },
    ],
  },
  ar: {
    hero: {
      heading: "أحدث المقالات",
      sub: "اكتشف نصائح لصباح أفضل، وتناول الطعام بوعي، ونمط حياة أكثر صحة.",
    },
    morning: {
      title: "5 خطوات لروتين صباحي أكثر صحة",
      desc:
        "ابدأ يومك بالطاقة والتركيز والإيجابية. أنشئ عادات مثل الترطيب المبكر، والتنفس الواعي، والتمارين الخفيفة لتحديد نغمة النجاح. يمكن أن تعزز الإجراءات الصغيرة في الصباح الوضوح الذهني والصحة الجسدية.",
      list: [
        "اشرب كوب ماء فور الاستيقاظ",
        "اقضِ 5 دقائق في التنفس العميق أو التأمل",
        "مارس تمارين التمدد أو اليوغا الخفيفة",
        "تناول إفطار غني بالعناصر الغذائية",
        "خطط لأهم 3 أولويات ليومك",
      ],
    },
    food: {
      title: "غيّر علاقتك مع الطعام",
      desc:
        "تناول الطعام بوعي يساعدك على بناء علاقة صحية مع الطعام. ركز على التحكم في الكميات، وتذوق النكهات، وتحقيق التوازن الغذائي بدون شعور بالذنب.",
      list: [
        "تناول الطعام ببطء وامضغ جيدًا",
        "استمع لإشارات الجوع والشبع في جسمك",
        "اختر الأطعمة الكاملة غير المصنعة",
        "تجنب المشتتات أثناء تناول الطعام",
        "مارس الامتنان مع كل وجبة",
      ],
    },
    tipsHeading: "نصائح سريعة لنمط حياة صحي",
    tips: [
      {
        icon: "🥗",
        title: "وجبات متوازنة",
        desc: "أضف البروتين والكربوهيدرات والدهون الصحية لكل وجبة لطاقة وصحة أفضل.",
      },
      {
        icon: "💧",
        title: "حافظ على الترطيب",
        desc: "اشرب 2–3 لترات ماء يوميًا للحفاظ على الترطيب ودعم وظائف الجسم.",
      },
      {
        icon: "🏃",
        title: "تحرك يوميًا",
        desc: "حتى المشي البسيط لمدة 20 دقيقة يحسن المزاج ويزيد النشاط.",
      },
      {
        icon: "🧘",
        title: "لحظات تأمل",
        desc: "خصص 5–10 دقائق يوميًا للتأمل أو اليقظة لتقليل التوتر وزيادة التركيز.",
      },
      {
        icon: "😴",
        title: "نوم جيد",
        desc: "احصل على 7–8 ساعات نوم جيد كل ليلة لاستعادة نشاط الجسم والعقل.",
      },
    ],
  },
  he: {
    hero: {
      heading: "המאמרים האחרונים",
      sub: "גלה טיפים לבוקר טוב יותר, אכילה מודעת ואורח חיים בריא יותר.",
    },
    morning: {
      title: "5 צעדים לבוקר בריא יותר",
      desc:
        "התחל את היום באנרגיה, מיקוד וחיוביות. בנה הרגלים כמו שתייה מוקדמת, נשימה מודעת ופעילות גופנית קלה כדי להבטיח הצלחה. פעולות קטנות בבוקר משפרות את הבהירות המנטלית והבריאות הגופנית.",
      list: [
        "שתה כוס מים מיד לאחר ההתעוררות",
        "הקדש 5 דקות לנשימה עמוקה או מדיטציה",
        "בצע מתיחות קלות או יוגה",
        "אכול ארוחת בוקר עשירה בערכים תזונתיים",
        "תכנן את 3 המשימות החשובות שלך ליום",
      ],
    },
    food: {
      title: "שנה את היחס שלך לאוכל",
      desc:
        "אכילה מודעת עוזרת לבנות יחס בריא לאוכל. התמקד בשליטה בכמויות, הנאה מהטעמים ואיזון תזונתי ללא רגשות אשמה.",
      list: [
        "אכול לאט ולעס היטב",
        "הקשב לאותות רעב ושובע של הגוף",
        "בחר מזון מלא ולא מעובד",
        "הימנע מהסחות דעת בזמן האכילה",
        "הכרת תודה על כל ארוחה",
      ],
    },
    tipsHeading: "טיפים מהירים לאורח חיים בריא",
    tips: [
      {
        icon: "🥗",
        title: "ארוחות מאוזנות",
        desc: "שלב חלבון, פחמימות ושומנים בריאים בכל ארוחה לאנרגיה ובריאות טובה.",
      },
      {
        icon: "💧",
        title: "הישאר רווי",
        desc: "שתה לפחות 2–3 ליטר מים ביום לשמירה על רוויה ותפקוד תקין של הגוף.",
      },
      {
        icon: "🏃",
        title: "תנועה יומית",
        desc: "גם הליכה פשוטה של 20 דקות תשפר את מצב הרוח ותשמור עליך פעיל.",
      },
      {
        icon: "🧘",
        title: "רגעי מיינדפולנס",
        desc: "הקדש 5–10 דקות ביום למיינדפולנס או מדיטציה להפחתת לחץ ושיפור הריכוז.",
      },
      {
        icon: "😴",
        title: "שינה טובה",
        desc: "קבל 7–8 שעות שינה איכותית בכל לילה לטעינת הגוף והנפש.",
      },
    ],
  },
};

export default function ArticlesPage() {
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

  return (
    <div
      className={themedClass(
        "transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-900"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-6 text-purple-400">
            {t.hero.heading}
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            {t.hero.sub}
          </p>
        </motion.div>
      </section>

      {/* Article 1: Morning Routine */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 rounded-2xl shadow-xl text-white mb-10"
        initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <img
          src={morningImage}
          alt="Morning Routine"
          className="rounded-xl shadow-lg w-full md:w-1/2 h-[500px] object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-purple-200 hover:text-purple-50 transition-colors duration-300">
            {t.morning.title}
          </h2>
          <p className="leading-relaxed text-justify">
            {t.morning.desc}
          </p>
          <ul className="list-disc ml-6 space-y-2">
            {t.morning.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Article 2: Mindful Eating */}
      <motion.section
        className="flex flex-col md:flex-row-reverse items-center gap-10 px-6 py-16 max-w-6xl mx-auto bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 rounded-2xl shadow-xl text-white mb-10"
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <img
          src={foodImage}
          alt="Mindful Eating"
          className="rounded-xl shadow-lg w-full md:w-1/2 h-[500px] object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-purple-100 hover:text-purple-50 transition-colors duration-300">
            {t.food.title}
          </h2>
          <p className="leading-relaxed text-justify">
            {t.food.desc}
          </p>
          <ul className="list-disc ml-6 space-y-2">
            {t.food.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Healthy Lifestyle Tips */}
      <motion.section
        className="py-16 px-4 text-center w-full bg-purple-50 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className="text-4xl font-bold mb-12 text-purple-700">
          {t.tipsHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.tips.map((tip, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              whileHover={{ rotateY: 180 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-6xl mb-4">{tip.icon}</span>
                <h3 className="text-xl font-bold mb-2 text-purple-700">{tip.title}</h3>
                <p className="text-gray-700">{tip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}