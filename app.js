import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      eyebrow: "Studio de desarrollo con IA",
      title: "Creamos experiencias digitales nómadas, inteligentes y elegantes.",
      subtitle:
        "Desde apps y web hasta videojuegos y automatizaciones, diseñamos soluciones con un enfoque futurista y oscuro que conecta tecnología e imaginación.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
      badge1: "IA aplicada",
      badge2: "Experiencias inmersivas",
      badge3: "Escalabilidad total",
      logoLabel: "Tu logo aquí",
      cardTitle: "Nomad Byte Studio",
      cardBody:
        "Un laboratorio creativo para construir software, productos digitales y universos interactivos con IA.",
      cardBullet1: "Diseño + desarrollo integral",
      cardBullet2: "Automatización inteligente",
      cardBullet3: "Entrega rápida y flexible",
    },
    services: {
      title: "Servicios que evolucionan contigo",
      subtitle:
        "Creamos soluciones a medida para distintos formatos digitales, combinando creatividad, ingeniería y IA.",
      web: {
        title: "Web & Plataformas",
        body: "Sitios y plataformas escalables, rápidas y con identidad visual potente.",
      },
      apps: {
        title: "Apps & Sistemas",
        body: "Aplicaciones móviles y sistemas internos conectados con tus flujos de negocio.",
      },
      games: {
        title: "Videojuegos & Experiencias",
        body: "Narrativas interactivas, prototipos jugables y experiencias inmersivas.",
      },
      ai: {
        title: "IA & Automatización",
        body: "Bots, asistentes y procesos automáticos para potenciar productividad y creatividad.",
      },
    },
    projects: {
      title: "Proyectos en movimiento",
      subtitle:
        "Organiza tu portafolio por categorías. Conecta con Supabase para cargar tus proyectos en vivo.",
      note: "Conecta tu Supabase y reemplaza estas tarjetas con tus proyectos reales.",
      web: {
        title: "Web",
        sampleTitle: "Sitio corporativo interactivo",
        sampleBody: "Página web moderna con animaciones sutiles y panel de administración.",
      },
      games: {
        title: "Videojuegos",
        sampleTitle: "Prototipo narrativo",
        sampleBody: "Experiencia interactiva enfocada en storytelling y estética futurista.",
      },
      bots: {
        title: "Bots & IA",
        sampleTitle: "Bots de Discord inteligentes",
        sampleBody: "Automatización de comunidades y moderación con IA.",
      },
      apps: {
        title: "Apps & Sistemas",
        sampleTitle: "App de productividad nómada",
        sampleBody: "Herramienta para equipos distribuidos con dashboards inteligentes.",
      },
      tags: {
        inProgress: "En progreso",
        lab: "Laboratorio",
        active: "Activo",
        roadmap: "Roadmap",
      },
    },
    supabase: {
      title: "Supabase listo para conectar",
      subtitle: "Deja tus credenciales y sincroniza proyectos y contactos desde una base de datos.",
      cardTitle: "Credenciales",
      cardBody: "Reemplaza las variables en app.js con tu URL y tu API Key pública.",
      schemaTitle: "Tablas sugeridas",
      schemaBody: "Puedes crear estas tablas y luego añadir más campos según crezca tu estudio.",
    },
    contact: {
      title: "Conecta con Nomad Byte Studio",
      subtitle: "Cuéntanos sobre tu idea y te responderemos con una propuesta alineada a tu visión.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        submit: "Enviar mensaje",
        hint: "Este formulario está listo para integrarse con Supabase.",
      },
      info: {
        title: "Contacto directo",
        body: "También puedes escribirnos en redes o coordinar una reunión personalizada.",
        highlightTitle: "Disponible para colaborar",
        highlightBody: "Nuevas ideas, partners y proyectos en crecimiento.",
      },
    },
    footer: {
      tagline: "Exploramos tecnología, creamos futuro.",
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      cta: "Let’s talk",
    },
    hero: {
      eyebrow: "AI-powered development studio",
      title: "We craft nomadic, intelligent, and elegant digital experiences.",
      subtitle:
        "From apps and web to games and automation, we design solutions with a futuristic dark aesthetic that merges technology and imagination.",
      ctaPrimary: "Explore projects",
      ctaSecondary: "Get in touch",
      badge1: "Applied AI",
      badge2: "Immersive experiences",
      badge3: "Full scalability",
      logoLabel: "Your logo here",
      cardTitle: "Nomad Byte Studio",
      cardBody:
        "A creative lab to build software, digital products, and interactive universes with AI.",
      cardBullet1: "End-to-end design + development",
      cardBullet2: "Intelligent automation",
      cardBullet3: "Fast and flexible delivery",
    },
    services: {
      title: "Services that evolve with you",
      subtitle:
        "We build custom solutions for multiple digital formats, blending creativity, engineering, and AI.",
      web: {
        title: "Web & Platforms",
        body: "Scalable, fast sites and platforms with a bold visual identity.",
      },
      apps: {
        title: "Apps & Systems",
        body: "Mobile apps and internal systems connected to your business workflows.",
      },
      games: {
        title: "Games & Experiences",
        body: "Interactive narratives, playable prototypes, and immersive experiences.",
      },
      ai: {
        title: "AI & Automation",
        body: "Bots, assistants, and automated processes to boost productivity and creativity.",
      },
    },
    projects: {
      title: "Projects in motion",
      subtitle:
        "Organize your portfolio by category. Connect to Supabase to load your projects live.",
      note: "Connect Supabase and replace these cards with your real projects.",
      web: {
        title: "Web",
        sampleTitle: "Interactive corporate site",
        sampleBody: "Modern website with subtle animations and admin dashboard.",
      },
      games: {
        title: "Games",
        sampleTitle: "Narrative prototype",
        sampleBody: "Interactive experience focused on storytelling and futuristic aesthetics.",
      },
      bots: {
        title: "Bots & AI",
        sampleTitle: "Intelligent Discord bots",
        sampleBody: "Community automation and moderation with AI.",
      },
      apps: {
        title: "Apps & Systems",
        sampleTitle: "Nomad productivity app",
        sampleBody: "Tool for distributed teams with intelligent dashboards.",
      },
      tags: {
        inProgress: "In progress",
        lab: "Lab",
        active: "Active",
        roadmap: "Roadmap",
      },
    },
    supabase: {
      title: "Supabase ready to connect",
      subtitle: "Add your credentials and sync projects and contacts from a database.",
      cardTitle: "Credentials",
      cardBody: "Replace the variables in app.js with your URL and public API key.",
      schemaTitle: "Suggested tables",
      schemaBody: "Create these tables and add more fields as your studio grows.",
    },
    contact: {
      title: "Connect with Nomad Byte Studio",
      subtitle: "Tell us about your idea and we’ll reply with a proposal aligned to your vision.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
        hint: "This form is ready to integrate with Supabase.",
      },
      info: {
        title: "Direct contact",
        body: "You can also reach us on social media or schedule a tailored meeting.",
        highlightTitle: "Open to collaborate",
        highlightBody: "New ideas, partners, and growing projects.",
      },
    },
    footer: {
      tagline: "We explore technology, we build the future.",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
  },
};

const state = {
  lang: "es",
};

const langButtons = document.querySelectorAll(".lang-toggle");
const elements = document.querySelectorAll("[data-i18n]");

function translate(key, lang) {
  return key.split(".").reduce((acc, part) => acc?.[part], translations[lang]);
}

function applyTranslations(lang) {
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const value = translate(key, lang);
    if (value) {
      element.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    applyTranslations(state.lang);
  });
});

applyTranslations(state.lang);

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (SUPABASE_URL === "YOUR_SUPABASE_URL" || SUPABASE_ANON_KEY === "YOUR_SUPABASE_ANON_KEY") {
    alert("Configura SUPABASE_URL y SUPABASE_ANON_KEY en app.js.");
    return;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const { error } = await supabase.from("contacts").insert([
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
    },
  ]);

  if (error) {
    alert("Hubo un error al enviar el formulario.");
    return;
  }

  form.reset();
  alert("¡Mensaje enviado! Gracias por escribir.");
});
