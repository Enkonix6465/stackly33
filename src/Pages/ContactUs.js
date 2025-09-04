import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import contactVideo from "../assets/Contact.mp4";
import backgroundImage from "../assets/contactbackgroud.jpg";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    hero: {
      heading: "Contact Us",
      sub: "We're here to help you on your wellness journey. Reach out for support, questions, or to book a consultation.",
    },
    form: {
      heading: "Reach Out To Us",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      button: "Send Message",
    },
    info: [
      { title: "Location", info: "123 Wellness St, Healthy City" },
      { title: "Call Us", info: "+123 456 7890" },
      { title: "Email", info: "stackly@wellness.com" },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "How often should I exercise?",
        answer: "It is recommended to exercise at least 3-5 times a week for optimal health.",
      },
      {
        question: "What is a balanced diet?",
        answer: "A balanced diet includes a variety of foods: fruits, vegetables, lean proteins, whole grains, and healthy fats.",
      },
      {
        question: "How can I reduce stress?",
        answer: "Regular exercise, meditation, and sufficient sleep can significantly reduce stress levels.",
      },
      {
        question: "Should I take supplements?",
        answer: "Supplements should complement your diet and be taken after consulting a healthcare professional.",
      },
    ],
    newsletter: {
      heading: "Join Our Newsletter",
      desc: "Get wellness tips, events, and updates delivered straight to your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
    },
  },
  ar: {
    hero: {
      heading: "اتصل بنا",
      sub: "نحن هنا لدعمك في رحلتك الصحية. تواصل معنا للاستفسارات أو لحجز استشارة.",
    },
    form: {
      heading: "تواصل معنا",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      button: "إرسال الرسالة",
    },
    info: [
      { title: "الموقع", info: "123 شارع العافية، مدينة الصحة" },
      { title: "اتصل بنا", info: "+123 456 7890" },
      { title: "البريد الإلكتروني", info: "stackly@wellness.com" },
    ],
    faqHeading: "الأسئلة الشائعة",
    faqs: [
      {
        question: "كم مرة يجب أن أمارس الرياضة؟",
        answer: "ينصح بممارسة الرياضة 3-5 مرات أسبوعيًا لصحة مثالية.",
      },
      {
        question: "ما هو النظام الغذائي المتوازن؟",
        answer: "النظام المتوازن يشمل الفواكه والخضروات والبروتينات الخالية من الدهون والحبوب الكاملة والدهون الصحية.",
      },
      {
        question: "كيف يمكنني تقليل التوتر؟",
        answer: "التمارين المنتظمة والتأمل والنوم الكافي تقلل التوتر بشكل كبير.",
      },
      {
        question: "هل يجب أن أتناول المكملات الغذائية؟",
        answer: "المكملات يجب أن تكمل نظامك الغذائي وتؤخذ بعد استشارة مختص.",
      },
    ],
    newsletter: {
      heading: "اشترك في النشرة البريدية",
      desc: "احصل على نصائح العافية والأحداث والتحديثات مباشرة إلى بريدك.",
      placeholder: "أدخل بريدك الإلكتروني",
      button: "اشترك",
    },
  },
  he: {
    hero: {
      heading: "צור קשר",
      sub: "אנחנו כאן לעזור לך במסע הבריאות שלך. פנה אלינו לשאלות או לקביעת פגישה.",
    },
    form: {
      heading: "צור קשר איתנו",
      name: "השם שלך",
      email: "האימייל שלך",
      subject: "נושא",
      message: "ההודעה שלך",
      button: "שלח הודעה",
    },
    info: [
      { title: "מיקום", info: "123 רחוב הבריאות, עיר הבריאות" },
      { title: "התקשר אלינו", info: "+123 456 7890" },
      { title: "אימייל", info: "stackly@wellness.com" },
    ],
    faqHeading: "שאלות נפוצות",
    faqs: [
      {
        question: "כמה פעמים כדאי להתאמן?",
        answer: "מומלץ להתאמן לפחות 3-5 פעמים בשבוע לבריאות מיטבית.",
      },
      {
        question: "מהי תזונה מאוזנת?",
        answer: "תזונה מאוזנת כוללת פירות, ירקות, חלבונים רזים, דגנים מלאים ושומנים בריאים.",
      },
      {
        question: "איך להפחית לחץ?",
        answer: "פעילות גופנית, מדיטציה ושינה מספקת מפחיתים לחץ משמעותית.",
      },
      {
        question: "האם לקחת תוספי תזונה?",
        answer: "תוספים צריכים להשלים את התזונה שלך ולקחתם לאחר ייעוץ מקצועי.",
      },
    ],
    newsletter: {
      heading: "הצטרף לניוזלטר שלנו",
      desc: "קבל טיפים, אירועים ועדכונים ישירות למייל שלך.",
      placeholder: "הזן את האימייל שלך",
      button: "הירשם",
    },
  },
};

