import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import backgroudvedio from '../assets/Services.mp4';
import image from '../assets/PN.jpg';
import image2 from '../assets/MM.jpg';
import image3 from '../assets/SO.jpg';
import image4 from '../assets/SR.jpg';
import image5 from '../assets/HD.jpg';
import image6 from '../assets/WC.jpg';
import backgroundImage from '../assets/Mindful.jpg';
import healthImg from "../assets/health.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Our Services",
      sub: "Explore our holistic approach to health and wellness.",
      button: "Explore Blogs",
    },
    services: [
      {
        title: "Personalized Nutrition",
        description: "Tailored meal plans designed by certified nutritionists to meet your unique dietary needs.",
        icon: image,
        buttonText: "Learn More",
        extra: "Tailored nutrition plans to fuel your energy and overall vitality."
      },
      {
        title: "Mindful Movement",
        description: "Gentle yoga and meditation classes to connect mind and body for holistic wellbeing.",
        icon: image2,
        buttonText: "View Schedule",
        extra: "Movement sessions for strength, balance, and stress relief."
      },
      {
        title: "Sleep Optimization",
        description: "Science-backed techniques to improve sleep quality and establish healthy circadian rhythms.",
        icon: image3,
        buttonText: "Rest Better",
        extra: "Sleep routines designed to recharge your body and mind."
      },
      {
        title: "Stress Resilience",
        description: "Evidence-based programs to build emotional resilience and manage stress effectively.",
        icon: image4,
        buttonText: "Find Balance",
        extra: "Learn stress resilience and emotional balance techniques."
      },
      {
        title: "Holistic Detox",
        description: "Gentle, comprehensive detox programs to cleanse your body and renew your energy.",
        icon: image5,
        buttonText: "Cleanse Now",
        extra: "Gentle detox programs that boost immunity and energy levels."
      },
      {
        title: "Wellness Coaching",
        description: "One-on-one guidance to help you achieve sustainable lifestyle changes and personal growth.",
        icon: image6,
        buttonText: "Get Started",
        extra: "One-on-one coaching for lasting personal growth & lifestyle change."
      }
    ],
    cta: {
      heading: "Redefine Your Wellbeing",
      desc: "Elevate your lifestyle with clarity and balance. Our holistic approach blends fitness, mindfulness, and personalized nutrition to create a sustainable path to your best self.",
      button1: "Explore Programs",
      button2: "Join Today"
    },
    stories: {
      heading: "Success Stories",
      desc: "Hear from people who transformed their lives with our wellness programs. Each story reflects dedication, growth, and sustainable lifestyle changes.",
      items: [
        { icon: "💪", title: "Improved Fitness", desc: "Strength, stamina, and confidence built with personalized programs." },
        { icon: "🧘", title: "Mindful Lifestyle", desc: "Balanced routines with mindfulness and stress management." },
        { icon: "🌱", title: "Better Nutrition", desc: "Healthier eating habits and sustained energy with tailored nutrition." }
      ]
    },
    tips: [
      {
        icon: "🍇",
        title: "Nourish Naturally",
        desc: "Choose vibrant, nutrient-rich meals to fuel your body and mind. Fresh fruits, vegetables, and whole grains can do wonders.",
      },
      {
        icon: "🛌",
        title: "Rest & Recharge",
        desc: "A healthy sleep routine is the foundation of energy. Prioritize deep rest to restore both your physical and mental balance.",
      },
      {
        icon: "🚶‍♀️",
        title: "Move with Purpose",
        desc: "Daily activity doesn’t need to be intense—walk, stretch, dance, or play. Consistency matters more than intensity.",
      },
      {
        icon: "🧘‍♀️",
        title: "Mindful Moments",
        desc: "Take short breaks to breathe, reflect, and reset. Even 5 minutes of mindfulness can shift your entire day.",
      },
    ],
    workshop: {
      heading: "Join Our Interactive Workshops",
      desc: "Engage in dynamic wellness sessions designed to energize your body and mind",
      button1: "Register Now",
      button2: "View Schedule"
    }
  },
  ar: {
    hero: {
      heading: "خدماتنا",
      sub: "اكتشف نهجنا الشامل للصحة والعافية.",
      button: "استكشف المدونات",
    },
    services: [
      {
        title: "التغذية الشخصية",
        description: "خطط وجبات مصممة خصيصًا لتلبية احتياجاتك الغذائية الفريدة.",
        icon: image,
        buttonText: "اعرف المزيد",
        extra: "خطط تغذية مخصصة لتعزيز الطاقة والحيوية."
      },
      {
        title: "الحركة الواعية",
        description: "دروس يوغا وتأمل لطيفة لربط العقل بالجسم من أجل صحة شاملة.",
        icon: image2,
        buttonText: "عرض الجدول",
        extra: "جلسات حركة للقوة والتوازن وتخفيف التوتر."
      },
      {
        title: "تحسين النوم",
        description: "تقنيات مدعومة علميًا لتحسين جودة النوم وتنظيم الإيقاع الحيوي.",
        icon: image3,
        buttonText: "نم أفضل",
        extra: "روتينات نوم مصممة لإعادة شحن الجسم والعقل."
      },
      {
        title: "المرونة ضد التوتر",
        description: "برامج قائمة على الأدلة لبناء المرونة العاطفية وإدارة التوتر.",
        icon: image4,
        buttonText: "ابحث عن التوازن",
        extra: "تعلم تقنيات المرونة والتوازن العاطفي."
      },
      {
        title: "التخلص الشامل من السموم",
        description: "برامج لطيفة وشاملة لتنظيف الجسم وتجديد الطاقة.",
        icon: image5,
        buttonText: "ابدأ التنظيف",
        extra: "برامج تنظيف لطيفة تعزز المناعة والطاقة."
      },
      {
        title: "تدريب العافية",
        description: "إرشاد فردي لمساعدتك على تحقيق تغييرات مستدامة في نمط الحياة والنمو الشخصي.",
        icon: image6,
        buttonText: "ابدأ الآن",
        extra: "تدريب فردي لنمو شخصي وتغيير نمط حياة دائم."
      }
    ],
    cta: {
      heading: "أعد تعريف رفاهيتك",
      desc: "ارتقِ بأسلوب حياتك مع الوضوح والتوازن. نهجنا الشامل يمزج بين اللياقة واليقظة والتغذية الشخصية لخلق طريق مستدام نحو أفضل نسخة منك.",
      button1: "استكشف البرامج",
      button2: "انضم اليوم"
    },
    stories: {
      heading: "قصص النجاح",
      desc: "استمع إلى أشخاص غيروا حياتهم من خلال برامج العافية لدينا. كل قصة تعكس التفاني والنمو والتغيير المستدام.",
      items: [
        { icon: "💪", title: "لياقة محسنة", desc: "قوة وقدرة وثقة تم بناؤها ببرامج مخصصة." },
        { icon: "🧘", title: "أسلوب حياة واعي", desc: "روتينات متوازنة مع اليقظة وإدارة التوتر." },
        { icon: "🌱", title: "تغذية أفضل", desc: "عادات أكل صحية وطاقة مستدامة مع تغذية مخصصة." }
      ]
    },
    tips: [
      {
        icon: "🍇",
        title: "غذِ نفسك طبيعيًا",
        desc: "اختر وجبات غنية بالمغذيات لتعزيز الجسم والعقل. الفواكه والخضروات والحبوب الكاملة مفيدة جدًا.",
      },
      {
        icon: "🛌",
        title: "استرح واشحن طاقتك",
        desc: "روتين نوم صحي هو أساس الطاقة. احرص على الراحة العميقة لاستعادة التوازن الجسدي والعقلي.",
      },
      {
        icon: "🚶‍♀️",
        title: "تحرك بهدف",
        desc: "النشاط اليومي لا يحتاج أن يكون مكثفًا—امشِ، تمدد، ارقص أو العب. الاستمرارية أهم من الشدة.",
      },
      {
        icon: "🧘‍♀️",
        title: "لحظات واعية",
        desc: "خذ فترات قصيرة للتنفس والتأمل وإعادة الضبط. حتى 5 دقائق من اليقظة يمكن أن تغير يومك.",
      },
    ],
    workshop: {
      heading: "انضم إلى ورش العمل التفاعلية",
      desc: "شارك في جلسات العافية الديناميكية المصممة لتنشيط الجسم والعقل",
      button1: "سجل الآن",
      button2: "عرض الجدول"
    }
  },
  he: {
    hero: {
      heading: "השירותים שלנו",
      sub: "גלה את הגישה ההוליסטית שלנו לבריאות ורווחה.",
      button: "גלה בלוגים",
    },
    services: [
      {
        title: "תזונה מותאמת אישית",
        description: "תוכניות ארוחות מותאמות אישית לצרכים התזונתיים שלך.",
        icon: image,
        buttonText: "למידע נוסף",
        extra: "תוכניות תזונה מותאמות להמרצת אנרגיה וחיוניות."
      },
      {
        title: "תנועה מודעת",
        description: "שיעורי יוגה ומדיטציה עדינים לחיבור גוף ונפש לרווחה הוליסטית.",
        icon: image2,
        buttonText: "צפה בלו\"ז",
        extra: "מפגשי תנועה לחוזק, איזון והפגת מתחים."
      },
      {
        title: "אופטימיזציית שינה",
        description: "טכניקות מבוססות מדע לשיפור איכות השינה והסדרת השעון הביולוגי.",
        icon: image3,
        buttonText: "שינה טובה יותר",
        extra: "שגרות שינה שמטעינות את הגוף והנפש."
      },
      {
        title: "חוסן נפשי",
        description: "תוכניות מבוססות מחקר לבניית חוסן רגשי וניהול מתחים.",
        icon: image4,
        buttonText: "מצא איזון",
        extra: "למד טכניקות לחוסן נפשי ואיזון רגשי."
      },
      {
        title: "דיטוקס הוליסטי",
        description: "תוכניות דיטוקס עדינות ומקיפות לניקוי הגוף וחידוש האנרגיה.",
        icon: image5,
        buttonText: "נקה עכשיו",
        extra: "תוכניות דיטוקס שמחזקות את החיסון והאנרגיה."
      },
      {
        title: "אימון רווחה",
        description: "הכוונה אישית לשינויי אורח חיים ברי קיימא וצמיחה אישית.",
        icon: image6,
        buttonText: "התחל עכשיו",
        extra: "אימון אישי לצמיחה ושינוי אורח חיים מתמשך."
      }
    ],
    cta: {
      heading: "הגדר מחדש את הרווחה שלך",
      desc: "שדרג את אורח החיים שלך עם בהירות ואיזון. הגישה ההוליסטית שלנו משלבת כושר, מודעות ותזונה מותאמת ליצירת מסלול בר קיימא לגרסה הטובה ביותר שלך.",
      button1: "גלה תוכניות",
      button2: "הצטרף היום"
    },
    stories: {
      heading: "סיפורי הצלחה",
      desc: "שמעו מאנשים ששינו את חייהם עם תוכניות הרווחה שלנו. כל סיפור משקף התמדה, צמיחה ושינוי בר קיימא.",
      items: [
        { icon: "💪", title: "כושר משופר", desc: "חוזק, סיבולת וביטחון שנבנו עם תוכניות מותאמות." },
        { icon: "🧘", title: "אורח חיים מודע", desc: "שגרות מאוזנות עם מודעות וניהול מתחים." },
        { icon: "🌱", title: "תזונה טובה יותר", desc: "הרגלי אכילה בריאים ואנרגיה מתמשכת עם תזונה מותאמת." }
      ]
    },
    tips: [
      {
        icon: "🍇",
        title: "הזנה טבעית",
        desc: "בחר ארוחות עשירות במזון להזנת הגוף והנפש. פירות, ירקות ודגנים מלאים עושים פלאים.",
      },
      {
        icon: "🛌",
        title: "מנוחה וטעינה",
        desc: "שגרת שינה בריאה היא הבסיס לאנרגיה. תעדף מנוחה עמוקה לשיקום איזון פיזי ומנטלי.",
      },
      {
        icon: "🚶‍♀️",
        title: "תנועה עם מטרה",
        desc: "פעילות יומית לא חייבת להיות אינטנסיבית—לך, תמתח, תרקוד או תשחק. עקביות חשובה יותר מעוצמה.",
      },
      {
        icon: "🧘‍♀️",
        title: "רגעים מודעים",
        desc: "קח הפסקות קצרות לנשימה, הרהור ואיפוס. אפילו 5 דקות של מודעות יכולות לשנות את היום שלך.",
      },
    ],
    workshop: {
      heading: "הצטרף לסדנאות האינטראקטיביות שלנו",
      desc: "השתתף במפגשי רווחה דינמיים שנועדו להמריץ את הגוף והנפש",
      button1: "הרשם עכשיו",
      button2: "צפה בלו\"ז"
    }
  }
};

