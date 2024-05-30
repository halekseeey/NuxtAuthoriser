/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.tsx",
    "./layouts/**/*.vue",
    "./pages/**/*.{tsx, vue}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "form-description": ["15px", "24px"],
        "form-title": ["40px", "24px"],
        button: ["20px", "24px"],
        "form-notification": ["16px", "24px"],
        "form-text": ["18px", "24px"],
        "form-otp-description": ["20px", "24px"],
      },
      fontWeight: {
        medium: 500,
      },
      colors: {
        "input-bg": "#8098F9",
        icon: "#2D31A6",
        "form-description": "#71717A",
        "form-notification": "#71717A",
        "form-otp-description": "#71717A",
      },
      padding: {
        10: "10px",
        50: "50px",
      },
      width: {
        icon: "30px",
        input: "453px",
        inputDigit: "64px",
      },
      height: {
        icon: "30px",
        input: "64px",
        inputDigit: "64px",
      },
    },
  },
  plugins: [],
};
