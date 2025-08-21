import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaLeaf, FaHeartbeat, FaUsers, FaAward, FaHandsHelping } from 'react-icons/fa';
import { GiMeditation, GiFruitBowl, GiRunningShoe } from 'react-icons/gi';
import image from  '../assets/team1.jpg';
import image2 from  '../assets/team2.jpg';
import image3 from  '../assets/team3.jpg';
import vedio from '../assets/about.mp4';
import backgroundImage from '../assets/B2.jpg';
import image4 from '../assets/test1.jpg';
import image5 from '../assets/test2.jpg';
import image6 from '../assets/test3.jpg';

const THEME_KEY = 'theme';

const AboutUs = () => {
  // Theme state and effect (robust, cross-tab sync, SSR-safe)
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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Helper for theme-based class
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
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      img: image4,
      name: "Sarah Johnson",
      role: "Yoga Practitioner",
      quote: "Vitality Wellness transformed my approach to health. Their holistic methods helped me find balance in both body and mind.",
      extraText: ""
    },
    {
      img: image5,
      name: "Michael Chen",
      role: "Fitness Enthusiast",
      quote: "The personalized nutrition plan was a game-changer for my energy levels and overall performance.",
      extraText: ""
    },
    {
      img: image6,
      name: "Dr. Emily Rodriguez",
      role: "Medical Professional",
      quote: "As a physician, I appreciate their evidence-based yet compassionate approach to wellness.",
      extraText: ""
    }
  ];

  const stats = [
    { value: "10K+", label: "Happy Clients", icon: <FaUsers className="text-3xl" /> },
    { value: "15+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { value: "50+", label: "Expert Practitioners", icon: <FaHandsHelping className="text-3xl" /> },
    { value: "100%", label: "Natural Methods", icon: <FaLeaf className="text-3xl" /> }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={themedClass(
      "font-sans min-h-screen transition-colors duration-500",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-800"
    )}>
      

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={vedio} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col justify-center items-center h-full text-center text-white px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Wellness Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Where science meets compassion to create transformative health experiences
          </motion.p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className={themedClass(
                  "font-bold py-3 px-6 rounded-full shadow transition-all inline-block",
                  "bg-[#00bfff] text-white hover:bg-green-700",
                  "bg-green-600 text-white hover:bg-green-700"
                )}
              >
                Our Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className={themedClass(
                  "border-2 font-bold py-3 px-6 rounded-full shadow transition-all inline-block",
                  "border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white",
                  "border-green-600 text-green-600 hover:bg-green-50"
                )}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 1: Our Story */}
      <section className={themedClass(
        "w-full py-20 px-6",
        "bg-[#1E2A38]",
        "bg-white"
      )}>
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
                  alt="Our team"
                  className="rounded-lg shadow-xl w-full h-auto group-hover:shadow-2xl transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-500 p-4 rounded-lg shadow-lg group-hover:rotate-6 transition-transform duration-500">
                  <GiMeditation className="text-5xl text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible[0] ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2"
            >
              <h2 className={themedClass(
                "text-3xl md:text-4xl font-serif font-bold mb-6",
                "text-green-300",
                "text-green-600"
              )}>
                Our Story
              </h2>
              <p className={themedClass(
                "text-lg mb-8 text-justify leading-relaxed",
                "text-gray-300",
                "text-gray-800"
              )}>
                Founded in 2008, Vitality Wellness began as a small clinic with a big vision: to redefine holistic health by blending ancient wisdom with modern science. What started as a passion project between three health practitioners has grown into a thriving wellness center serving thousands each year, yet we've never lost our personal touch. Over the years, we have expanded our team, built specialized programs, and created a nurturing environment where every individual feels valued. From personalized wellness plans to community workshops, our journey has always been about inspiring transformation. Today, we stand as a trusted hub for those seeking balance, healing, and empowerment — proving that true wellness is not a destination but a lifelong journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className={themedClass(
                      "font-bold py-3 px-6 rounded-full shadow transition-all inline-block",
                      "bg-[#00bfff] text-white hover:bg-green-700",
                      "bg-green-600 text-white hover:bg-green-700"
                    )}
                  >
                    View Our Services
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className={themedClass(
                      "border-2 font-bold py-3 px-6 rounded-full transition-all inline-block",
                      "border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff] hover:text-white",
                      "border-green-600 text-green-600 hover:bg-green-50"
                    )}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Philosophy */}
      <section className={themedClass(
        "w-full py-20 px-6",
        "bg-[#22304a]",
        "bg-green-50"
      )}>
        <div className="w-full text-center">
          <motion.div
            initial="hidden"
            animate={isVisible[1] ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className={themedClass(
              "text-3xl md:text-4xl font-serif font-bold mb-6",
              "text-green-300",
              "text-green-600"
            )}>
              Our Philosophy
            </h2>
            <p className={themedClass(
              "max-w-4xl mx-auto text-lg mb-16 text-justify leading-relaxed",
              "text-gray-300",
              "text-gray-800"
            )}>
              We believe true wellness comes from addressing the whole person – body, mind, and spirit – with personalized, evidence-based care. Our philosophy is rooted in prevention, empowerment, and holistic healing practices that honor your individuality
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaHeartbeat className="text-5xl mb-4 text-green-500" />,
                  title: "Whole-Person Care",
                  desc: "We look beyond symptoms to address root causes and create sustainable health.",
                  animation: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
                },
                {
                  icon: <GiFruitBowl className="text-5xl mb-4 text-green-400" />,
                  title: "Prevention First",
                  desc: "Our focus is on building health rather than just fighting disease.",
                  animation: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
                },
                {
                  icon: <GiRunningShoe className="text-5xl mb-4 text-green-600" />,
                  title: "Empowerment",
                  desc: "We equip you with knowledge and tools for lifelong wellbeing.",
                  animation: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={item.animation}
                  initial="hidden"
                  animate={isVisible[1] ? "visible" : "hidden"}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={themedClass(
                    "p-8 rounded-xl shadow-md hover:shadow-xl transition-all",
                    "bg-[#1E2A38]",
                    "bg-white"
                  )}
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className={themedClass(
                    "text-xl font-bold mb-3",
                    "text-green-200",
                    "text-green-600"
                  )}>{item.title}</h3>
                  <p className={themedClass(
                    "text-justify",
                    "text-gray-300",
                    "text-gray-800"
                  )}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: By The Numbers */}
      <section className={themedClass(
        "w-full py-20 px-4",
        "bg-[#1E2A38] text-green-200",
        "bg-green-100 text-green-900"
      )}>
        <div className="w-full">
          <motion.div
            initial="hidden"
            animate={isVisible[2] ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              By The Numbers
            </h2>
            <p className="max-w-3xl mx-auto text-lg opacity-90">
              Our impact in the wellness community speaks for itself
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible[2] ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                className={themedClass(
                  "text-center p-8 rounded-xl backdrop-blur-sm hover:bg-opacity-90 transition-all shadow-md",
                  "bg-[#22304a] bg-opacity-70",
                  "bg-white bg-opacity-70"
                )}
              >
                <div className={themedClass(
                  "flex justify-center mb-4",
                  "text-green-300",
                  "text-green-600"
                )}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Meet The Team */}
      <section className={themedClass(
        "py-20 px-4 w-full",
        "bg-[#22304a]",
        "bg-white"
      )}>
        <motion.div
          initial="hidden"
          animate={isVisible[3] ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className={themedClass(
            "text-3xl md:text-4xl font-serif font-bold mb-6",
            "text-green-200",
            "text-green-600"
          )}>Meet The Team</h2>
          <p className={themedClass(
            "max-w-4xl mx-auto text-lg",
            "text-gray-300",
            "text-gray-800"
          )}>
            Our diverse team of experts brings together decades of experience across multiple healing disciplines.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-12">
          {[
            {
              name: "Dr. Deepak Chopra",
              role: "Integrative Physician",
              img: image3,
              hoverText: "Specializes in functional medicine and nutrition-based healing"
            },
            {
              name: "Dr. Andrew Weil",
              role: "Lead Physical Therapist",
              img: image2,
              hoverText: "Expert in movement therapy and pain management"
            },
            {
              name: "Dr. Mark Hyman",
              role: "Mindfulness Director",
              img: image,
              hoverText: "Developed our acclaimed stress reduction programs"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-85 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-green-300">{member.role}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                <p>{member.hoverText}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className={themedClass(
        "py-20 px-4 w-full font-poppins",
        "bg-[#1E2A38]",
        "bg-green-50"
      )}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={isVisible[4] ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className={themedClass(
              "text-3xl md:text-4xl font-bold mb-6",
              "text-green-200",
              "text-green-600"
            )}>In Their Words</h2>
            <p className={themedClass(
              "max-w-3xl mx-auto text-lg",
              "text-gray-300",
              "text-gray-800"
            )}>
              Hear from those who've experienced the Vitality difference. Our clients share their transformative journeys, improved health, and holistic wellness stories that reflect our commitment to mind-body harmony.
            </p>
          </motion.div>
          <div className="relative flex overflow-hidden h-96">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : (index < activeTestimonial ? -50 : 50)
                }}
                transition={{ duration: 0.6 }}
                className={themedClass(
                  `absolute inset-0 p-8 rounded-xl shadow-md flex flex-col items-center text-center ${activeTestimonial === index ? 'z-10' : 'z-0'}`,
                  "bg-[#22304a]",
                  "bg-white"
                )}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200"
                />
                <p className={themedClass(
                  "text-lg mb-6",
                  "text-gray-300",
                  "text-gray-800"
                )}>
                  {testimonial.quote} {testimonial.extraText}
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className={themedClass(
                    "",
                    "text-green-200",
                    "text-green-600"
                  )}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Join Us */}
      <section
        className={themedClass(
          "relative py-20 px-4 bg-fixed bg-cover bg-center w-full text-white",
          "",
          ""
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center max-w-6xl mx-auto z-10">
          <motion.div
            initial="hidden"
            animate={isVisible[5] ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white"
            >
              Begin Your Wellness Journey
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl mb-10 max-w-2xl mx-auto text-white"
            >
              Ready to experience the Vitality difference? We're here to guide you every step of the way.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className={themedClass(
                    "font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-block",
                    "bg-[#00bfff] text-white hover:bg-green-700",
                    "bg-white text-green-600"
                  )}
                >
                  Book a Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className={themedClass(
                    "bg-transparent border-2 font-bold py-3 px-8 rounded-full transition-all inline-block",
                    "border-[#00bfff] text-white hover:bg-[#00bfff] hover:text-white",
                    "border-green-600 text-white hover:bg-green-50 hover:text-green-600"
                  )}
                >
                  Explore Programs
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