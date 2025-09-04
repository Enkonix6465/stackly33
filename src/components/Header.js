import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-dark.png";

// Add translations for navigation menu
const navTranslations = {
  en: {
    home: "Home",
    home1: "Home 1",
    home2: "Home 2",
    about: "About Us",
    services: "Services",
    allServices: "All Services",
    nutrition: "Personalized Nutrition",
    mindful: "Mindful Movement",
    sleep: "Sleep Optimization",
    stress: "Stress Resilience",
    holistic: "Holistic Detox",
    wellness: "Wellness Coaching",
    blog: "Blog",
    contact: "Contact Us",
    admin: "Admin Dashboard",
    logout: "Logout",
    language: "Language",
    toggleLight: "Toggle Light Mode",
    toggleDark: "Toggle Dark Mode",
  },
  ar: {
    home: "الرئيسية",
    home1: "الرئيسية 1",
    home2: "الرئيسية 2",
    about: "معلومات عنا",
    services: "الخدمات",
    allServices: "كل الخدمات",
    nutrition: "التغذية الشخصية",
    mindful: "الحركة الذهنية",
    sleep: "تحسين النوم",
    stress: "المرونة ضد التوتر",
    holistic: "إزالة السموم الشاملة",
    wellness: "تدريب العافية",
    blog: "مدونة",
    contact: "اتصل بنا",
    admin: "لوحة الإدارة",
    logout: "تسجيل خروج",
    language: "اللغة",
    toggleLight: "تبديل إلى الوضع الفاتح",
    toggleDark: "تبديل إلى الوضع الداكن",
  },
  he: {
    home: "בית",
    home1: "בית 1",
    home2: "בית 2",
    about: "אודות",
    services: "שירותים",
    allServices: "כל השירותים",
    nutrition: "תזונה מותאמת אישית",
    mindful: "תנועה מודעת",
    sleep: "אופטימיזציה לשינה",
    stress: "חוסן ללחץ",
    holistic: "ניקוי הוליסטי",
    wellness: "אימון בריאות",
    blog: "בלוג",
    contact: "צור קשר",
    admin: "לוח מנהל",
    logout: "התנתקות",
    language: "שפה",
    toggleLight: "החלף למצב בהיר",
    toggleDark: "החלף למצב כהה",
  },
};

