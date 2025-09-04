import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaLeaf, FaHeartbeat, FaUsers, FaAward, FaHandsHelping } from 'react-icons/fa';
import { GiMeditation, GiFruitBowl, GiRunningShoe } from 'react-icons/gi';
import image from  '../assets/team1.jpg';
import image2 from  '../assets/team2.jpg';
import image3 from  '../assets/team3.jpg';
import vedio from '../assets/Home22.mp4';
import backgroundImage from '../assets/B2.jpg';
import image4 from '../assets/test1.jpg';
import image5 from '../assets/test2.jpg';
import image6 from '../assets/test3.jpg';
import image7 from '../assets/HW2.jpg';
import image8 from '../assets/HW3.jpg';

// Translations for all content
const translations = {
  en: {
    hero: {
      heading: "About Vitality Wellness",
      sub: "Where science meets compassion to create transformative health experiences",
      services: "Our Services",
      contact: "Contact Us",
    },
    story: {
      heading: "Our Story",
      title: "Wellness Beyond Beauty",
      desc: "Since our beginnings in 2008, we’ve been passionate about guiding people toward healthier, more balanced lives. What started as a small wellness retreat has blossomed into a trusted sanctuary for relaxation, healing, and self-care. We believe true wellness is more than skin deep — it’s the harmony of body, mind, and spirit. Our holistic therapies and natural treatments are designed to help you recharge, find balance, and embrace mindful living every day.",
      explore: "Explore Services →",
      contact: "Contact Us",
    },
    philosophy: {
      heading: "Our Philosophy",
      desc: "We believe true wellness comes from addressing the whole person – body, mind, and spirit – with personalized, evidence-based care. Our philosophy is rooted in prevention, empowerment, and holistic healing practices that honor your individuality.",
      timeline: [
        {
          icon: <FaHeartbeat className="text-4xl text-purple-400" />,
          title: "Whole-Person Care",
          desc: "We look beyond symptoms to address root causes and create sustainable health.",
        },
        {
          icon: <GiFruitBowl className="text-4xl text-purple-500" />,
          title: "Prevention First",
          desc: "Our focus is on building health rather than just fighting disease.",
        },
        {
          icon: <GiRunningShoe className="text-4xl text-purple-600" />,
          title: "Empowerment",
          desc: "We equip you with knowledge and tools for lifelong wellbeing.",
        },
      ],
    },
    visionMission: {
      heading: "Our Vision & Mission",
      vision: {
        badge: "01",
        heading: "Our Vision",
        desc: "To redefine wellness by creating a world where balance, peace, and vitality are accessible to all. We envision communities embracing mindfulness, nutrition, and self-care as everyday practices.",
      },
      mission: {
        badge: "02",
        heading: "Our Mission",
        desc: "To deliver transformative health programs and personalized care that inspires people to lead healthier, happier, and more fulfilling lives. Our mission is to make wellness simple, sustainable, and joyful.",
      },
      sub: "Empowering holistic wellness through innovation, care, and mindful living.",
    },
    numbers: {
      heading: "By The Numbers",
      desc: "Our impact in the wellness community speaks for itself",
      stats: [
        { value: "10K+", label: "Happy Clients", icon: <FaUsers className="text-3xl" /> },
        { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
        { value: "50+", label: "Expert Practitioners", icon: <FaHandsHelping className="text-3xl" /> },
        { value: "100%", label: "Natural Methods", icon: <FaLeaf className="text-3xl" /> }
      ],
    },
    team: {
      heading: "Meet The Team",
      desc: "Our diverse team of experts brings together decades of experience across multiple healing disciplines.",
      members: [
        {
          name: "Dr. Deepak Chopra",
          role: "Integrative Physician",
          img: image3,
          hoverText: "Specializes in functional medicine and nutrition-based healing",
        },
        {
          name: "Dr. Andrew Weil",
          role: "Lead Physical Therapist",
          img: image2,
          hoverText: "Expert in movement therapy and pain management",
        },
        {
          name: "Dr. Mark Hyman",
          role: "Mindfulness Director",
          img: image,
          hoverText: "Developed our acclaimed stress reduction programs",
        },
      ],
    },
    testimonials: {
      heading: "Voices of Transformation",
      desc: "Real stories. Real growth. Hear how lives have changed through our holistic approach to wellness and balance.",
      items: [
        {
          img: image4,
          name: "Sarah Johnson",
          role: "Yoga Practitioner",
          quote: "Vitality Wellness transformed my approach to health. Their holistic methods helped me find balance in both body and mind.",
        },
        {
          img: image5,
          name: "Michael Chen",
          role: "Fitness Enthusiast",
          quote: "The personalized nutrition plan was a game-changer for my energy levels and overall performance.",
        },
        {
          img: image6,
          name: "Dr. Emily Rodriguez",
          role: "Medical Professional",
          quote: "As a physician, I appreciate their evidence-based yet compassionate approach to wellness.",
        }
      ],
    },
    join: {
      heading: "Begin Your Wellness Journey",
      sub: "Unlock your potential and embrace a healthier lifestyle. We're here to guide you with balance, energy, and transformation.",
      book: "Book a Consultation",
      explore: "Explore Programs",
    },
    themeToggle: {
      dark: "Dark Mode",
      light: "Light Mode",
    },
  },
  ar: {
    hero: {
      heading: "عن Vitality Wellness",
      sub: "حيث يلتقي العلم مع التعاطف لخلق تجارب صحية تحويلية",
      services: "خدماتنا",
      contact: "اتصل بنا",
    },
    story: {
      heading: "قصتنا",
      title: "العافية تتجاوز الجمال",
      desc: "منذ بدايتنا في عام 2008، كنا شغوفين بإرشاد الناس نحو حياة أكثر صحة وتوازنًا. ما بدأ كمنتجع صغير للعافية أصبح ملاذًا موثوقًا للاسترخاء والشفاء والرعاية الذاتية. نؤمن أن العافية الحقيقية أعمق من الجمال الخارجي — إنها انسجام الجسد والعقل والروح. علاجاتنا الشاملة والطبيعية مصممة لمساعدتك على إعادة الشحن، وإيجاد التوازن، واحتضان الحياة الواعية كل يوم.",
      explore: "استكشف الخدمات →",
      contact: "اتصل بنا",
    },
    philosophy: {
      heading: "فلسفتنا",
      desc: "نؤمن أن العافية الحقيقية تأتي من معالجة الشخص بالكامل – الجسد والعقل والروح – من خلال رعاية شخصية قائمة على الأدلة. فلسفتنا متجذرة في الوقاية، والتمكين، والممارسات العلاجية الشاملة التي تحترم فرديتك.",
      timeline: [
        {
          icon: <FaHeartbeat className="text-4xl text-purple-400" />,
          title: "رعاية شاملة",
          desc: "نتجاوز الأعراض لمعالجة الأسباب الجذرية وخلق صحة مستدامة.",
        },
        {
          icon: <GiFruitBowl className="text-4xl text-purple-500" />,
          title: "الوقاية أولاً",
          desc: "تركيزنا على بناء الصحة بدلاً من مجرد مكافحة المرض.",
        },
        {
          icon: <GiRunningShoe className="text-4xl text-purple-600" />,
          title: "التمكين",
          desc: "نمنحك المعرفة والأدوات للعافية مدى الحياة.",
        },
      ],
    },
    visionMission: {
      heading: "رؤيتنا ورسالتنا",
      vision: {
        badge: "٠١",
        heading: "رؤيتنا",
        desc: "إعادة تعريف العافية من خلال خلق عالم تتوفر فيه التوازن والسلام والحيوية للجميع. نتصور مجتمعات تحتضن اليقظة والتغذية والرعاية الذاتية كممارسات يومية.",
      },
      mission: {
        badge: "٠٢",
        heading: "رسالتنا",
        desc: "تقديم برامج صحية تحويلية ورعاية شخصية تلهم الناس لعيش حياة أكثر صحة وسعادة وإشباعًا. مهمتنا هي جعل العافية بسيطة ومستدامة ومبهجة.",
      },
      sub: "تمكين العافية الشاملة من خلال الابتكار والرعاية والعيش الواعي.",
    },
    numbers: {
      heading: "بالأرقام",
      desc: "تأثيرنا في مجتمع العافية يتحدث عن نفسه",
      stats: [
        { value: "10K+", label: "عملاء سعداء", icon: <FaUsers className="text-3xl" /> },
        { value: "15+", label: "سنوات الخبرة", icon: <FaAward className="text-3xl" /> },
        { value: "50+", label: "ممارسون خبراء", icon: <FaHandsHelping className="text-3xl" /> },
        { value: "100%", label: "طرق طبيعية", icon: <FaLeaf className="text-3xl" /> }
      ],
    },
    team: {
      heading: "تعرف على الفريق",
      desc: "يضم فريقنا المتنوع خبراء يجمعون عقودًا من الخبرة في العديد من تخصصات العلاج.",
      members: [
        {
          name: "د. ديباك شوبرا",
          role: "طبيب تكاملي",
          img: image3,
          hoverText: "متخصص في الطب الوظيفي والعلاج بالتغذية",
        },
        {
          name: "د. أندرو ويل",
          role: "رئيس العلاج الطبيعي",
          img: image2,
          hoverText: "خبير في علاج الحركة وإدارة الألم",
        },
        {
          name: "د. مارك هايمان",
          role: "مدير اليقظة الذهنية",
          img: image,
          hoverText: "طور برامجنا الشهيرة لتقليل التوتر",
        },
      ],
    },
    testimonials: {
      heading: "أصوات التحول",
      desc: "قصص حقيقية. نمو حقيقي. استمع كيف تغيرت الحياة من خلال نهجنا الشامل للعافية والتوازن.",
      items: [
        {
          img: image4,
          name: "سارة جونسون",
          role: "ممارسة اليوغا",
          quote: "غيرت Vitality Wellness نهجي للصحة. ساعدتني طرقهم الشاملة على إيجاد التوازن في الجسد والعقل.",
        },
        {
          img: image5,
          name: "مايكل تشين",
          role: "محب اللياقة",
          quote: "كانت خطة التغذية الشخصية نقطة تحول في مستويات الطاقة والأداء العام.",
        },
        {
          img: image6,
          name: "د. إميلي رودريغيز",
          role: "طبيبة",
          quote: "كطبيبة، أقدر نهجهم القائم على الأدلة والرحيم في العافية.",
        }
      ],
    },
    join: {
      heading: "ابدأ رحلتك الصحية",
      sub: "اكتشف إمكانياتك واحتضن نمط حياة أكثر صحة. نحن هنا لنرشدك نحو التوازن والطاقة والتحول.",
      book: "احجز استشارة",
      explore: "استكشف البرامج",
    },
    themeToggle: {
      dark: "الوضع الداكن",
      light: "الوضع الفاتح",
    },
  },
  he: {
    hero: {
      heading: "אודות Vitality Wellness",
      sub: "המקום בו המדע פוגש חמלה ליצירת חוויות בריאות משנות חיים",
      services: "השירותים שלנו",
      contact: "צור קשר",
    },
    story: {
      heading: "הסיפור שלנו",
      title: "רווחה מעבר ליופי",
      desc: "מאז 2008 אנו נלהבים להוביל אנשים לחיים בריאים ומאוזנים יותר. מה שהתחיל כמקלט קטן לרווחה הפך למקום אמין להרפיה, ריפוי וטיפוח עצמי. אנו מאמינים שרווחה אמיתית עמוקה יותר מהמראה החיצוני — זו ההרמוניה של גוף, נפש ורוח. הטיפולים ההוליסטיים והטבעיים שלנו נועדו לעזור לך להיטען מחדש, למצוא איזון ולאמץ חיים מודעים בכל יום.",
      explore: "גלה שירותים →",
      contact: "צור קשר",
    },
    philosophy: {
      heading: "הפילוסופיה שלנו",
      desc: "אנו מאמינים שרווחה אמיתית מגיעה מטיפול באדם השלם – גוף, נפש ורוח – עם טיפול אישי מבוסס ראיות. הפילוסופיה שלנו מושרשת במניעה, העצמה ושיטות ריפוי הוליסטיות שמכבדות את הייחודיות שלך.",
      timeline: [
        {
          icon: <FaHeartbeat className="text-4xl text-purple-400" />,
          title: "טיפול הוליסטי",
          desc: "אנו מסתכלים מעבר לתסמינים כדי לטפל בשורש הבעיה וליצור בריאות בת קיימא.",
        },
        {
          icon: <GiFruitBowl className="text-4xl text-purple-500" />,
          title: "מניעה תחילה",
          desc: "ההתמקדות שלנו היא בבניית בריאות ולא רק במלחמה במחלה.",
        },
        {
          icon: <GiRunningShoe className="text-4xl text-purple-600" />,
          title: "העצמה",
          desc: "אנו מעניקים לך ידע וכלים לרווחה לכל החיים.",
        },
      ],
    },
    visionMission: {
      heading: "החזון והמשימה שלנו",
      vision: {
        badge: "01",
        heading: "החזון שלנו",
        desc: "להגדיר מחדש את הרווחה על ידי יצירת עולם בו איזון, שלום וחיוניות נגישים לכולם. אנו רואים קהילות שמאמצות מיינדפולנס, תזונה וטיפוח עצמי כהרגלים יומיומיים.",
      },
      mission: {
        badge: "02",
        heading: "המשימה שלנו",
        desc: "להעניק תוכניות בריאות משנות חיים וטיפול אישי שמעורר אנשים לחיות חיים בריאים, שמחים ומספקים יותר. המשימה שלנו היא להפוך את הרווחה לפשוטה, בת קיימא ומשמחת.",
      },
      sub: "להעצים רווחה הוליסטית באמצעות חדשנות, טיפול וחיים מודעים.",
    },
    numbers: {
      heading: "במספרים",
      desc: "ההשפעה שלנו בקהילת הבריאות מדברת בעד עצמה",
      stats: [
        { value: "10K+", label: "לקוחות מרוצים", icon: <FaUsers className="text-3xl" /> },
        { value: "15+", label: "שנות ניסיון", icon: <FaAward className="text-3xl" /> },
        { value: "50+", label: "מטפלים מומחים", icon: <FaHandsHelping className="text-3xl" /> },
        { value: "100%", label: "שיטות טבעיות", icon: <FaLeaf className="text-3xl" /> }
      ],
    },
    team: {
      heading: "הכירו את הצוות",
      desc: "הצוות המגוון שלנו מביא עשרות שנות ניסיון במגוון תחומי ריפוי.",
      members: [
        {
          name: "ד\"ר דיפאק צ'ופרה",
          role: "רופא אינטגרטיבי",
          img: image3,
          hoverText: "מתמחה ברפואה פונקציונלית וריפוי תזונתי",
        },
        {
          name: "ד\"ר אנדרו ווייל",
          role: "ראש הפיזיותרפיה",
          img: image2,
          hoverText: "מומחה לטיפול בתנועה וניהול כאב",
        },
        {
          name: "ד\"ר מארק היימן",
          role: "מנהל מיינדפולנס",
          img: image,
          hoverText: "פיתח את תוכניות הפחתת הלחץ המובילות שלנו",
        },
      ],
    },
    testimonials: {
      heading: "קולות של שינוי",
      desc: "סיפורים אמיתיים. צמיחה אמיתית. שמעו כיצד חיים השתנו בזכות הגישה ההוליסטית שלנו לרווחה ואיזון.",
      items: [
        {
          img: image4,
          name: "שרה ג'ונסון",
          role: "מתרגלת יוגה",
          quote: "Vitality Wellness שינתה את הגישה שלי לבריאות. השיטות ההוליסטיות שלהם עזרו לי למצוא איזון בגוף ובנפש.",
        },
        {
          img: image5,
          name: "מייקל צ'ן",
          role: "חובב כושר",
          quote: "תוכנית התזונה האישית שינתה את רמות האנרגיה והביצועים שלי.",
        },
        {
          img: image6,
          name: "ד\"ר אמילי רודריגז",
          role: "רופאה",
          quote: "כרופאה, אני מעריכה את הגישה המבוססת ראיות והחומלת שלהם לרווחה.",
        }
      ],
    },
    join: {
      heading: "התחל את מסע הבריאות שלך",
      sub: "גלה את הפוטנציאל שלך ואמץ אורח חיים בריא יותר. אנחנו כאן כדי להדריך אותך לאיזון, אנרגיה ושינוי.",
      book: "קבע פגישה",
      explore: "גלה תוכניות",
    },
    themeToggle: {
      dark: "מצב כהה",
      light: "מצב בהיר",
    },
  },
};

const THEME_KEY = 'theme';
const LANGUAGE_KEY = 'language';

const AboutUs = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
  });

  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LANGUAGE_KEY) || 'en';
    }
    return 'en';
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
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
      };
    }
  }, []);

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

  const isRTL = language === "ar" || language === "he";

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(Array(6).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom >= 100) {
          const newVisibility = [...isVisible];
          newVisibility[index] = true;
          setIsVisible(newVisibility);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % translations[language].testimonials.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [language]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div
      className={themedClass(
        "font-sans min-h-screen transition-colors duration-500",
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
            ? translations[language].themeToggle.dark
            : translations[language].themeToggle.light}
        </button>
      </div>

      {/* Hero Section */}
// ...existing code...

{/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={vedio} type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/70"></div>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="relative flex flex-col justify-center items-center h-full text-center text-white px-6 z-10"
  >
    <motion.h1
      key={language} // ensures re-render on language change
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, type: "spring" }}
      className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
    >
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
        {translations[language].hero.heading}
      </span>
    </motion.h1>
    <motion.p
      key={language + "-sub"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="text-lg md:text-xl mb-10 max-w-2xl text-purple-100"
    >
      {translations[language].hero.sub}
    </motion.p>
    <div className="flex flex-wrap gap-5 justify-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/services"
          className={themedClass(
            "px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all relative overflow-hidden",
            "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:opacity-90 hover:shadow-purple-500/50",
            "bg-white text-purple-700 hover:bg-purple-100"
          )}
        >
          <span className="relative z-10">{translations[language].hero.services}</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-40 blur-xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/contact"
          className={themedClass(
            "px-8 py-3 rounded-full font-semibold text-lg shadow-xl transition-all relative",
            "bg-purple-600 text-white hover:bg-purple-700",
            "bg-purple-600 text-white hover:bg-purple-700"
          )}
        >
          {translations[language].hero.contact}
        </Link>
      </motion.div>
    </div>
  </motion.div>
  <motion.div
    className="absolute top-24 left-12 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"
    animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-24 right-16 w-40 h-40 bg-pink-400/25 rounded-full blur-3xl"
    animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
</section>






      {/* Section 1: Our Story */}
      <section
        className={themedClass(
          "w-full py-28 px-6 relative overflow-hidden",
          "bg-[#1E2A38]",
          "bg-white"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
              animate={isVisible[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 100 : -100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 text-center lg:text-left"
              dir={isRTL ? "rtl" : "ltr"}
            >
              <p
                className={themedClass(
                  "uppercase tracking-widest text-sm font-semibold mb-4",
                  "text-purple-400",
                  "text-purple-600"
                )}
              >
                {translations[language].story.heading}
              </p>
              <h2
                className={themedClass(
                  "text-4xl md:text-5xl font-serif font-bold mb-5 leading-snug",
                  "text-white",
                  "text-gray-900"
                )}
              >
                {translations[language].story.title}
              </h2>
              <p
                className={themedClass(
                  "text-lg mb-8 max-w-lg leading-relaxed",
                  "text-gray-300",
                  "text-gray-600"
                )}
              >
                {translations[language].story.desc}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className={themedClass(
                      "font-semibold py-3 px-8 rounded-full shadow-lg transition-all",
                      "bg-purple-600 text-white hover:bg-purple-700",
                      "bg-purple-600 text-white hover:bg-purple-700"
                    )}
                  >
                    {translations[language].story.explore}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className={themedClass(
                      "border-2 font-semibold py-3 px-8 rounded-full transition-all",
                      "border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white",
                      "border-purple-600 text-purple-600 hover:bg-purple-50"
                    )}
                  >
                    {translations[language].story.contact}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
              animate={isVisible[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -100 : 100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 flex justify-center relative"
            >
              <div className="relative">
                <img
                  src={image7}
                  alt="Wellness Therapy"
                  className="rounded-[40%] w-[400px] h-[350px] object-cover shadow-2xl border-4 border-purple-100"
                />
                <img
                  src={image8}
                  alt="Healthy Lifestyle"
                  className="absolute -bottom-8 -right-8 w-40 h-40 object-cover rounded-full shadow-lg border-4 border-purple-50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section
        className={themedClass(
          "relative w-full py-20 px-6 overflow-hidden",
          "bg-gradient-to-r from-[#1a1733] via-[#2b1b47] to-[#1a1733]",
          "bg-gradient-to-r from-purple-50 via-white to-purple-100"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <motion.div
          initial="hidden"
          animate={isVisible[1] ? "visible" : "hidden"}
          variants={fadeIn}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <h2
            className={themedClass(
              "text-4xl md:text-5xl font-serif font-bold mb-10",
              "text-purple-300",
              "text-purple-700"
            )}
          >
            {translations[language].philosophy.heading}
          </h2>
          <p
            className={themedClass(
              "max-w-3xl mx-auto text-lg mb-16 leading-relaxed",
              "text-gray-300",
              "text-gray-800"
            )}
          >
            {translations[language].philosophy.desc}
          </p>
          <div className="relative border-l-4 border-purple-500 ml-6">
            {translations[language].philosophy.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? (isRTL ? 100 : -100) : (isRTL ? -100 : 100) }}
                animate={isVisible[1] ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="mb-12 ml-6 relative"
              >
                <span className="absolute -left-11 flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white shadow-lg animate-bounce">
                  {item.icon}
                </span>
                <h3
                  className={themedClass(
                    "text-2xl font-bold mb-2",
                    "text-purple-200",
                    "text-purple-700"
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={themedClass(
                    "text-base leading-relaxed",
                    "text-gray-300",
                    "text-gray-800"
                  )}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section
        className={themedClass(
          "relative w-full py-24 px-6 overflow-hidden",
          "bg-gradient-to-br from-[#1a103f] via-[#2b165b] to-[#1a103f]",
          "bg-gradient-to-br from-purple-50 via-white to-purple-100"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>
        <div className="max-w-6xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={themedClass(
              "text-5xl md:text-6xl font-extrabold mb-6 tracking-wide",
              "text-purple-300",
              "text-purple-800"
            )}
          >
            {translations[language].visionMission.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={themedClass(
              "text-lg max-w-2xl mx-auto",
              "text-gray-300",
              "text-gray-700"
            )}
          >
            {translations[language].visionMission.sub}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto mb-24"
        >
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold text-3xl shadow-lg animate-bounce">
            {translations[language].visionMission.vision.badge}
          </div>
          <div
            className={themedClass(
              "flex-1 backdrop-blur-lg rounded-2xl p-8 shadow-xl border",
              "border-purple-400/40 bg-white/10",
              "border-purple-200 bg-white"
            )}
          >
            <h3
              className={themedClass(
                "text-3xl font-semibold mb-4",
                "text-purple-200",
                "text-purple-700"
              )}
            >
              {translations[language].visionMission.vision.heading}
            </h3>
            <p
              className={themedClass(
                "text-lg leading-relaxed",
                "text-gray-200",
                "text-gray-700"
              )}
            >
              {translations[language].visionMission.vision.desc}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row-reverse items-center md:items-start gap-10 max-w-6xl mx-auto"
        >
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-3xl shadow-lg animate-pulse">
            {translations[language].visionMission.mission.badge}
          </div>
          <div
            className={themedClass(
              "flex-1 backdrop-blur-lg rounded-2xl p-8 shadow-xl border",
              "border-purple-400/40 bg-white/10",
              "border-purple-200 bg-white"
            )}
          >
            <h3
              className={themedClass(
                "text-3xl font-semibold mb-4",
                "text-purple-200",
                "text-purple-700"
              )}
            >
              {translations[language].visionMission.mission.heading}
            </h3>
            <p
              className={themedClass(
                "text-lg leading-relaxed",
                "text-gray-200",
                "text-gray-700"
              )}
            >
              {translations[language].visionMission.mission.desc}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 3: By The Numbers */}
      <section
        className={themedClass(
          "relative w-full py-24 px-6 overflow-hidden",
          "bg-gradient-to-br from-[#1a103f] via-[#2b165b] to-[#1a103f] text-purple-200",
          "bg-gradient-to-br from-purple-50 via-white to-purple-100 text-purple-900"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>
        <motion.div
          initial="hidden"
          animate={isVisible[2] ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {translations[language].numbers.heading}
          </h2>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            {translations[language].numbers.desc}
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {translations[language].numbers.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible[2] ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="relative group"
            >
              <div
                className={themedClass(
                  "relative flex flex-col items-center justify-center w-48 h-48 mx-auto rounded-full shadow-xl backdrop-blur-md border overflow-hidden transition-all duration-500 group-hover:shadow-purple-500/50 group-hover:scale-105",
                  "bg-white/10 border-purple-400/30",
                  "bg-white border-purple-200"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 via-transparent to-purple-800/40 opacity-30 group-hover:opacity-60 transition-all"></div>
                <div
                  className={themedClass(
                    "mb-3 text-4xl relative z-10",
                    "text-purple-300",
                    "text-purple-600"
                  )}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold relative z-10">
                  {stat.value}
                </div>
                <div className="text-base mt-2 opacity-90 relative z-10">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Meet The Team */}
      <section
        className={themedClass(
          "relative py-24 px-6 w-full overflow-hidden",
          "bg-gradient-to-br from-[#1a103f] via-[#24124a] to-[#1a103f]",
          "bg-gradient-to-br from-purple-50 via-white to-purple-100"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 opacity-20 rounded-full blur-3xl animate-ping -z-10"></div>
        <motion.div
          initial="hidden"
          animate={isVisible[3] ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2
            className={themedClass(
              "text-4xl md:text-5xl font-extrabold mb-6 tracking-wide",
              "text-purple-200",
              "text-purple-700"
            )}
          >
            {translations[language].team.heading}
          </h2>
          <p
            className={themedClass(
              "max-w-3xl mx-auto text-lg leading-relaxed",
              "text-gray-300",
              "text-gray-700"
            )}
          >
            {translations[language].team.desc}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {translations[language].team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible[3] ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className={themedClass(
                "relative flex flex-col items-center text-center rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg transition-all duration-500 group",
                "bg-white/10 border border-purple-400/30",
                "bg-white border border-purple-200"
              )}
            >
              <div className="relative mt-8">
                <div className="absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-500 to-purple-700 blur-md opacity-60 group-hover:opacity-90 transition"></div>
                <img
                  src={member.img}
                  alt={member.name}
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3
                  className={themedClass(
                    "text-xl font-bold mb-2",
                    "text-purple-200",
                    "text-purple-700"
                  )}
                >
                  {member.name}
                </h3>
                <p
                  className={themedClass(
                    "text-base font-medium",
                    "text-purple-400",
                    "text-purple-600"
                  )}
                >
                  {member.role}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-800/90 to-purple-600/90 text-white px-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg leading-relaxed">{member.hoverText}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section
        className={themedClass(
          "py-24 px-6 w-full font-poppins relative overflow-hidden",
          "bg-gradient-to-b from-[#1b1030] via-[#2a1b47] to-[#1b1030]",
          "bg-purple-50"
        )}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className={themedClass(
                "text-4xl md:text-5xl font-extrabold mb-4",
                "text-purple-300 drop-shadow-lg",
                "text-purple-700"
              )}
            >
              {translations[language].testimonials.heading}
            </h2>
            <p
              className={themedClass(
                "max-w-2xl mx-auto text-lg leading-relaxed",
                "text-gray-300",
                "text-gray-700"
              )}
            >
              {translations[language].testimonials.desc}
            </p>
          </motion.div>
          <div className="relative h-[420px] flex items-center justify-center">
            {translations[language].testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  scale: activeTestimonial === index ? 1 : 0.9,
                  y: activeTestimonial === index ? 0 : 40,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className={themedClass(
                  `absolute inset-0 p-10 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-all duration-500 ${
                    activeTestimonial === index ? "z-20" : "z-0"
                  }`,
                  "bg-gradient-to-tr from-[#2d1e4d] to-[#3d2b70]",
                  "bg-white"
                )}
              >
                <motion.img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-purple-400 shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <p
                  className={themedClass(
                    "text-xl mb-6 italic leading-relaxed",
                    "text-gray-200",
                    "text-gray-800"
                  )}
                >
                  “{testimonial.quote}”
                </p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p
                    className={themedClass(
                      "text-sm mt-1",
                      "text-purple-300",
                      "text-purple-600"
                    )}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10 gap-3">
            {translations[language].testimonials.items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-4 h-4 rounded-full ${
                  activeTestimonial === index
                    ? "bg-purple-600 shadow-lg"
                    : "bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <motion.div
          className="absolute top-10 left-20 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-28 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-3xl"
          animate={{ y: [0, 25, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Section 6: Join Us */}
      <section
        className={themedClass(
          "relative py-28 px-6 bg-fixed bg-cover bg-center w-full text-white overflow-hidden",
          "",
          ""
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="absolute top-16 left-20 w-32 h-32 rounded-full bg-purple-500/30 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-40 h-40 rounded-full bg-pink-400/25 blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative text-center max-w-5xl mx-auto z-10">
          <motion.div
            initial="hidden"
            animate={isVisible[5] ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15, duration: 0.8 }
              }
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 70 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
            >
              {translations[language].join.heading}
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200"
            >
              {translations[language].join.sub}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              className="flex flex-wrap justify-center gap-5"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className={themedClass(
                    "font-bold py-3 px-8 rounded-full shadow-xl transition-all inline-block",
                    "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white hover:opacity-90 hover:shadow-2xl",
                    "bg-white text-purple-700 hover:bg-purple-100"
                  )}
                >
                  {translations[language].join.book}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className={themedClass(
                    "border-2 font-bold py-3 px-8 rounded-full transition-all inline-block",
                    "border-purple-400 text-purple-200 hover:bg-purple-500/20 hover:border-purple-300",
                    "border-purple-600 text-purple-700 hover:bg-purple-100 hover:text-purple-900"
                  )}
                >
                  {translations[language].join.explore}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;