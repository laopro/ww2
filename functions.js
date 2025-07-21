function switchLang(lang) {
  document.querySelectorAll('.lang').forEach(el => el.classList.remove('visible'));
  const selected = document.getElementById(lang);
  if (selected) selected.classList.add('visible');

  const mensaje = {
    es: "Idioma cambiado a Español",
    en: "Language changed to English",
    fr: "Langue changée en Français",
    de: "Sprache auf Deutsch gewechselt",
    it: "Lingua cambiata in Italiano",
    pt: "Idioma alterado para Português"
  };
const cambio = document.getElementById("mensaje-cambio");
if (cambio) {
  cambio.textContent = mensaje[lang] || "Idioma cambiado";
}

  const textos = {
    titulo: {
      es: "Segunda Guerra Mundial",
      en: "World War II",
      fr: "Seconde Guerre mondiale",
      de: "Zweiter Weltkrieg",
      it: "Seconda Guerra Mondiale",
      pt: "Segunda Guerra Mundial"
    },
    descripcion: {
      es: "Conflicto global de 1939 a 1945",
      en: "Global conflict from 1939 to 1945",
      fr: "Conflit mondial de 1939 à 1945",
      de: "Globaler Konflikt von 1939 bis 1945",
      it: "Conflitto globale dal 1939 al 1945",
      pt: "Conflito global de 1939 a 1945"
    },
    selector: {
      es: "Selecciona idioma:",
      en: "Select language:",
      fr: "Choisir la langue:",
      de: "Sprache wählen:",
      it: "Seleziona la lingua:",
      pt: "Selecionar idioma:"
    },
    modoOscuro: {
      es: "Modo Oscuro",
      en: "Dark Mode",
      fr: "Mode Sombre",
      de: "Dunkler Modus",
      it: "Modalità Scura",
      pt: "Modo Escuro"
    },
    daltonismo: {
      es: "Daltonismo",
      en: "Colorblind",
      fr: "Daltonisme",
      de: "Farbenblindheit",
      it: "Daltonismo",
      pt: "Daltonismo"
    },
    extra: {
    tituloSeccionSellos: {
    es: "Validación técnica",
    en: "Technical Validation",
    fr: "Validation technique",
    de: "Technische Validierung",
    it: "Validazione tecnica",
    pt: "Validação técnica"
    },
    validacionJS: {
    es: "Código JS validado con JSHint (compatibilidad ES6 y sin errores)",
    en: "JS code validated with JSHint (ES6 compatible and error-free)",
    fr: "Code JS validé avec JSHint (compatible ES6 et sans erreur)",
    de: "JS-Code mit JSHint validiert (ES6-kompatibel und fehlerfrei)",
    it: "Codice JS validato con JSHint (compatibile con ES6 e senza errori)",
    pt: "Código JS validado com JSHint (compatível com ES6 e sem erros)"
    },
    accesibilidadWAI: {
    es: "Esta página sigue principios de accesibilidad de la WAI (Web Accessibility Initiative)",
    en: "This page follows accessibility principles from the WAI (Web Accessibility Initiative)",
    fr: "Cette page suit les principes d'accessibilité de la WAI (Web Accessibility Initiative)",
    de: "Diese Seite folgt den Barrierefreiheitsprinzipien der WAI (Web Accessibility Initiative)",
    it: "Questa pagina segue i principi di accessibilità della WAI (Web Accessibility Initiative)",
    pt: "Esta página segue os princípios de acessibilidade da WAI (Web Accessibility Initiative)"
    },
    estructuraSegura: {
    es: "Estructura modular y segura • Código limpio y validado • Compatible con navegadores modernos",
    en: "Modular and secure structure • Clean and validated code • Compatible with modern browsers",
    fr: "Structure modulaire et sécurisée • Code propre et validé • Compatible avec les navigateurs modernes",
    de: "Modulare und sichere Struktur • Sauberer und geprüfter Code • Kompatibel mit modernen Browsern",
    it: "Struttura modulare e sicura • Codice pulito e validato • Compatibile con browser moderni",
    pt: "Estrutura modular e segura • Código limpo e validado • Compatível com navegadores modernos"
    },
    },
    footer: {
      es: "Página creada por desarrolladores",
      en: "Page created by developers",
      fr: "Page créée par des développeurs",
      de: "Seite erstellt von Entwicklern",
      it: "Pagina creata da sviluppatori",
      pt: "Página criada por desenvolvedores"
    },
  };

  document.getElementById("titulo").textContent = textos.titulo[lang];
  document.querySelector("header p").textContent = textos.descripcion[lang];
  document.querySelector("label[for='langSelect']").textContent = textos.selector[lang];
  document.querySelectorAll(".options button")[0].textContent = textos.modoOscuro[lang];
  document.querySelectorAll(".options button")[1].textContent = textos.daltonismo[lang];
  document.querySelector("footer p").textContent = `2025 ©\n${textos.footer[lang]}`;
  document.getElementById("tituloSellos").textContent = textos.extra.tituloSeccionSellos[lang];
  document.getElementById("jsCheck").textContent = textos.extra.validacionJS[lang];
  document.getElementById("waiCheck").textContent = textos.extra.accesibilidadWAI[lang];
  document.getElementById("estructuraCheck").textContent = textos.extra.estructuraSegura[lang];

  localStorage.setItem('idiomaPreferido', lang);
}

function toggleMode() {
  document.body.classList.toggle('dark');
}

function toggleColorblind() {
  const overlay = document.getElementById('daltonismo-layer');
  overlay.classList.toggle('daltonismo-activo');
}

window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("idiomaPreferido");
  if (lang) switchLang(lang);
});
