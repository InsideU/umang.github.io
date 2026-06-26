/* =========================================================
   UMANG INFRASTRUCTURE — shared content store
   Used by both index.html (public site) and admin.html (editor).
   Content lives in localStorage so edits persist in the browser.
   Use the admin panel's "Export" button to download content.json
   (and commit it) for permanent, shared changes.
   ========================================================= */

const STORE_KEY = "umangSiteContent_v1";

/* Default content — mirrors the original site copy. */
const DEFAULT_CONTENT = {
  company: {
    name: "UMANG",
    nameSuffix: "INFRASTRUCTURE",
    tagline: "We are the firm that builds your dream",
    intro:
      "A leading infrastructure company with over 10 years of specialised experience in water treatment, supply and recycling across Bihar.",
    established: "2006"
  },
  hero: [
    {
      kicker: "The Best Company",
      title: "We are the firm that builds your dream",
      text: "Quality construction and water infrastructure, delivered on time, every time."
    },
    {
      kicker: "Our Values",
      title: "In the business of quality service",
      text: "We're committed to high standards, safe water, and a protected environment."
    },
    {
      kicker: "Our Goal",
      title: "Quality project delivery, on time",
      text: "We are bound by our commitment to deliver every project to specification and schedule."
    }
  ],
  about: {
    heading: "Project Maintenance",
    body:
      "Established in 2006, Umang Infrastructure is a leading infrastructure firm with over 10 years of specialised experience in the field of water.",
    points: [
      "Managed and implemented over 50 projects in Bihar",
      "World-class infrastructure for water treatment",
      "Waste water handling",
      "Treatment and recycling of water",
      "Quality construction in rural as well as urban areas"
    ],
    image: "img/about/1.jpg"
  },
  services: [
    { icon: "fa-clock-o", title: "Time Matters", text: "We are bound by our commitment to ensure project delivery on time." },
    { icon: "fa-building", title: "High Quality", text: "We prioritise our principles of adhering to high quality standards." },
    { icon: "fa-tint", title: "Safe Water", text: "Making safe drinking water available and affordable to all." },
    { icon: "fa-leaf", title: "Protect Environment", text: "We care deeply about the environment in everything we build." },
    { icon: "fa-handshake-o", title: "Our People", text: "Our employees are our strength, so we focus on their development." },
    { icon: "fa-share-alt", title: "We Share", text: "We share knowledge and experience to help develop our nation." }
  ],
  team: [
    { name: "Anil Kumar Singh", role: "Director", image: "img/team/1.jpg" },
    { name: "Anita Kumari", role: "Managing Director", image: "img/team/2.jpg" },
    { name: "Anand Mohan Mishra", role: "Manager, Operations", image: "img/team/3.jpg" },
    { name: "Prashant Kumar", role: "Manager, Finance", image: "img/team/4.jpg" }
  ],
  portfolio: [
    { title: "Water Tower", category: "Construction", image: "img/portfolio/1.jpg" },
    { title: "Water Tower", category: "Infrastructure", image: "img/portfolio/2.jpg" },
    { title: "Dansar Water Tower", category: "Construction", image: "img/portfolio/3.jpg" },
    { title: "Kankhudiya Water Tower", category: "Construction", image: "img/portfolio/4.jpg" },
    { title: "Jalagar Block Water Tower", category: "Infrastructure", image: "img/portfolio/5.jpg" },
    { title: "Night Hill Project", category: "Construction", image: "img/portfolio/6.jpg" }
  ],
  contact: {
    phone: "+91 6454244252",
    hours: "Monday – Saturday (9am – 5pm)",
    email: "ui@umanginfra.com",
    address: "Teachers Colony, near Sudin Chowk, Purnia – 854301, Bihar"
  }
};

/* Deep clone helper (defaults are immutable). */
function _clone(o) {
  return JSON.parse(JSON.stringify(o));
}

/* Load content from localStorage, falling back to defaults.
   Missing keys are back-filled so older saves stay valid. */
function loadContent() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return _clone(DEFAULT_CONTENT);
    const saved = JSON.parse(raw);
    return Object.assign(_clone(DEFAULT_CONTENT), saved);
  } catch (e) {
    console.warn("Could not read saved content, using defaults.", e);
    return _clone(DEFAULT_CONTENT);
  }
}

/* Persist content to localStorage. */
function saveContent(content) {
  localStorage.setItem(STORE_KEY, JSON.stringify(content));
}

/* Wipe saved edits and return to defaults. */
function resetContent() {
  localStorage.removeItem(STORE_KEY);
  return _clone(DEFAULT_CONTENT);
}
