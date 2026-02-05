const state = {
  lang: "es",
};

const translations = {
  es: {
    tagline: "Innovación nómada con IA",
    cta: "Hablemos",
    heroEyebrow: "Software + IA sin fronteras",
    heroTitle: "Creamos experiencias digitales para el mundo real y el mundo virtual.",
    heroText:
      "Somos una organización creativa que diseña, desarrolla y escala productos digitales, desde apps y plataformas web hasta videojuegos y agentes inteligentes.",
    heroPrimary: "Explorar proyectos",
    heroSecondary: "Ver capacidades",
    stat1: "Modelos de IA prototipados",
    stat2: "Áreas creativas activas",
    stat3: "Operación remota",
    servicesEyebrow: "Capacidades",
    servicesTitle: "Soluciones integrales para cada etapa de tu producto.",
    servicesText:
      "De la estrategia a la ejecución. Combinamos diseño, ingeniería y data para entregar resultados tangibles.",
    service1Title: "Apps & Web",
    service1Text:
      "Diseñamos interfaces elegantes y escalables con stacks modernos, performance optimizada y enfoque mobile-first.",
    service2Title: "Videojuegos",
    service2Text:
      "Prototipado rápido, narrativa interactiva y sistemas inmersivos para experiencias únicas.",
    service3Title: "IA & Automatización",
    service3Text: "Modelos inteligentes, chatbots, flujos automáticos y agentes que amplifican tu operación.",
    service4Title: "Ecosistemas digitales",
    service4Text: "Arquitecturas sólidas, integraciones API, DevOps y analítica para operar a escala global.",
    projectsEyebrow: "Portafolio",
    projectsTitle: "Proyectos vivos y en expansión.",
    projectsText: "Aquí puedes destacar entregas actuales y futuras. Cada categoría está preparada para crecer.",
    projectsWeb: "Web & Apps",
    projectsGames: "Videojuegos",
    projectsAi: "IA & Bots",
    methodEyebrow: "Cómo trabajamos",
    methodTitle: "Una mentalidad nómada, procesos ágiles.",
    method1Title: "Exploración",
    method1Text: "Entendemos la visión, el mercado y las métricas clave.",
    method2Title: "Diseño y prototipo",
    method2Text: "Modelamos experiencias, flujos IA y prototipos iterativos.",
    method3Title: "Desarrollo",
    method3Text: "Arquitectura escalable, integraciones y despliegues confiables.",
    method4Title: "Crecimiento",
    method4Text: "Monitoreo, mejoras continuas y evolución constante.",
    contactEyebrow: "Contacto",
    contactTitle: "Hablemos de tu próximo proyecto.",
    contactText: "Prepárate para conectar tu operación con IA, experiencias inmersivas y desarrollo a medida.",
    contactCardTitle: "Conecta directo",
    contactCardText: "Comparte tu idea y definimos un plan de acción. Contamos con procesos remotos y horarios flexibles.",
    formName: "Nombre",
    formEmail: "Email",
    formType: "Tipo de proyecto",
    formMessage: "Mensaje",
    formButton: "Enviar",
  },
  en: {
    tagline: "Nomadic innovation with AI",
    cta: "Let's talk",
    heroEyebrow: "Software + AI without borders",
    heroTitle: "We craft digital experiences for the real world and the virtual realm.",
    heroText:
      "We are a creative organization that designs, builds, and scales digital products — from apps and web platforms to videogames and intelligent agents.",
    heroPrimary: "Explore projects",
    heroSecondary: "See capabilities",
    stat1: "AI models prototyped",
    stat2: "Creative tracks active",
    stat3: "Remote operation",
    servicesEyebrow: "Capabilities",
    servicesTitle: "End-to-end solutions for every product stage.",
    servicesText:
      "From strategy to execution. We blend design, engineering, and data to deliver measurable impact.",
    service1Title: "Apps & Web",
    service1Text: "We design elegant, scalable interfaces with modern stacks, optimized performance, and mobile-first focus.",
    service2Title: "Videogames",
    service2Text: "Rapid prototyping, interactive storytelling, and immersive systems for unique experiences.",
    service3Title: "AI & Automation",
    service3Text: "Intelligent models, chatbots, automation flows, and agents that amplify your operations.",
    service4Title: "Digital ecosystems",
    service4Text: "Solid architectures, API integrations, DevOps, and analytics to operate at global scale.",
    projectsEyebrow: "Portfolio",
    projectsTitle: "Living projects that keep expanding.",
    projectsText: "Showcase current and upcoming launches. Each category is built to grow.",
    projectsWeb: "Web & Apps",
    projectsGames: "Videogames",
    projectsAi: "AI & Bots",
    methodEyebrow: "How we work",
    methodTitle: "A nomadic mindset with agile execution.",
    method1Title: "Discovery",
    method1Text: "We understand your vision, market, and key metrics.",
    method2Title: "Design & prototype",
    method2Text: "We model experiences, AI flows, and iterative prototypes.",
    method3Title: "Development",
    method3Text: "Scalable architecture, integrations, and reliable deployments.",
    method4Title: "Growth",
    method4Text: "Monitoring, continuous improvements, and constant evolution.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build your next project.",
    contactText: "Get ready to connect your operation with AI, immersive experiences, and bespoke development.",
    contactCardTitle: "Connect directly",
    contactCardText: "Share your idea and we’ll define an action plan. We work remotely with flexible schedules.",
    formName: "Name",
    formEmail: "Email",
    formType: "Project type",
    formMessage: "Message",
    formButton: "Send",
  },
};

const fallbackProjects = {
  web: [
    {
      title: "Nomad Byte Web",
      description: "Landing page para identidad y captación.",
    },
  ],
  games: [
    {
      title: "Proyecto en fase alpha",
      description: "Concepto abierto a narrativa y diseño de niveles.",
    },
  ],
  ai: [
    {
      title: "Bots de Discord",
      description: "Automatización y moderación inteligente para comunidades.",
    },
  ],
};

const supabaseConfig = {
  url: "",
  anonKey: "",
};

function translatePage() {
  const dictionary = translations[state.lang];
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });
}

function renderProjects(projects) {
  const targets = {
    web: document.getElementById("projectsWeb"),
    games: document.getElementById("projectsGames"),
    ai: document.getElementById("projectsAi"),
  };

  Object.entries(targets).forEach(([key, list]) => {
    list.innerHTML = "";
    projects[key].forEach((project) => {
      const item = document.createElement("li");
      item.className = "project-item";
      item.innerHTML = `<strong>${project.title}</strong><span>${project.description}</span>`;
      list.appendChild(item);
    });
  });
}

async function fetchSupabaseProjects() {
  if (!supabaseConfig.url || !supabaseConfig.anonKey || !window.supabase) {
    return null;
  }

  const client = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
  const { data, error } = await client.from("projects").select("title, description, category");
  if (error || !data) {
    console.warn("Supabase error", error);
    return null;
  }

  const mapped = {
    web: [],
    games: [],
    ai: [],
  };

  data.forEach((row) => {
    if (row.category === "web") {
      mapped.web.push(row);
    } else if (row.category === "games") {
      mapped.games.push(row);
    } else if (row.category === "ai") {
      mapped.ai.push(row);
    }
  });

  return mapped;
}

async function initProjects() {
  const supabaseProjects = await fetchSupabaseProjects();
  renderProjects(supabaseProjects || fallbackProjects);
}

document.getElementById("langToggle").addEventListener("click", () => {
  state.lang = state.lang === "es" ? "en" : "es";
  translatePage();
});

translatePage();
initProjects();
