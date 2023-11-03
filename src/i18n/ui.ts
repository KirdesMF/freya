export const showDefaultLang = false;
export const defaultLang = "fr";

export const languages = {
  en: "English",
  fr: "Français",
  nl: "Dutch",
};

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.prices": "Tarifs",
    "nav.contact": "Contact",
    conditions: "Conditions générales",
    host: "Hébergé par",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.prices": "Pricing",
    "nav.contact": "Contact",
    conditions: "Terms and conditions",
    host: "Hosted by",
  },
  nl: {
    "nav.home": "Thuis",
    "nav.about": "Over",
    "nav.prices": "Prijzen",
    "nav.contact": "Contact",
    conditions: "Algemene voorwaarden",
    host: "Gehost door",
  },
} as const;
