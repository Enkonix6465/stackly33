import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/YM.jpg"; 
import backgroundImage2 from "../assets/N.jpg";
import backgroundImage3 from "../assets/MH.jpg";
import backgroundImage4 from "../assets/FC.jpg";
import backgroundImage5 from "../assets/Dp.jpg";
import backgroundImage6 from "../assets/SL.jpg";
import vedio from "../assets/Home22.mp4";
import { Link } from "react-router-dom";

import image7 from "../assets/wa.jpg";

const services = [
  { title: "Yoga & Meditation", desc: "Find inner peace and flexibility with guided yoga sessions.", img: backgroundImage },
  { title: "Nutrition Plans", desc: "Personalized diets designed by expert nutritionists.", img: backgroundImage2 },
  { title: "Mental Health Support", desc: "Support and tools to improve mindfulness and emotional well-being.", img: backgroundImage3 },
  { title: "Fitness Coaching", desc: "Custom workouts to strengthen your body and mind.", img: backgroundImage4 },
  { title: "Detox Programs", desc: "Cleanse your body and boost energy levels.", img: backgroundImage5 },
  { title: "Stress Relief", desc: "Relaxation techniques and mindfulness practices.", img: backgroundImage6 },
];

const achievements = [
  { number: 500, label: "Happy Clients" },
  { number: 120, label: "Wellness Programs" },
  { number: 50, label: "Expert Trainers" },
  { number: 10, label: "Years of Experience" },
];

const THEME_KEY = 'theme';

