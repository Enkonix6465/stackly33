import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../assets/YM.jpg";
import backgroundImage2 from "../assets/NP1.jpg";
import backgroundImage3 from "../assets/health.jpg";
import backgroundImage4 from "../assets/FC.jpg";
import backgroundImage5 from "../assets/HD.jpg";
import backgroundImage6 from "../assets/HD1.jpg";
import image8 from "../assets/B2.jpg";
import vedio from "../assets/home1.mp4";
import image from "../assets/BG1.jpg";
import image7 from "../assets/HW1.jpg";
import image2 from "../assets/5.jpg";

// Translations for all content
const translations = {
  en: {
    hero: {
      heading: "Welcome to Health & Wellness",
      sub: "Your journey to a healthier lifestyle starts here",
      knowMore: "Know More",
    },
    about: {
      heading: "HEALTH & WELLNESS",
      title: "START YOUR HEALTHY JOURNEY NOW",
      desc: "Achieve balance in body, mind, and spirit. Our programs combine personalized nutrition, fitness.",
      list: [
        "✔ Customized fitness & diet plans",
        "✔ Expert coaching for long-term health",
      ],
      getStarted: "Get Started",
    },
    testimonials: {
      heading: "What People Are Saying",
      clients: [
        {
          name: "Sarah Johnson",
          position: "Fitness Enthusiast",
          testimonial:
            "This wellness journey completely changed my life! I feel stronger, healthier, and more confident every day.",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Michael Lee",
          position: "Entrepreneur",
          testimonial:
            "A game changer! Their holistic approach helped me balance my work stress and maintain a healthy lifestyle.",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Emma Davis",
          position: "Teacher",
          testimonial:
            "I love the mindfulness sessions. It helped me gain clarity and peace. Highly recommend their programs!",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
      ],
    },
    blog: {
      inspiration: "Inspiration & Wellness",
      heading: "Latest from Our Blog",
      desc:
        "Discover practical tips and inspiring ideas to help you live a more mindful, balanced, and healthy life. From holistic wellness and stress management strategies to simple lifestyle changes, our blog is designed to empower you with the knowledge and motivation you need to thrive every day. Mindfulness is not about escaping reality but about fully engaging with it. By being present, you develop a deeper awareness of your thoughts.",
      explore: "Explore Blog",
    },
    services: {
      heading: "Our Wellness Services",
      cards: [
        {
          title: "Yoga & Meditation",
          desc: "Find inner peace and flexibility with guided yoga sessions.",
          more: "Discover more about Yoga & Meditation!",
          learn: "Learn More",
        },
        {
          title: "Nutrition Plans",
          desc: "Personalized diets designed by expert nutritionists.",
          more: "Discover more about Nutrition Plans!",
          learn: "Learn More",
        },
        {
          title: "Mental Health Support",
          desc: "Support and tools to improve mindfulness and emotional well-being.",
          more: "Discover more about Mental Health Support!",
          learn: "Learn More",
        },
        {
          title: "Fitness Coaching",
          desc: "Custom workouts to strengthen your body and mind.",
          more: "Discover more about Fitness Coaching!",
          learn: "Learn More",
        },
        {
          title: "Detox Programs",
          desc: "Cleanse your body and boost energy levels.",
          more: "Discover more about Detox Programs!",
          learn: "Learn More",
        },
        {
          title: "Stress Relief",
          desc: "Relaxation techniques and mindfulness practices.",
          more: "Discover more about Stress Relief!",
          learn: "Learn More",
        },
      ],
    },
    contact: {
      heading: "Ready to Start Your Journey?",
      desc: "Have questions or need guidance on your wellness journey? Reach out to us today.",
      button: "Contact Us",
    },
    themeToggle: {
      dark: "Dark Mode",
      light: "Light Mode",
    },
    achievements: [
      { number: 500, label: "Happy Clients" },
      { number: 120, label: "Wellness Programs" },
      { number: 50, label: "Expert Trainers" },
      { number: 10, label: "Years of Experience" },
    ],
  },
  ar: {
    hero: {
      heading: "مرحبًا بكم في الصحة والعافية",
      sub: "رحلتك نحو أسلوب حياة أكثر صحة تبدأ هنا",
      knowMore: "اعرف المزيد",
    },
    about: {
      heading: "الصحة والعافية",
      title: "ابدأ رحلتك الصحية الآن",
      desc: "حقق التوازن بين الجسم والعقل والروح. برامجنا تجمع بين التغذية الشخصية واللياقة البدنية.",
      list: [
        "✔ خطط لياقة وتغذية مخصصة",
        "✔ تدريب خبراء لصحة طويلة الأمد",
      ],
      getStarted: "ابدأ الآن",
    },
    testimonials: {
      heading: "ماذا يقول الناس",
      clients: [
        {
          name: "سارة جونسون",
          position: "محبة اللياقة",
          testimonial:
            "هذه الرحلة الصحية غيرت حياتي تمامًا! أشعر بالقوة والصحة والثقة كل يوم.",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "مايكل لي",
          position: "رائد أعمال",
          testimonial:
            "تغيير كبير! النهج الشامل ساعدني على تحقيق التوازن بين ضغط العمل والحفاظ على نمط حياة صحي.",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "إيما ديفيس",
          position: "معلمة",
          testimonial:
            "أحب جلسات اليقظة الذهنية. ساعدتني على اكتساب الوضوح والسلام. أنصح ببرامجهم بشدة!",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
      ],
    },
    blog: {
      inspiration: "إلهام وعافية",
      heading: "آخر ما في مدونتنا",
      desc:
        "اكتشف نصائح عملية وأفكار ملهمة تساعدك على عيش حياة أكثر توازنًا وصحة. من استراتيجيات العافية الشاملة وإدارة التوتر إلى تغييرات بسيطة في نمط الحياة، تهدف مدونتنا إلى تمكينك بالمعرفة والتحفيز للنجاح كل يوم. اليقظة ليست هروبًا من الواقع بل انخراطًا كاملًا فيه. من خلال الحضور، تطور وعيًا أعمق بأفكارك.",
      explore: "استكشف المدونة",
    },
    services: {
      heading: "خدمات العافية لدينا",
      cards: [
        {
          title: "يوغا وتأمل",
          desc: "ابحث عن السلام الداخلي والمرونة مع جلسات اليوغا الموجهة.",
          more: "اكتشف المزيد عن اليوغا والتأمل!",
          learn: "تعرف أكثر",
        },
        {
          title: "خطط التغذية",
          desc: "أنظمة غذائية شخصية صممها خبراء التغذية.",
          more: "اكتشف المزيد عن خطط التغذية!",
          learn: "تعرف أكثر",
        },
        {
          title: "دعم الصحة النفسية",
          desc: "دعم وأدوات لتحسين اليقظة والرفاهية العاطفية.",
          more: "اكتشف المزيد عن دعم الصحة النفسية!",
          learn: "تعرف أكثر",
        },
        {
          title: "تدريب اللياقة البدنية",
          desc: "تمارين مخصصة لتقوية الجسم والعقل.",
          more: "اكتشف المزيد عن تدريب اللياقة البدنية!",
          learn: "تعرف أكثر",
        },
        {
          title: "برامج التخلص من السموم",
          desc: "نظف جسمك وزد من مستويات الطاقة.",
          more: "اكتشف المزيد عن برامج التخلص من السموم!",
          learn: "تعرف أكثر",
        },
        {
          title: "تخفيف التوتر",
          desc: "تقنيات الاسترخاء وممارسات اليقظة الذهنية.",
          more: "اكتشف المزيد عن تخفيف التوتر!",
          learn: "تعرف أكثر",
        },
      ],
    },
    contact: {
      heading: "جاهز لبدء رحلتك؟",
      desc: "هل لديك أسئلة أو تحتاج إلى إرشاد في رحلتك الصحية؟ تواصل معنا اليوم.",
      button: "اتصل بنا",
    },
    themeToggle: {
      dark: "الوضع الداكن",
      light: "الوضع الفاتح",
    },
    achievements: [
      { number: 500, label: "عملاء سعداء" },
      { number: 120, label: "برامج العافية" },
      { number: 50, label: "مدربون خبراء" },
      { number: 10, label: "سنوات الخبرة" },
    ],
  },
  he: {
    hero: {
      heading: "ברוכים הבאים לבריאות ורווחה",
      sub: "המסע שלך לאורח חיים בריא יותר מתחיל כאן",
      knowMore: "למידע נוסף",
    },
    about: {
      heading: "בריאות ורווחה",
      title: "התחל את המסע הבריא שלך עכשיו",
      desc: "השג איזון גוף, נפש ורוח. התוכניות שלנו משלבות תזונה אישית וכושר.",
      list: [
        "✔ תוכניות כושר ותזונה מותאמות אישית",
        "✔ אימון מומחים לבריאות ארוכת טווח",
      ],
      getStarted: "התחל עכשיו",
    },
    testimonials: {
      heading: "מה אנשים אומרים",
      clients: [
        {
          name: "שרה ג'ונסון",
          position: "חובבת כושר",
          testimonial:
            "המסע הזה שינה את חיי! אני מרגישה חזקה, בריאה ובטוחה בעצמי כל יום.",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "מייקל לי",
          position: "יזם",
          testimonial:
            "שינוי אמיתי! הגישה ההוליסטית עזרה לי לאזן את לחץ העבודה ולשמור על אורח חיים בריא.",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "אמה דיוויס",
          position: "מורה",
          testimonial:
            "אני אוהבת את מפגשי המיינדפולנס. זה עזר לי להשיג בהירות ושלווה. ממליצה בחום!",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
        },
      ],
    },
    blog: {
      inspiration: "השראה ורווחה",
      heading: "העדכונים האחרונים בבלוג",
      desc:
        "גלה טיפים מעשיים ורעיונות מעוררי השראה שיעזרו לך לחיות חיים מאוזנים ובריאים יותר. מהאסטרטגיות לרווחה הוליסטית וניהול לחץ ועד שינויים פשוטים באורח החיים, הבלוג שלנו נועד להעצים אותך בידע ומוטיבציה להצליח כל יום. מיינדפולנס אינו בריחה מהמציאות אלא מעורבות מלאה בה. בנוכחות, אתה מפתח מודעות עמוקה יותר למחשבותיך.",
      explore: "גלה את הבלוג",
    },
    services: {
      heading: "שירותי הרווחה שלנו",
      cards: [
        {
          title: "יוגה ומדיטציה",
          desc: "מצא שלווה פנימית וגמישות עם שיעורי יוגה מודרכים.",
          more: "גלה עוד על יוגה ומדיטציה!",
          learn: "למידע נוסף",
        },
        {
          title: "תוכניות תזונה",
          desc: "תזונה מותאמת אישית שנבנתה על ידי מומחים.",
          more: "גלה עוד על תוכניות תזונה!",
          learn: "למידע נוסף",
        },
        {
          title: "תמיכה בבריאות הנפש",
          desc: "תמיכה וכלים לשיפור מיינדפולנס ורווחה רגשית.",
          more: "גלה עוד על תמיכה בבריאות הנפש!",
          learn: "למידע נוסף",
        },
        {
          title: "אימון כושר",
          desc: "אימונים מותאמים לחיזוק הגוף והנפש.",
          more: "גלה עוד על אימון כושר!",
          learn: "למידע נוסף",
        },
        {
          title: "תוכניות ניקוי רעלים",
          desc: "נקה את הגוף והגבר את רמות האנרגיה.",
          more: "גלה עוד על תוכניות ניקוי רעלים!",
          learn: "למידע נוסף",
        },
        {
          title: "הפגת מתחים",
          desc: "טכניקות הרפיה ותרגולי מיינדפולנס.",
          more: "גלה עוד על הפגת מתחים!",
          learn: "למידע נוסף",
        },
      ],
    },
    contact: {
      heading: "מוכן להתחיל את המסע שלך?",
      desc: "יש לך שאלות או זקוק להכוונה במסע הבריאות שלך? צור קשר היום.",
      button: "צור קשר",
    },
    themeToggle: {
      dark: "מצב כהה",
      light: "מצב בהיר",
    },
    achievements: [
      { number: 500, label: "לקוחות מרוצים" },
      { number: 120, label: "תוכניות רווחה" },
      { number: 50, label: "מאמנים מומחים" },
      { number: 10, label: "שנות ניסיון" },
    ],
  },
};

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const Home2 = () => {
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

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  // Achievements animated counter
  const [counts, setCounts] = useState(translations[language].achievements.map(() => 0));
  useEffect(() => {
    const intervals = translations[language].achievements.map((item, index) => {
      const increment = Math.ceil(item.number / 100);
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < item.number) {
            newCounts[index] += increment;
            if (newCounts[index] > item.number) newCounts[index] = item.number;
          }
          return newCounts;
        });
      }, 20);
    });
    return () => intervals.forEach((i) => clearInterval(i));
  }, [language]);

  // Service images
  const serviceImages = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
  ];

  return (
    <div
      className={themedClass(
        "font-sans min-h-screen transition-colors duration-500",
        "bg-gray-900 text-gray-100",
        "bg-white text-gray-800"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Banner */}
      // ...existing code...
      {/* Hero Banner */}
      <section
        className={themedClass(
          "relative h-screen flex items-center justify-center",
          "bg-black",
          "bg-black"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <video
          src={vedio}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Use only a dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
        {/* Animated bubbles */}
        {[...Array(8)].map((_, i) => (
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
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          style={{ color: "#fff" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown"
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
            {translations[language].hero.heading}
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-6 animate-fadeInUp text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {translations[language].hero.sub}
          </motion.p>
          <motion.a
            href="/about"
            className={themedClass(
              "px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 animate-fadeInUp",
              "bg-purple-700 text-white hover:bg-purple-500",
              "bg-purple-500 text-white hover:bg-purple-700"
            )}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {translations[language].hero.knowMore}
          </motion.a>
        </div>
      </section>




      

      {/* About Us */}
     // ...existing code...
      {/* About Us */}
      <section
        className={`relative w-full py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden ${isRTL ? "rtl" : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-purple-800 dark:to-purple-900 transform -skew-y-6 origin-top-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="z-10"
            initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {translations[language].about.heading}
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              {translations[language].about.desc}
            </p>
            <ul className="list-disc pl-5 mb-8 space-y-2 text-gray-700 dark:text-gray-400">
              {translations[language].about.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link
              to="/about"
              className="px-6 py-3 rounded-lg shadow-md bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              {translations[language].about.getStarted}
            </Link>
          </motion.div>
          <motion.div
            className="flex gap-6 z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={image}
              alt="Activity"
              className="w-1/2 h-96 rounded-xl shadow-xl object-cover transform hover:scale-105 transition"
              whileHover={{ scale: 1.08, rotate: 2 }}
            />
            <motion.img
              src={image2}
              alt="Activity"
              className="w-1/2 h-96 rounded-xl shadow-xl object-cover transform hover:scale-105 transition"
              whileHover={{ scale: 1.08, rotate: -2 }}
            />
          </motion.div>
        </div>
      </section>







      {/* Testimonials */}
      <section
        className={themedClass(
          "w-full py-28 px-6 relative overflow-hidden",
          "bg-gray-900",
          "bg-purple-100"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2
          className={themedClass(
            "text-4xl font-extrabold text-center mb-16",
            "text-white",
            "text-purple-900"
          )}
        >
          {translations[language].testimonials.heading}
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {translations[language].testimonials.clients.map((client, i) => (
            <motion.div
              key={i}
              className={themedClass(
                "flex flex-col md:flex-row items-center gap-8 rounded-3xl p-8 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-purple-400/40",
                "bg-gray-900",
                "bg-white/70"
              )}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              dir={isRTL ? "rtl" : "ltr"}
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-purple-500">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="max-w-lg w-full text-center md:text-left">
                <p
                  className={themedClass(
                    "text-lg mb-4 italic",
                    "text-gray-300",
                    "text-gray-700"
                  )}
                >
                  “{client.testimonial}”
                </p>
                <h4
                  className={themedClass(
                    "text-xl font-semibold",
                    "text-white",
                    "text-purple-900"
                  )}
                >
                  {client.name}
                </h4>
                <span
                  className={themedClass(
                    "text-sm",
                    "text-gray-400",
                    "text-gray-600"
                  )}
                >
                  {client.position}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section
        className={`py-24 px-6 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#1E2A38] via-[#2C2250] to-purple-900 text-white"
            : "bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-900"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Decorative Circles */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-20 h-20 bg-purple-300 rounded-full opacity-40 animate-pulse"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left flex flex-col justify-center"
            initial={{ x: isRTL ? 60 : -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            <span className="inline-block text-purple-500 font-semibold text-sm uppercase mb-3">
              {translations[language].blog.inspiration}
            </span>
            <h2 className="text-5xl font-bold mb-6 leading-snug animate-fadeInUp">
              {translations[language].blog.heading}
            </h2>
            <p className="mb-7 text-lg leading-relaxed text-justify max-w-lg">
              {translations[language].blog.desc}
            </p>
            <a
              href="/blog"
              className="px-8 py-4 rounded-lg font-semibold shadow-lg transition transform hover:scale-105 inline-block bg-purple-700 text-white hover:bg-purple-500"
            >
              {translations[language].blog.explore}
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 rounded-full w-[480px] h-[480px] -z-10 ${
                theme === "dark"
                  ? "bg-gradient-to-tr from-purple-900 to-purple-700"
                  : "bg-gradient-to-tr from-purple-50 to-purple-100"
              }`}
            ></div>
            {/* Image with Hover Effects */}
            <img
              src={image}
              alt="Blog Preview"
              className="rounded-full w-[420px] h-[420px] object-cover shadow-2xl z-10 transform transition duration-500 hover:scale-110 hover:rotate-2 hover:shadow-purple-500/50"
            />
            {/* Decorative Circle */}
            <motion.div
              className="absolute top-10 right-0 w-28 h-28 bg-purple-200 rounded-full opacity-30 animate-bounce"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={`py-24 px-6 relative ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-purple-50 text-gray-900"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h2 className="text-4xl font-extrabold text-center mb-16 animate-fadeInDown">
          {translations[language].services.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations[language].services.cards.map((service, i) => {
            const desc = i === 4 ? service.desc + " extra words" : service.desc;

            return (
              <motion.div
                key={i}
                className="relative rounded-[25px] overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  className="w-full h-72 object-cover rounded-t-[25px]"
                />
                <div
                  className={`p-6 ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-base mb-2">{desc}</p>
                  <span className="text-sm font-medium text-purple-600">{service.more}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Achievements Section */}
      <section
        className="w-full py-16 px-6 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:to-gray-800"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {translations[language].achievements.map((item, i) => (
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
                <motion.h3
                  className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  {counts[i]}+
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium text-center">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="relative w-full py-24 px-6 text-center overflow-hidden transition-colors duration-500"
        style={{
          backgroundImage: `url(${backgroundImage6})`,
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
            {translations[language].contact.heading}
          </motion.h2>
          <motion.p
            className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {translations[language].contact.desc}
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center bg-purple-700 hover:bg-purple-600 text-white"
              dir={isRTL ? "rtl" : "ltr"}
            >
              {translations[language].contact.button}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
