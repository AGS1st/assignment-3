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