const Home2 = () => {
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

  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const intervals = achievements.map((item, index) => {
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
  }, []);

  return (
    <div className={themedClass(
      "font-sans min-h-screen transition-colors duration-500",
      "bg-gray-900 text-gray-100",
      "bg-white text-gray-800"
    )}>
      

      {/* Section 1: Hero Banner */}
      <section className={themedClass(
              "relative h-screen flex items-center justify-center",
              "bg-black",
              "bg-black"
            )}>
              <video
                src={vedio}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
                style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
                  Welcome to Health & Wellness
                </h1>
                <p className="text-lg md:text-2xl mb-6 animate-fadeInUp">
                  Your journey to a healthier lifestyle starts here
                </p>
                <a
                  href="/about"
                  className={themedClass(
                    "px-6 py-3 font-semibold rounded-lg shadow-lg transition duration-300 animate-fadeInUp",
                    "bg-[#00bfff] text-white hover:bg-green-600",
                    "bg-green-500 text-white hover:bg-green-600"
                  )}
                >
                  Know More
                </a>
              </div>
            </section>

      {/* Section 2: Our Services */}
      <section className={themedClass(
        "py-24 px-6",
        "bg-[#1E2A38]",
        "bg-green-50"
      )}>
        <h2 className={themedClass(
          "text-4xl font-extrabold text-center mb-16 animate-fadeInDown",
          "text-white",
          "text-green-800"
        )}>
          Our Wellness Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mx-auto">
          {services.map((service, i) => {
            let animationClass = i % 3 === 0 ? "animate-fadeInLeft" : i % 3 === 1 ? "animate-fadeInRight" : "animate-fadeInUp";
            return (
              <div
                key={i}
                className={themedClass(
                  `relative w-full h-72 overflow-hidden rounded-[100px_0_100px_0] cursor-pointer group ${animationClass}`,
                  "",
                  ""
                )}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className={themedClass(
                  "absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center",
                  "bg-black bg-opacity-60",
                  "bg-black bg-opacity-50"
                )}>
                  <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white text-sm md:text-base">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Animations */}
        <style>{`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeInDown { animation: fadeInDown 1s ease forwards; }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
          .animate-fadeInLeft { animation: fadeInLeft 1s ease forwards; }
          .animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
        `}</style>
      </section>

      {/* Section 3: About Us */}
      <section className={themedClass(
        "relative w-full py-28 px-6 overflow-hidden",
        "bg-[#22304a]",
        "bg-green-50"
      )}>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-green-300 rounded-full opacity-30 animate-blob animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 relative z-10 items-center">
          <div className="md:w-1/2 animate-fadeInLeft">
            <img
              src={image7}
              alt="wellness"
              className="rounded-3xl shadow-2xl transform transition duration-700 hover:scale-105 w-full max-h-96 object-cover"
            />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-400 rounded-full opacity-50 blur-3xl animate-blob animation-delay-1000"></div>
          </div>
          <div className="md:w-1/2 animate-fadeInRight">
            <h2 className={themedClass(
              "text-5xl font-extrabold mb-6 animate-slideInDown",
              "text-white",
              "text-green-800"
            )}>
              Who We Are
            </h2>
            <p className={themedClass(
              "text-lg mb-6 text-justify animate-slideInUp",
              "text-gray-300",
              "text-gray-700"
            )}>
              We are a passionate wellness team dedicated to helping you achieve balance in body, mind, and spirit. Our holistic approach combines science, nutrition, fitness, and mindfulness to empower you to live a healthier, more vibrant life. Each program is personalized to guide you toward sustainable habits and lasting well-being. With expert guidance and ongoing support, we ensure you stay motivated at every step. Together, let’s create a lifestyle that nurtures your health and happiness for years to come.

✨ We believe wellness is not a destination but a lifelong journey.
✨ Our mission is to inspire you to embrace positive change with confidence.
✨ Let us walk beside you as you unlock your full potential for a better tomorrow.
            </p>
           
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeInLeft { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
          @keyframes fadeInRight { 0% { opacity: 0; transform: translateX(50px); } 100% { opacity: 1; transform: translateX(0); } }
          @keyframes slideInDown { 0% { opacity: 0; transform: translateY(-40px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes slideInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
          .animate-fadeInLeft { animation: fadeInLeft 1s ease forwards; }
          .animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
          .animate-slideInDown { animation: slideInDown 0.8s ease forwards; }
          .animate-slideInUp { animation: slideInUp 0.8s ease forwards; }
          .animate-fadeInUp { animation: slideInUp 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } }
          .animate-blob { animation: blob 6s infinite; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}</style>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className={themedClass(
        "w-full py-28 px-6 relative overflow-hidden",
        "bg-[#1E2A38]",
        "bg-white"
      )}>
        <h2 className={themedClass(
          "text-4xl font-extrabold text-center mb-16 animate-zoomIn",
          "text-white",
          "text-green-800"
        )}>
          What Our Clients Say About Us
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              position: "Fitness Enthusiast",
              testimonial: "The wellness programs transformed my lifestyle. I feel more energetic, focused, and happy than ever!",
              img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              name: "Michael Lee",
              position: "Entrepreneur",
              testimonial: "The team is amazing! Their personalized guidance helped me manage stress and improve my health holistically.",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Emma Davis",
              position: "Teacher",
              testimonial: "I highly recommend their services. The mindfulness and nutrition plans made a huge difference in my daily life.",
              img: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map((client, i) => (
            <div
              key={i}
              className={themedClass(
                "relative rounded-3xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl animate-zoomIn",
                "bg-[#22304a]",
                "bg-green-50"
              )}
              style={{ animationDelay: `${i * 300}ms` }}
            >
              <img
                src={client.img}
                alt={client.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-green-600 object-cover transform transition duration-500 hover:rotate-6 hover:scale-110"
              />
              <p className={themedClass(
                "mb-4",
                "text-gray-300",
                "text-gray-700"
              )}>{client.testimonial}</p>
              <h4 className={themedClass(
                "text-lg font-semibold",
                "text-white",
                "text-green-800"
              )}>{client.name}</h4>
              <span className={themedClass(
                "text-sm",
                "text-gray-400",
                "text-gray-500"
              )}>{client.position}</span>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes zoomIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-zoomIn { animation: zoomIn 0.8s ease forwards; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-900 { animation-delay: 0.9s; }
        `}</style>
      </section>

      {/* Section 5: Blog Highlights */}
      <section className={themedClass(
        "py-20 px-6 text-center",
        "bg-[#22304a]",
        "bg-white"
      )}>
        <h2 className={themedClass(
          "text-4xl font-semibold mb-12 animate-fadeInUp",
          "text-white",
          ""
        )}>Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Mindful Living", "Healthy Recipes", "Workout Tips"].map((blog, i) => (
            <div key={i} className={themedClass(
              "rounded-2xl p-6 shadow hover:scale-105 transform transition animate-fadeInUp",
              "bg-[#1E2A38] text-white",
              "bg-green-50 text-gray-700"
            )} style={{ animationDelay: `${i * 0.2}s` }}>
              <h3 className={themedClass(
                "text-2xl font-semibold mb-2",
                "text-white",
                "text-green-800"
              )}>{blog}</h3>
              <p className={themedClass(
                "",
                "text-gray-300",
                "text-gray-700"
              )}>Helpful insights to keep you inspired and motivated every day.</p>
            </div>
          ))}
        </div>
      </section>

    
      

      {/* Section 7cd: Contact CTA */}
      <section
      className="relative w-full py-24 px-6 text-center overflow-hidden transition-colors duration-500"
      style={{
        backgroundImage: `url(${backgroundImage6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 text-left md:text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
         Ready to Start Your Journey?
        </h2>

        <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Have questions or need guidance on your wellness journey? Reach out to
          us today.
        </p>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-block text-center bg-[green] hover:bg-green-600 text-white"
        >
          Contact Us
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Home2;
