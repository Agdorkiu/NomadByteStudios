const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const defaultLanguage = "es";
let translations = {};

const loadTranslations = async (lang) => {
  const response = await fetch(`i18n/${lang}.json`);
  if (!response.ok) {
    throw new Error("Missing translation file");
  }
  return response.json();
};

const applyTranslations = (langData) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = key.split(".").reduce((acc, part) => acc?.[part], langData);
    if (value) {
      element.textContent = value;
    }
  });
};

const setLanguage = async (lang) => {
  try {
    translations = await loadTranslations(lang);
    document.documentElement.lang = lang;
    applyTranslations(translations);
    localStorage.setItem("language", lang);
  } catch (error) {
    if (lang !== defaultLanguage) {
      setLanguage(defaultLanguage);
    }
  }
};

const setupLanguageSelect = () => {
  const select = document.querySelector("#languageSelect");
  if (!select) return;

  const saved = localStorage.getItem("language") || defaultLanguage;
  select.value = saved;
  setLanguage(saved);

  select.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
};

const setupFilters = () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      projects.forEach((project) => {
        const matches = filter === "all" || project.dataset.category === filter;
        project.style.display = matches ? "block" : "none";
      });
    });
  });
};

const setupContactForm = () => {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#formStatus");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      status.textContent = translations?.status?.missingConfig || "";
      return;
    }

    const { createClient } = window.supabase;
    const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      type: formData.get("type"),
      message: formData.get("message"),
      created_at: new Date().toISOString(),
    };

    const { error } = await client.from("contacts").insert([payload]);

    if (error) {
      status.textContent = translations?.status?.error || "";
      return;
    }

    form.reset();
    status.textContent = translations?.status?.success || "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSelect();
  setupFilters();
  setupContactForm();
});