const ServicesPage = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LANGUAGE_KEY) || "en";
    }
    return "en";
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      window.dispatchEvent(new Event('theme-changed'));
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem(THEME_KEY) || 'light';
        setTheme(newTheme);
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);

      const handleLangChange = () => {
        const newLang = localStorage.getItem(LANGUAGE_KEY) || "en";
        setLanguage(newLang);
      };
      window.addEventListener("language-changed", handleLangChange);
      window.addEventListener("storage", handleLangChange);

      // Initial sync
      setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");

      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener("language-changed", handleLangChange);
        window.removeEventListener("storage", handleLangChange);
      };
    }
  }, []);

  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  const t = translations[language] || translations["en"];
  const isRTL = language === "ar" || language === "he";

  return (
    <div className={themedClass(
      "overflow-hidden min-h-screen transition-colors duration-500",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-800"
    )} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center text-white overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroudvedio} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center px-4 z-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              {t.hero.heading}
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {t.hero.sub}
          </motion.p>
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={themedClass(
              "px-10 py-3 rounded-full font-semibold text-lg shadow-xl transition-all relative overflow-hidden",
              "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:shadow-purple-500/50",
              "bg-white text-purple-700 hover:bg-purple-100"
            )}
          >
            <span className="relative z-10">{t.hero.button}</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-40 blur-xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-16 w-40 h-40 bg-pink-400/25 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Services Grid */}
      <div className="w-full py-20 px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl md:text-5xl font-bold mb-14 text-purple-600 drop-shadow-lg"
        >
          {t.hero.heading}
        </motion.h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, rotate: 1 }}
              className={themedClass(
                "relative group bg-gradient-to-br from-purple-950 via-black to-purple-900 rounded-2xl shadow-xl p-8 text-center overflow-hidden",
                "relative group bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-2xl shadow-lg p-8 text-center overflow-hidden"
              )}
            >
              <div className="absolute inset-0 bg-purple-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <motion.div
                whileHover={{ scale: 1.15, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg border-2 border-purple-400"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3
                className={themedClass(
                  "text-2xl font-semibold mb-4 text-white drop-shadow-lg group-hover:text-purple-300 transition-colors",
                  "text-2xl font-semibold mb-4 text-purple-800 group-hover:text-purple-900 transition-colors"
                )}
              >
                {service.title}
              </h3>
              <p
                className={themedClass(
                  "text-gray-50 text-base mb-6 leading-relaxed drop-shadow-lg",
                  "text-gray-700 text-base mb-6 leading-relaxed"
                )}
              >
                {service.description}
              </p>
              <p
                className={themedClass(
                  "text-gray-200 text-sm mb-8 leading-relaxed drop-shadow-md",
                  "text-gray-600 text-sm mb-8 leading-relaxed"
                )}
              >
                {service.extra}
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/nutrition"
                  className={themedClass(
                    "inline-block px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg hover:shadow-purple-400/90 transition-all",
                    "inline-block px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:shadow-purple-500/70 transition-all"
                  )}
                >
                  {service.buttonText}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section
        className={themedClass(
          "relative py-28 px-6 lg:px-20 overflow-hidden",
          "bg-gradient-to-br from-[#0a0815] via-[#1a0f2e] to-[#0a0815]",
          "bg-gradient-to-br from-purple-50 via-white to-purple-100"
        )}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "50% 50% 30% 60%/50% 40% 60% 50%",
                  "70% 30% 50% 50%/40% 60% 30% 70%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                ],
                scale: [1, 1.25, 0.95, 1.15, 1],
                rotate: [0, 5, -5, 0],
                filter: ["hue-rotate(0deg)", "hue-rotate(60deg)", "hue-rotate(120deg)", "hue-rotate(0deg)"],
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute w-[460px] h-[460px] md:w-[520px] md:h-[520px]
              bg-gradient-to-tr from-pink-500/40 via-purple-500/40 to-indigo-500/40
              blur-3xl"
            ></motion.div>
            <motion.img
              src={healthImg}
              alt="Wellness"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                  "50% 50% 30% 60%/50% 40% 60% 50%",
                  "70% 30% 50% 50%/40% 60% 30% 70%",
                  "60% 40% 30% 70%/60% 30% 70% 40%",
                ],
              }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              className="relative w-[420px] md:w-[500px] h-[500px] object-cover
              shadow-2xl border-4 border-purple-500/30"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10 text-center lg:text-left"
          >
            <h2
              className={themedClass(
                "text-3xl md:text-4xl font-extrabold mb-6 leading-snug",
                "text-purple-200 drop-shadow-md",
                "text-purple-800"
              )}
            >
              {t.cta.heading}
            </h2>
            <p
              className={themedClass(
                "text-lg mb-8 leading-relaxed max-w-xl",
                "text-purple-100",
                "text-gray-700"
              )}
            >
              {t.cta.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/programs"
                  className="px-8 py-4 rounded-xl font-semibold text-lg shadow-lg
                  bg-gradient-to-r from-purple-600 to-pink-500 text-white
                  hover:shadow-pink-500/70 transition-all duration-300 inline-block"
                >
                  {t.cta.button1}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl font-semibold text-lg border-2
                  border-purple-500 text-purple-600 bg-white
                  hover:bg-purple-600 hover:text-white transition-all duration-300 inline-block"
                >
                  {t.cta.button2}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6 text-center relative overflow-hidden",
          "bg-gradient-to-br from-[#120023] via-[#1b0d35] to-[#120023] text-purple-100",
          "bg-gradient-to-br from-purple-50 via-white to-purple-100 text-purple-900"
        )}
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <h2 className={themedClass(
          "text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide",
          "text-purple-200",
          "text-purple-800"
        )}>
          {t.stories.heading}
        </h2>
        <p className={themedClass(
          "max-w-3xl mx-auto text-lg md:text-xl mb-16 leading-relaxed",
          "text-purple-100/90",
          "text-purple-900"
        )}>
          {t.stories.desc}
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {t.stories.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              whileHover={{ scale: 1.05 }}
              className={themedClass(
                "relative rounded-3xl p-8 backdrop-blur-md border-2 shadow-xl group transition-all duration-500",
                "border-purple-500/40 bg-purple-900/40 hover:border-pink-400/70",
                "border-purple-300 bg-white/60 hover:border-pink-500/50"
              )}
            >
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-400 animate-pulse"></div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className={themedClass(
                  "flex items-center justify-center w-20 h-20 rounded-full text-4xl mb-6 mx-auto shadow-lg",
                  "bg-gradient-to-tr from-purple-500 to-pink-500 text-white",
                  "bg-gradient-to-tr from-purple-600 to-pink-400 text-white"
                )}
              >
                {item.icon}
              </motion.div>
              <h3 className={themedClass(
                "text-2xl font-bold mb-4",
                "text-purple-200",
                "text-purple-800"
              )}>
                {item.title}
              </h3>
              <p className={themedClass(
                "text-base md:text-lg leading-relaxed",
                "text-purple-100/90",
                "text-purple-800"
              )}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Wellness Tips */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6 relative",
          "bg-[#1b1033]",
          "bg-purple-50"
        )}
      >
        <h2
          className={themedClass(
            "text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-wide",
            "text-purple-200",
            "text-purple-800"
          )}
        >
          Wellness Tips to Elevate Your Life
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500/40"></div>
          {t.tips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-2xl text-white shadow-lg z-10">
                {tip.icon}
              </div>
              <div
                className={themedClass(
                  `mt-12 md:mt-0 md:w-1/2 p-6 rounded-xl shadow-lg transition-all duration-500 hover:scale-105`,
                  "bg-purple-800/70 text-purple-100",
                  "bg-purple-200 text-purple-900"
                )}
              >
                <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-lg leading-relaxed">{tip.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Book a Workshop */}
      <section
        className={themedClass(
          "relative py-32 px-6 text-center overflow-hidden",
          "text-white",
          "text-purple-900"
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <motion.div
          className="absolute top-16 left-16 w-32 h-32 rounded-full bg-purple-500/40 blur-3xl z-0"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-700/40 blur-3xl z-0"
          animate={{ y: [0, -40, 0], x: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="relative z-20 max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t.workshop.heading}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl mb-10 leading-relaxed text-gray-200 drop-shadow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            {t.workshop.desc}
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(168,85,247,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg bg-purple-600 text-white shadow-lg transition-all"
            >
              {t.workshop.button1}
            </motion.a>
            <motion.a
              href="/workshops"
              whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg border border-white/80 text-white/95 backdrop-blur-sm transition-all"
            >
              {t.workshop.button2}
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;