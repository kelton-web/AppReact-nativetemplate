// Importing home translations
import enHome from "./home/en.json";
import frHome from "./home/fr.json";

// Importing settings translations
import enSettings from "./settings/en.json";
import frSettings from "./settings/fr.json";

// Exporting all translations grouped by language and namespace
export const resources = {
  en: {
    home: enHome,
    settings: enSettings
  },
  fr: {
    home: frHome,
    settings: frSettings
  }
};
