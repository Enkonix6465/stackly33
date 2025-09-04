import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const THEME_KEY = "theme";
const LANGUAGE_KEY = "language";

const translations = {
  en: {
    login: "Login",
    signup: "Sign Up",
    email: "Email",
    password: "Password",
    firstName: "First Name",
    lastName: "Last Name",
    loginBtn: "Login",
    signupBtn: "Sign Up",
    switchToSignup: "Don't have an account? Sign Up",
    switchToLogin: "Already have an account? Login",
    invalid: "Invalid email or password.",
    exists: "User already exists with this email.",
    success: "Signup successful! Please login.",
    light: "Light Mode",
    dark: "Dark Mode",
    selectLang: "Language",
  },
  ar: {
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    loginBtn: "دخول",
    signupBtn: "إنشاء حساب",
    switchToSignup: "ليس لديك حساب؟ أنشئ حساب",
    switchToLogin: "لديك حساب بالفعل؟ تسجيل الدخول",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    exists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    success: "تم إنشاء الحساب بنجاح! يرجى تسجيل الدخول.",
    light: "الوضع الفاتح",
    dark: "الوضع الداكن",
    selectLang: "اللغة",
  },
  he: {
    login: "התחברות",
    signup: "הרשמה",
    email: "אימייל",
    password: "סיסמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    loginBtn: "התחבר",
    signupBtn: "הרשם",
    switchToSignup: "אין לך חשבון? הרשם",
    switchToLogin: "כבר יש לך חשבון? התחבר",
    invalid: "אימייל או סיסמה שגויים.",
    exists: "משתמש כבר קיים עם אימייל זה.",
    success: "ההרשמה הצליחה! אנא התחבר.",
    light: "מצב בהיר",
    dark: "מצב כהה",
    selectLang: "שפה",
  },
};

const Login = () => {
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

  // Language state
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LANGUAGE_KEY) || "en";
    }
    return "en";
  });

  // Listen to theme/language changes from storage or custom event
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem(THEME_KEY) || "light");
    };
    const handleLangChange = () => {
      setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
    };
    window.addEventListener("theme-changed", handleThemeChange);
    window.addEventListener("storage", handleThemeChange);
    window.addEventListener("language-changed", handleLangChange);
    window.addEventListener("storage", handleLangChange);
    return () => {
      window.removeEventListener("theme-changed", handleThemeChange);
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("language-changed", handleLangChange);
      window.removeEventListener("storage", handleLangChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
    window.dispatchEvent(new Event("theme-changed"));
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem(LANGUAGE_KEY, e.target.value);
    window.dispatchEvent(new Event("language-changed"));
  };

  const t = translations[language] || translations.en;
  const isRTL = language === "ar" || language === "he";

  const themedClass = (base, dark, light) =>
    `${base} ${theme === "dark" ? dark : light}`;

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSignUpChange = (e) =>
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (
      loginData.email === "admin@enkonix.in" &&
      loginData.password === "admin123"
    ) {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      navigate("/Admindashboard");
      return;
    }

    const user = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", JSON.stringify(user));
      if (user.firstName) localStorage.setItem("firstname", user.firstName);
      if (user.lastName) localStorage.setItem("lastname", user.lastName);
      navigate("/home1");
    } else {
      setError(t.invalid);
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError(t.exists);
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert(t.success);
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  return (
    <div
      className={themedClass(
        "min-h-screen flex justify-center items-center relative overflow-hidden transition-colors duration-500",
        "bg-black text-white",
        "bg-white text-gray-900"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Theme & Language toggle */}
      <div className={`absolute top-6 right-6 flex gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
        <select
          value={language}
          onChange={handleLanguageChange}
          className={themedClass(
            "px-3 py-2 rounded-full font-semibold shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400",
            "bg-purple-800 text-white",
            "bg-purple-200 text-purple-900"
          )}
          aria-label={t.selectLang}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>
        <button
          onClick={toggleTheme}
          className={themedClass(
            "px-4 py-2 rounded-full font-semibold shadow-md transition-all",
            "bg-purple-800 hover:bg-purple-700 text-white",
            "bg-purple-200 hover:bg-purple-300 text-purple-900"
          )}
        >
          {theme === "dark" ? t.light : t.dark}
        </button>
      </div>

      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 rounded-full blur-3xl opacity-50"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-40"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Login/Signup Card */}
      <motion.div
        className={themedClass(
          "w-full max-w-md p-10 rounded-3xl relative z-10 shadow-2xl border border-purple-700",
          "bg-gray-900 text-white",
          "bg-white text-gray-900"
        )}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-purple-500"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          {isLogin ? t.login : t.signup}
        </motion.h2>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <motion.input
              className={themedClass(
                "p-4 rounded-xl border focus:outline-none transition-all",
                "bg-gray-800 border-purple-500 text-white focus:ring-2 focus:ring-purple-400",
                "bg-purple-50 border-purple-400 text-gray-900 focus:ring-2 focus:ring-purple-400"
              )}
              type="email"
              name="email"
              placeholder={t.email}
              value={loginData.email}
              onChange={handleLoginChange}
              whileFocus={{ scale: 1.02 }}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
            <motion.input
              className={themedClass(
                "p-4 rounded-xl border focus:outline-none transition-all",
                "bg-gray-800 border-purple-500 text-white focus:ring-2 focus:ring-purple-400",
                "bg-purple-50 border-purple-400 text-gray-900 focus:ring-2 focus:ring-purple-400"
              )}
              type="password"
              name="password"
              placeholder={t.password}
              value={loginData.password}
              onChange={handleLoginChange}
              whileFocus={{ scale: 1.02 }}
              required
              dir={isRTL ? "rtl" : "ltr"}
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,0,128,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full font-bold mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all"
            >
              {t.loginBtn}
            </motion.button>
            <p
              className="mt-2 cursor-pointer text-center text-purple-300 hover:text-purple-500 underline"
              onClick={() => {
                setError("");
                setIsLogin(false);
              }}
            >
              {t.switchToSignup}
            </p>
          </form>
        ) : (
          // Signup Form
          <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
            {["firstName", "lastName", "email", "password"].map((field) => (
              <motion.input
                key={field}
                className={themedClass(
                  "p-4 rounded-xl border focus:outline-none transition-all",
                  "bg-gray-800 border-purple-500 text-white focus:ring-2 focus:ring-purple-400",
                  "bg-purple-50 border-purple-400 text-gray-900 focus:ring-2 focus:ring-purple-400"
                )}
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder={t[field]}
                value={signUpData[field]}
                onChange={handleSignUpChange}
                whileFocus={{ scale: 1.02 }}
                required
                dir={isRTL ? "rtl" : "ltr"}
              />
            ))}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(128,0,128,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full font-bold mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all"
            >
              {t.signupBtn}
            </motion.button>
            <p
              className="mt-2 cursor-pointer text-center text-purple-300 hover:text-purple-500 underline"
              onClick={() => {
                setError("");
                setIsLogin(true);
              }}
            >
              {t.switchToLogin}
            </p>
          </form>
        )}

        {error && (
          <motion.p
            className="mt-4 text-center font-semibold text-red-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Login;