function Header(props) {
  const navigate = useNavigate();

  const initials = "AB"; // Replace with user initials logic
  const email = localStorage.getItem("email") || "";
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const avatarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const homeDropdownTimeout = useRef();
  const servicesDropdownTimeout = useRef();

  // RTL support for Arabic/Hebrew
  const isRTL = language === "ar" || language === "he";

  // Theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("theme-changed"));
  };

  // Utility for theme classes
  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  // Utility for dropdown background
  const themedDropdown = theme === "dark"
    ? "bg-[#2d1847] border border-purple-900 text-white"
    : "bg-white border border-gray-200 text-gray-800";

  // Language change handler: update localStorage and dispatch event
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.dispatchEvent(new Event("language-changed"));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#000] border-b border-[#141B25]"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-20 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/home1")}
              className="focus:outline-none"
              aria-label="Go to home"
            >
              <img src={logo} alt="Logo" className="h-6 sm:h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden min-[480px]:flex items-center ${
              isRTL ? "space-x-reverse" : ""
            }`}
            style={{ gap: 20 }}
          >
            {/* Home Dropdown */}
            <div
              ref={homeRef}
              className="relative"
              onMouseEnter={() => {
                if (homeDropdownTimeout.current)
                  clearTimeout(homeDropdownTimeout.current);
                setIsHomeDropdownOpen(true);
              }}
              onMouseLeave={() => {
                homeDropdownTimeout.current = setTimeout(
                  () => setIsHomeDropdownOpen(false),
                  200
                );
              }}
            >
              <button
                className={`flex items-center px-2 py-1 rounded ${
                  theme === "dark" ? "text-white" : "text-black"
                } hover:text-purple-500 focus:outline-none`}
                aria-haspopup="true"
                aria-expanded={isHomeDropdownOpen}
              >
                {navTranslations[language].home}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isHomeDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 w-48 rounded-md shadow-lg py-2 z-50 ${themedDropdown} ${isRTL ? "right-0 left-auto" : "left-0"}`}
                >
                  <Link
                    to="/home1"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].home1}
                  </Link>
                  <Link
                    to="/home2"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].home2}
                  </Link>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`px-2 py-1 rounded ${
                theme === "dark" ? "text-white" : "text-black"
              } hover:text-purple-500`}
            >
              {navTranslations[language].about}
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                if (servicesDropdownTimeout.current)
                  clearTimeout(servicesDropdownTimeout.current);
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesDropdownTimeout.current = setTimeout(
                  () => setIsServicesDropdownOpen(false),
                  200
                );
              }}
            >
              <button
                className={`flex items-center px-2 py-1 rounded ${
                  theme === "dark" ? "text-white" : "text-black"
                } hover:text-purple-500 focus:outline-none`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {navTranslations[language].services}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesDropdownOpen && (
                <div
                  className={`absolute top-full mt-2 w-56 rounded-md shadow-lg py-2 z-50 ${themedDropdown} ${isRTL ? "right-0 left-auto" : "left-0"}`}
                >
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].allServices}
                  </Link>
                  <Link
                    to="/Nutrition"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].nutrition}
                  </Link>
                  <Link
                    to="/Mindful"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].mindful}
                  </Link>
                  <Link
                    to="/Sleep"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].sleep}
                  </Link>
                  <Link
                    to="/Stress"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].stress}
                  </Link>
                  <Link
                    to="/Holistic"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].holistic}
                  </Link>
                  <Link
                    to="/Wellness"
                    className="block px-4 py-2 hover:bg-purple-900/20"
                  >
                    {navTranslations[language].wellness}
                  </Link>
                </div>
              )}
            </div>

            {/* Blog & Contact */}
            <Link
              to="/blog"
              className={`px-2 py-1 rounded ${
                theme === "dark" ? "text-white" : "text-black"
              } hover:text-purple-500`}
            >
              {navTranslations[language].blog}
            </Link>
            <Link
              to="/contact"
              className={`px-2 py-1 rounded ${
                theme === "dark" ? "text-white" : "text-black"
              } hover:text-purple-500`}
            >
              {navTranslations[language].contact}
            </Link>

            {/* Language Selector */}
            <div>
              <label className="sr-only">{navTranslations[language].language}</label>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={navTranslations[language].language}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="he">עברית</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <button
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-purple-100 border-purple-300 hover:bg-purple-200"
              }`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.07 4.93l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Avatar */}
            <div
              ref={avatarRef}
              className="relative"
              onClick={() => setIsAvatarDropdownOpen((prev) => !prev)}
            >
              <button
                className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500 text-white font-semibold focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isAvatarDropdownOpen}
              >
                {initials}
              </button>

              {isAvatarDropdownOpen && (
                <div
                  className={`absolute mt-2 w-44 rounded-md shadow-lg py-2 z-50 ${themedDropdown} ${isRTL ? "left-0 right-auto" : "right-0 left-auto"}`}
                >
                  {email === "admin@enkonix.in" && (
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-purple-900/20"
                      onClick={() => {
                        setIsAvatarDropdownOpen(false);
                        navigate("/admindashboard");
                      }}
                    >
                      {navTranslations[language].admin}
                    </button>
                  )}
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-purple-900/20"
                    onClick={() => {
                      localStorage.removeItem("email");
                      localStorage.removeItem("firstname");
                      localStorage.removeItem("lastname");
                      window.location.href = "/";
                    }}
                  >
                    {navTranslations[language].logout}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="min-[480px]:hidden ml-4 px-3 py-2 rounded bg-purple-500 text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`${theme === "dark" ? "bg-[#2d1847]" : "bg-white"} px-6 py-4 border-t`}
        >
          <nav className="space-y-4">
            {/* Home (expandable) */}
            <details>
              <summary className={`cursor-pointer py-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                {navTranslations[language].home}
              </summary>
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/home1" className="hover:text-purple-500">
                  {navTranslations[language].home1}
                </Link>
                <Link to="/home2" className="hover:text-purple-500">
                  {navTranslations[language].home2}
                </Link>
              </div>
            </details>

            {/* About */}
            <Link to="/about" className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-purple-500`}>
              {navTranslations[language].about}
            </Link>

            {/* Services (expandable) */}
            <details>
              <summary className={`cursor-pointer py-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
                {navTranslations[language].services}
              </summary>
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/services" className="hover:text-purple-500">
                  {navTranslations[language].allServices}
                </Link>
                <Link to="/Nutrition" className="hover:text-purple-500">
                  {navTranslations[language].nutrition}
                </Link>
                <Link to="/Mindful" className="hover:text-purple-500">
                  {navTranslations[language].mindful}
                </Link>
                <Link to="/Sleep" className="hover:text-purple-500">
                  {navTranslations[language].sleep}
                </Link>
                <Link to="/Stress" className="hover:text-purple-500">
                  {navTranslations[language].stress}
                </Link>
                <Link to="/Holistic" className="hover:text-purple-500">
                  {navTranslations[language].holistic}
                </Link>
                <Link to="/Wellness" className="hover:text-purple-500">
                  {navTranslations[language].wellness}
                </Link>
              </div>
            </details>

            {/* Blog & Contact */}
            <Link to="/blog" className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-purple-500`}>
              {navTranslations[language].blog}
            </Link>
            <Link to="/contact" className={`block ${theme === "dark" ? "text-white" : "text-black"} hover:text-purple-500`}>
              {navTranslations[language].contact}
            </Link>

            {/* Mobile Language Selector */}
            <div>
              <label className="block text-sm font-medium mb-1">{navTranslations[language].language}</label>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full border rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="he">עברית</option>
              </select>
            </div>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-full py-2 rounded-md border mt-3 flex items-center justify-center transition-colors ${
                theme === "dark"
                  ? "bg-purple-900 border-purple-700 hover:bg-purple-800 text-white"
                  : "bg-purple-100 border-purple-300 hover:bg-purple-200 text-purple-700"
              }`}
            >
              {theme === "dark"
                ? navTranslations[language].toggleLight
                : navTranslations[language].toggleDark}
            </button>

            {/* Avatar info + actions (mobile) */}
            <div className="border-t pt-4">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {initials} ({email || "guest"})
              </p>
              {email === "admin@enkonix.in" && (
                <button
                  className="block w-full text-left py-2 hover:text-purple-500"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/admindashboard");
                  }}
                >
                  {navTranslations[language].admin}
                </button>
              )}
              <button
                className="block w-full text-left py-2 hover:text-purple-500"
                onClick={() => {
                  localStorage.removeItem("email");
                  localStorage.removeItem("firstname");
                  localStorage.removeItem("lastname");
                  window.location.href = "/";
                }}
              >
                {navTranslations[language].logout}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;