const ContactUs = () => {
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
        "w-full min-h-screen transition-colors duration-500",
        "bg-black text-white",
        "bg-white text-gray-900"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
        <video
          src={contactVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/80 dark:bg-black"></div>
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
            className="text-lg md:text-2xl max-w-2xl text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {t.hero.sub}
          </motion.p>
        </motion.div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <motion.section
        className={themedClass(
          "w-full py-28 px-6 relative flex justify-center overflow-hidden",
          "bg-black",
          "bg-gradient-to-r from-purple-100 via-pink-100 to-purple-200"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        {/* Animated background blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle at center, #9b5de5, #f15bb5)",
          }}
          animate={{ y: [0, 50, 0], x: [0, 40, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle at center, #f72585, #7209b7)",
          }}
          animate={{ y: [0, -50, 0], x: [0, -40, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-2xl opacity-20 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle at center, #6a0dad, #ff4d6d)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Form card */}
        <motion.div
          className={themedClass(
            "max-w-5xl w-full p-12 rounded-3xl relative z-10 shadow-2xl backdrop-blur-lg border border-transparent hover:border-purple-400 transition-all duration-500",
            "bg-gray-900 text-white",
            "bg-white text-gray-900"
          )}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
          >
            {t.form.heading}
          </motion.h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              placeholder={t.form.name}
              className={themedClass(
                "p-5 rounded-xl border focus:ring-4 transition w-full",
                "border-gray-700 bg-gray-800 text-white focus:ring-purple-400",
                "border-gray-300 bg-white text-gray-900 focus:ring-purple-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.input
              type="email"
              placeholder={t.form.email}
              className={themedClass(
                "p-5 rounded-xl border focus:ring-4 transition w-full",
                "border-gray-700 bg-gray-800 text-white focus:ring-purple-400",
                "border-gray-300 bg-white text-gray-900 focus:ring-purple-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              type="text"
              placeholder={t.form.subject}
              className={themedClass(
                "p-5 rounded-xl border focus:ring-4 transition w-full md:col-span-2",
                "border-gray-700 bg-gray-800 text-white focus:ring-purple-400",
                "border-gray-300 bg-white text-gray-900 focus:ring-purple-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.textarea
              placeholder={t.form.message}
              rows={6}
              className={themedClass(
                "p-5 rounded-xl border focus:ring-4 transition w-full md:col-span-2",
                "border-gray-700 bg-gray-800 text-white focus:ring-purple-400",
                "border-gray-300 bg-white text-gray-900 focus:ring-purple-300"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(128,0,128,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className={themedClass(
                "px-10 py-5 rounded-full font-bold md:col-span-2 transition-all text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700",
                "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white",
                "bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 text-white"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t.form.button}
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <motion.section
        className={themedClass(
          "w-full py-28 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden",
          "bg-black",
          "bg-purple-100"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          className="absolute -top-20 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-10 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {t.info.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.08, y: -8, rotate: [0, 2, -2, 0] }}
            className={themedClass(
              "relative rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center transition-all overflow-hidden",
              "bg-gray-900 text-white",
              "bg-white text-gray-900"
            )}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-20 blur-2xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg">{card.info}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== FAQ SECTION ===== */}
      <motion.section
        className={themedClass(
          "w-full py-28 px-6 relative overflow-hidden",
          "bg-black text-white",
          "bg-purple-50 text-gray-900"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          className="absolute -top-32 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-20 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center z-10 relative">
          {t.faqHeading}
        </h2>

        <div className="space-y-6 relative z-10 max-w-full px-4">
          {t.faqs.map((item, idx) => (
            <motion.div
              key={idx}
              className={themedClass(
                "p-6 rounded-3xl shadow-2xl cursor-pointer border transition-all w-full",
                "bg-gray-900 border-gray-700 hover:bg-gray-800",
                "bg-white border-purple-200 hover:bg-purple-100"
              )}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <motion.h3
                className="text-2xl font-semibold mb-2 flex justify-between items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {item.question}
              </motion.h3>
              <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                {item.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== MAP SECTION ===== */}
      <motion.section
        className="w-full h-96 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193792224686!2d-122.41941548468198!3d37.77492927975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e6b8057%3A0xe4eafcdfb6c8cf0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1689288888888!5m2!1sen!2sus"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <motion.section
        className={themedClass(
          "w-full py-24 px-4 text-center relative",
          "bg-black text-white",
          "bg-purple-100 text-gray-900"
        )}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            {t.newsletter.heading}
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white text-lg">
            {t.newsletter.desc}
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              className="p-4 rounded-full w-full sm:flex-1 text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,128,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {t.newsletter.button}
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;