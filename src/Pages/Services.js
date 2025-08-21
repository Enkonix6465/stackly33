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

const THEME_KEY = 'theme';

const ServicesPage = () => {
  // Theme state and effect
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(THEME_KEY) || 'light';
    }
    return 'light';
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

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Helper for theme-based class
  const themedClass = (base, dark, light) =>
    `${base} ${theme === 'dark' ? dark : light}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Personalized Nutrition",
      description: "Tailored meal plans designed by certified nutritionists to meet your unique dietary needs.",
      icon: image,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: "Learn More"
    },
    {
      title: "Mindful Movement",
      description: "Gentle yoga and meditation classes to connect mind and body for holistic wellbeing.",
      icon: image2,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: "View Schedule"
    },
    {
      title: "Sleep Optimization",
      description: "Science-backed techniques to improve sleep quality and establish healthy circadian rhythms.",
      icon:  image3,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: "Rest Better"
    },
    {
      title: "Stress Resilience",
      description: "Evidence-based programs to build emotional resilience and manage stress effectively.",
      icon: image4,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: "Find Balance"
    },
    {
      title: "Holistic Detox",
      description: "Gentle, comprehensive detox programs to cleanse your body and renew your energy.",
      icon: image5,
      bgColor: themedClass("","bg-[#1E2A38]","bg-white"),
      buttonText: "Cleanse Now"
    },
    {
      title: "Wellness Coaching",
      description: "One-on-one guidance to help you achieve sustainable lifestyle changes and personal growth.",
      icon: image6,
      bgColor: themedClass("","bg-[#22304a]","bg-green-50"),
      buttonText: "Get Started"
    }
  ];

  return (
    <div className={themedClass(
      "overflow-hidden min-h-screen transition-colors duration-500",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-800"
    )}>
      

      {/* Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroudvedio} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center px-4 z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Revitalize Your Wellbeing
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover our holistic approach to health and wellness
          </p>
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={themedClass(
              "px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all",
              "bg-[#00bfff] text-white",
              "bg-white text-green-600"
            )}
          >
            Explore Blogs
          </motion.a>
        </motion.div>
      </section>

      {/* Services Grid */}
      <div className="w-full overflow-hidden">
        {services.map((service, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${service.bgColor} py-20 px-4 sm:px-6 lg:px-12 w-full`}
          >
            <div className={`max-w-7xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-44 h-44 md:w-52 md:h-52 rounded-xl overflow-hidden mb-8 md:mb-0 shadow-lg"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex-1">
                <h2 className={themedClass(
                  "text-3xl md:text-4xl font-bold mb-4",
                  "text-green-200",
                  "text-green-800"
                )}>{service.title}</h2>
                <p className={themedClass(
                  "text-lg mb-6 text-justify",
                  "text-gray-300",
                  "text-gray-700"
                )}>{service.description}</p>
                <p className={themedClass(
                  "mb-6 text-justify",
                  "text-gray-400",
                  "text-gray-600"
                )}>
                  {index === 0 && "Our nutrition plans are customized for your lifestyle, helping you achieve balanced energy, improved digestion, and overall vitality."}
                  {index === 1 && "Mindful movement sessions enhance flexibility, reduce stress, and strengthen the mind-body connection for holistic wellness."}
                  {index === 2 && "Sleep optimization programs guide you to establish restorative nightly routines, improving energy, focus, and overall health."}
                  {index === 3 && "Stress resilience programs teach techniques to manage daily pressures and maintain emotional balance, supporting mental wellbeing."}
                  {index === 4 && "Holistic detox gently cleanses your body, supports liver function, boosts immunity, and increases energy levels naturally."}
                  {index === 5 && "Wellness coaching provides personalized guidance for sustainable lifestyle changes, goal setting, and personal growth."}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/nutrition"
                    className={themedClass(
                      "px-6 py-3 rounded-full font-medium transition-colors inline-block",
                      "bg-[#00bfff] text-white hover:bg-green-700",
                      "bg-green-600 text-white hover:bg-green-700"
                    )}
                  >
                    {service.buttonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={themedClass(
          "relative py-32 px-6 lg:px-20 overflow-hidden rounded-3xl shadow-lg",
          "bg-gradient-to-b from-[#1E2A38] to-[#22304a]",
          "bg-gradient-to-b from-green-100 to-green-200"
        )}
      >
        {/* Decorative floating circles */}
        <div className={themedClass(
          "absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse",
          "bg-green-700",
          "bg-green-300"
        )}></div>
        <div className={themedClass(
          "absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-25 animate-pulse",
          "bg-green-800",
          "bg-green-400"
        )}></div>
        <div className={themedClass(
          "absolute top-1/3 right-1/4 w-24 h-24 rounded-full opacity-15 animate-pulse",
          "bg-green-600",
          "bg-green-200"
        )}></div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <h2 className={themedClass(
            "text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-md",
            "text-green-200",
            "text-green-800"
          )}>
            Ready to Transform Your Health?
          </h2>

          <p className={themedClass(
            "text-md md:text-lg mb-10 leading-relaxed text-justify",
            "text-green-100",
            "text-green-900"
          )}>
            Your journey towards a healthier, happier life begins here. Our <span className={themedClass("font-semibold","text-green-400","text-green-700")}>wellness programs</span> are tailored to your lifestyle, combining <span className={themedClass("font-semibold","text-green-400","text-green-700")}>nutrition guidance</span>, <span className={themedClass("font-semibold","text-green-400","text-green-700")}>fitness coaching</span>, and <span className={themedClass("font-semibold","text-green-400","text-green-700")}>mindfulness practices</span> to create a holistic path to wellbeing.  
            With our team of experienced professionals, every step you take is supported, motivated, and guided so you can achieve sustainable results. Embrace a balanced approach to your health, unlock your potential, and experience the transformation that comes with taking care of your body, mind, and soul.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/blog"
                className={themedClass(
                  "px-10 py-4 rounded-full font-semibold text-lg shadow-md transition-all inline-block text-center",
                  "bg-[#00bfff] text-white",
                  "bg-white text-green-700"
                )}
              >
                View Blogs
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className={themedClass(
                  "border-2 px-10 py-4 rounded-full font-semibold text-lg transition-all inline-block text-center",
                  "border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white",
                  "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                )}
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* --- New Section 1: Success Stories --- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6 text-center",
          "bg-[#1E2A38] text-green-200",
          "bg-green-50 text-green-900"
        )}
      >
        <h2 className={themedClass(
          "text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-sm",
          "text-green-200",
          "text-green-800"
        )}>
          Success Stories
        </h2>
        <p className={themedClass(
          "max-w-4xl mx-auto text-lg md:text-xl mb-12 leading-relaxed",
          "text-green-100",
          "text-green-900"
        )}>
          Our clients have achieved amazing results and transformed their lives. These stories reflect their commitment, determination, and the guidance of our wellness programs.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-full">
          {[
  {
    icon: "💪",
    title: "Improved Fitness",
    desc: "Clients have gained strength, stamina, and confidence through personalized training programs."
  },
  {
    icon: "🧘",
    title: "Mindful Lifestyle",
    desc: "Individuals have incorporated mindfulness and stress management techniques into their daily routine."
  },
  {
    icon: "🌱",
    title: "Better Nutrition",
    desc: "Clients report healthier eating habits and improved energy levels thanks to tailored nutrition plans."
  }
].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              className={themedClass(
                "relative bg-gradient-to-br rounded-2xl shadow-md overflow-hidden p-8 transition-all",
                "from-[#22304a] to-[#1E2A38]",
                "from-green-100 to-green-200"
              )}
            >
              {/* Accent strip on top */}
              <div className={themedClass(
                "absolute top-0 left-0 w-full h-2",
                "bg-green-400",
                "bg-green-600"
              )}></div>

              {/* Icon in circle */}
              <div className={themedClass(
                "flex items-center justify-center w-20 h-20 rounded-full text-4xl mb-6 mx-auto shadow-md",
                "bg-green-700 text-white",
                "bg-green-600 text-white"
              )}>
                {item.icon}
              </div>

              <h3 className={themedClass(
                "text-2xl font-bold mb-3",
                "text-green-200",
                "text-green-800"
              )}>{item.title}</h3>
              <p className={themedClass(
                "text-base md:text-lg leading-relaxed",
                "text-green-100",
                "text-green-900"
              )}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- New Section 2: Wellness Tips --- */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={themedClass(
          "w-full py-24 px-6",
          "bg-[#22304a]",
          "bg-green-50"
        )}
      >
        <h2 className={themedClass(
          "text-4xl md:text-5xl font-extrabold mb-16 drop-shadow-sm text-center",
          "text-green-200",
          "text-green-700"
        )}>
          Wellness Tips for a Healthier You
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {[
            {
              icon: "🥗",
              title: "Eat Balanced",
              desc: "Focus on whole foods, fruits, and vegetables for optimal energy and vitality throughout your day. Avoid processed foods and sugary drinks for better health."
            },
            {
              icon: "💤",
              title: "Sleep Well",
              desc: "Maintain a regular sleep schedule, reduce screen time before bed, and create a calming nighttime routine. Quality sleep helps your body recover and rejuvenate."
            },
            {
              icon: "🏃‍♂️",
              title: "Stay Active",
              desc: "Incorporate movement into your daily routine—walk, stretch, or exercise regularly to keep your body agile and strong. Even 30 minutes a day makes a difference."
            }
          ].map((tip, idx) => ( 
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full"
            >
              {/* Icon in larger circle */}
              <div className={themedClass(
                "flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full text-4xl md:text-6xl flex items-center justify-center shadow-lg",
                "bg-green-700 text-white",
                "bg-green-700 text-white"
              )}>
                {tip.icon}
              </div>

              {/* Text */}
              <div className="text-left flex-1">
                <h3 className={themedClass(
                  "text-2xl md:text-3xl font-bold mb-3",
                  "text-green-200",
                  "text-green-800"
                )}>{tip.title}</h3>
                <p className={themedClass(
                  "text-lg md:text-xl leading-relaxed",
                  "text-green-100",
                  "text-green-900"
                )}>
                  {tip.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --- New Section 3: Book a Workshop --- */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={themedClass(
          "relative py-32 px-4 sm:px-6 lg:px-8 text-center",
          "text-white",
          "text-green-900"
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className={themedClass(
            "text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg",
            "text-white",
            "text-green-900"
          )}>
            Join Our Interactive Workshops
          </h2>
          <p className={themedClass(
            "text-lg md:text-xl mb-12 text-justify drop-shadow-md",
            "text-green-100",
            "text-green-900"
          )}>
            Participate in our engaging wellness workshops designed to provide
            practical skills and strategies for a healthier, happier lifestyle.
            Each session is crafted to empower you with knowledge and hands-on
            techniques you can apply every day.
          </p>

          {/* ✅ Individual button (no loop) */}
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className={themedClass(
              "inline-block px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all",
              "bg-white text-green-600",
              "bg-green-700 text-white"
            )}
          >
            Register Now
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;

