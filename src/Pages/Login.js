import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const THEME_KEY = "theme";

const Login = () => {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(THEME_KEY) || "light";
    }
    return "light";
  });

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

  // Helper for theme-based class
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
      // Store first and last name for avatar initials
      if (user.firstName) localStorage.setItem("firstname", user.firstName);
      if (user.lastName) localStorage.setItem("lastname", user.lastName);
      navigate("/home1");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError("User already exists with this email.");
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert("Signup successful! Please login.");
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  return (
    <div
      className={themedClass(
        "min-h-screen flex justify-center items-center transition-colors duration-500",
        "bg-gray-900",
        "bg-green-50"
      )}
      style={{ fontFamily: "Arial, sans-serif", position: "relative" }}
    >
      <div
        className={themedClass(
          "w-full max-w-md p-8 rounded-xl shadow-lg",
          "bg-[#1a1a1a] text-green-100",
          "bg-white text-green-900"
        )}
      >
        <h2
          className={themedClass(
            "text-3xl font-bold mb-6 text-center",
            "text-green-200",
            "text-green-700"
          )}
        >
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button
              type="submit"
              className={themedClass(
                "p-3 rounded font-semibold mt-2 transition",
                "bg-green-700 text-white hover:bg-green-600",
                "bg-green-600 text-white hover:bg-green-700"
              )}
            >
              Login
            </button>
            <p
              className={themedClass(
                "mt-2 cursor-pointer text-center underline",
                "text-green-200 hover:text-green-400",
                "text-green-700 hover:text-green-900"
              )}
              onClick={() => {
                setError("");
                setIsLogin(false);
              }}
            >
              Don't have an account? Sign Up
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-4">
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={signUpData.firstName}
              onChange={handleSignUpChange}
              required
            />
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={signUpData.lastName}
              onChange={handleSignUpChange}
              required
            />
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              required
            />
            <input
              className={themedClass(
                "p-3 rounded border focus:outline-none transition",
                "bg-[#222] border-green-700 text-green-100 focus:ring-2 focus:ring-green-400",
                "bg-green-50 border-green-400 text-green-900 focus:ring-2 focus:ring-green-700"
              )}
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              required
            />
            <button
              type="submit"
              className={themedClass(
                "p-3 rounded font-semibold mt-2 transition",
                "bg-green-700 text-white hover:bg-green-600",
                "bg-green-600 text-white hover:bg-green-700"
              )}
            >
              Sign Up
            </button>
            <p
              className={themedClass(
                "mt-2 cursor-pointer text-center underline",
                "text-green-200 hover:text-green-400",
                "text-green-700 hover:text-green-900"
              )}
              onClick={() => {
                setError("");
                setIsLogin(true);
              }}
            >
              Already have an account? Login
            </p>
          </form>
        )}

        {error && (
          <p
            className={themedClass(
              "mt-4 text-center font-semibold",
              "text-red-400",
              "text-red-600"
            )}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
