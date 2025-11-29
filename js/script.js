const state = {
    secondsOnSite: 0,
    theme: "light",
    showWeather: true,
    weather: null,
    filteredWeather: null
};

const themeToggleBtn = document.getElementById("theme-toggle");
const toggleWeatherBtn = document.getElementById("toggle-projects");
const timeOnSiteSpan = document.getElementById("time-on-site");
const greeting = document.getElementById("greeting");

const visitorNameInput = document.getElementById("visitor-name");
const saveNameBtn = document.getElementById("save-name");

const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherResult = document.getElementById("weather-result");
const weatherError = document.getElementById("weather-error");
const tempFilterSelect = document.getElementById("temp-filter");
const conditionFilterSelect = document.getElementById("condition-filter");

const contactForm = document.getElementById("contact-form");
const contactNameInput = document.getElementById("contact-name");
const contactEmailInput = document.getElementById("contact-email");
const contactMessageInput = document.getElementById("");
const contactSubmitBtn = document.getElementById("contact-submit");
const contactSuccess = document.getElementById("contact-success");

const contactNameError = document.getElementById("contact-name-error");
const contactEmailError = document.getElementById("contact-email-error");
const contactMessageError = document.getElementById("contact-message-error");

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initName();
    startTimer();
    setupEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "dark") {
        document.body.classList.add("dark");
        state.theme = "dark";
        themeToggleBtn.texxtContent = "Switch to Light Mode";
    } else{
        state.theme = "light";
        themeToggleBtn.textContent = "Switch to Dark Mode";
    }
}

function toggleTheme() {
    if (state.theme === "light"){
        state.theme = "dark";
        document.body.classList.add(dark);
        themeToggleBtn.textContent = "Switch to Light Mode";
    } else {
        state.theme = "light";
        document.body.classList.remove("dark");
        themeToggleBtn.textContent = "Switch to Dark Mode";
    }
    localStorage.setItem("theme", state.theme);
}

function initNAme() {
    const savedName = localStorage.getItem("visitorName");
    if (savedName) {
        greeting.textContent = "Welcome back, ${savedName}!";
        visitorNameInput.value = savedName;
    }
}

