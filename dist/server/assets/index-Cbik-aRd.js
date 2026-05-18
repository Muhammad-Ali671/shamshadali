import { jsxs, jsx } from "react/jsx-runtime";
const portrait = "/assets/portrait-DLN3CLnW.jpg";
const logo1 = "/assets/logo1-qyFW3Jqv.jpg";
const logo2 = "/assets/logo2-D1VRhObV.jpg";
const logo3 = "/assets/logo3-CDFY5YHb.jpg";
const logo4 = "/assets/logo4-BI4-1H9Y.jpg";
const logo5 = "/assets/logo5-DrSa9YJU.jpg";
const logo6 = "/assets/logo6-B-hj_XTJ.jpg";
const logo7 = "/assets/logo7-CoArHZHT.jpg";
const logo8 = "/assets/logo8-CjIp1u0B.jpg";
const social1 = "/assets/social1-BxCx0kkh.jpg";
const social2 = "/assets/social2-CC_VNyWs.jpg";
const social3 = "/assets/social3-C50EIhpS.jpg";
const social4 = "/assets/social4-Cq66DaEw.jpg";
const social5 = "/assets/social5-Cc9nKBqE.jpg";
const social6 = "/assets/social6-DC7lWl-P.jpg";
const c1_1 = "/assets/c1-1-DKoS7teE.jpg";
const c1_2 = "/assets/c1-2-DEYTatZZ.jpg";
const c1_3 = "/assets/c1-3-fIUuKA5b.jpg";
const c1_4 = "/assets/c1-4-DriF1Boh.jpg";
const c1_5 = "/assets/c1-5-BXNwljA2.jpg";
const c1_6 = "/assets/c1-6-Ab8D3Oda.jpg";
const c1_7 = "/assets/c1-7-CcADSLeI.jpg";
const c1_8 = "/assets/c1-8-DeU5atwd.jpg";
const c2_1 = "/assets/c2-1-BIr6T1fX.jpg";
const c2_2 = "/assets/c2-2-BXJsmmaM.jpg";
const c2_3 = "/assets/c2-3-PbcPsCCH.jpg";
const c2_4 = "/assets/c2-4-DdsNReXh.jpg";
const c2_5 = "/assets/c2-5-DSyA7Cud.jpg";
const c3_1 = "/assets/c3-1-CZcMiJf4.jpg";
const c3_2 = "/assets/c3-2-BQxHEi9q.jpg";
const c3_3 = "/assets/c3-3-uoS81HCy.jpg";
const c3_4 = "/assets/c3-4-OlVA0Fd4.jpg";
const c3_5 = "/assets/c3-5-Ds2UUPFV.jpg";
const services = [{
  icon: "🎨",
  title: "Logo Design",
  desc: "Memorable brand marks that define identity and stand out across every touchpoint."
}, {
  icon: "📱",
  title: "Social Media Design",
  desc: "Scroll-stopping creatives for Instagram, Facebook, LinkedIn campaigns and ads."
}, {
  icon: "💻",
  title: "Web Design",
  desc: "Clean, modern UI layouts that convert visitors into loyal customers."
}, {
  icon: "🖨️",
  title: "Print Media Design",
  desc: "Posters, brochures, flyers and packaging crafted with pixel-perfect detail."
}];
const tools = ["Illustrator", "Photoshop", "Figma", "Canva", "InDesign", "Premiere Pro"];
const experience = [{
  co: "Techexa",
  role: "Graphic Designer",
  period: "Mar 2026 – Present",
  type: "Onsite"
}, {
  co: "VisaQuick Consultancy",
  role: "Graphic Designer",
  period: "Jan 2024 – Dec 2025",
  type: "Onsite"
}, {
  co: "Lumina Technologies",
  role: "Graphic Designer",
  period: "Aug 2024 – Present",
  type: "Freelance"
}, {
  co: "14 News HD",
  role: "Graphic Designer",
  period: "Jul 2024 – Feb 2025",
  type: "Freelance"
}, {
  co: "R&A Solicitors",
  role: "Graphic Designer",
  period: "Jan 2024 – May 2024",
  type: "Freelance"
}, {
  co: "Recruitment World",
  role: "Graphic Designer",
  period: "Feb 2021 – Dec 2024",
  type: "Freelance"
}, {
  co: "Al-Ahad-IINA",
  role: "Graphic Designer",
  period: "Nov 2022 – Dec 2023",
  type: "Freelance"
}, {
  co: "AMOQA",
  role: "Graphic Designer",
  period: "Jan 2021 – Aug 2022",
  type: "Freelance"
}, {
  co: "DigitalBaba",
  role: "Graphic Designer",
  period: "Jan 2020 – Nov 2021",
  type: "Onsite"
}];
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const socials = [social1, social2, social3, social4, social5, social6];
const carousels = [{
  title: "Techexa — Brand Story",
  desc: "Multi-slide LinkedIn carousel introducing Techexa's services and value proposition.",
  slides: [c1_1, c1_2, c1_3, c1_4, c1_5, c1_6, c1_7, c1_8]
}, {
  title: "Techexa — Service Highlights",
  desc: "Compact 5-slide carousel breaking down key offerings with bold typography.",
  slides: [c2_1, c2_2, c2_3, c2_4, c2_5]
}, {
  title: "Techexa — Campaign Series",
  desc: "Engagement-focused carousel designed for scroll-stopping social campaigns.",
  slides: [c3_1, c3_2, c3_3, c3_4, c3_5]
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("a", { href: "#top", className: "font-bold tracking-tighter text-sm md:text-base opacity-90 hover:opacity-100 transition truncate max-w-[200px] md:max-w-none", children: "https://www.behance.net/shamshadalimajeedi" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex gap-8 text-sm uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-foreground transition", children: "Services" }),
        /* @__PURE__ */ jsx("a", { href: "#experience", className: "hover:text-foreground transition", children: "Experience" }),
        /* @__PURE__ */ jsx("a", { href: "#work", className: "hover:text-foreground transition", children: "Work" }),
        /* @__PURE__ */ jsx("a", { href: "#tools", className: "hover:text-foreground transition", children: "Tools" }),
        /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-foreground transition", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/923479580079", target: "_blank", rel: "noreferrer", className: "bg-[oklch(0.7_0.18_150)] text-background px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition flex items-center gap-2", children: "💬 WhatsApp" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "top", className: "max-w-7xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8", children: "🇵🇰 Rawalpindi · Pakistan" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-[1.05] mb-6", children: [
          "Hi, I'm ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { style: {
            backgroundImage: "var(--gradient-hero)"
          }, className: "bg-clip-text text-transparent", children: "Shamshad Ali" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground mb-6 font-light", children: "Graphic Designer crafting impactful visuals for print & digital." }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground/80 mb-10 max-w-xl leading-relaxed", children: "Results-driven designer specializing in branding, social media designs, and creative solutions that help businesses stand out and connect with their audience." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "#work", className: "px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]", style: {
            backgroundImage: "var(--gradient-hero)"
          }, children: "View My Work →" }),
          /* @__PURE__ */ jsx("a", { href: "https://www.behance.net/shamshadalimajeedi", target: "_blank", rel: "noreferrer", className: "px-6 py-3 rounded-lg font-semibold border border-border hover:bg-secondary transition flex items-center gap-2", children: "🎨 Behance Portfolio" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: ["L", "V", "T", "R"].map((c) => /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background", children: c }, c)) }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-foreground", children: "9+ brands" }),
            " trusted my design work"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-3xl opacity-30 blur-3xl", style: {
          backgroundImage: "var(--gradient-hero)"
        } }),
        /* @__PURE__ */ jsx("img", { src: portrait, alt: "Shamshad Ali — Graphic Designer", className: "relative rounded-3xl border border-border w-full shadow-[var(--shadow-glow)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-2 text-xs", children: "⚡ Available for Projects" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-y border-border py-4 overflow-hidden bg-card/50", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap animate-[scroll_25s_linear_infinite] text-2xl font-bold text-muted-foreground/60", children: [..."Logo Design • Social Media • Branding • Web Design • Print Media • Visual Identity • Creative Solutions • ".repeat(3)] }) }),
    /* @__PURE__ */ jsxs("section", { id: "services", className: "max-w-7xl mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "What I Do" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-14 max-w-2xl", children: "Design services that move brands forward." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: services.map((s) => /* @__PURE__ */ jsxs("div", { className: "group bg-card border border-border rounded-2xl p-7 hover:border-primary/60 hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl mb-5", children: s.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.desc })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "experience", className: "bg-card/30 border-y border-border py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Career" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-14", children: "5+ years of design experience." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4", children: experience.map((e) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: e.co }),
          /* @__PURE__ */ jsx("span", { className: "text-xs bg-primary/15 text-primary px-2 py-1 rounded", children: e.type })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: e.role }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/70 mt-1", children: e.period })
      ] }, e.co + e.period)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "work", className: "max-w-7xl mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Portfolio" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-3", children: "Logo Design" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12", children: "A selection of brand identities I've crafted." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: logos.map((l, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:border-primary/60 hover:scale-105 transition", children: /* @__PURE__ */ jsx("img", { src: l, alt: `Logo design ${i + 1}`, className: "max-w-full max-h-full object-contain" }) }, i)) }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-24 mb-3", children: "Social Media Design" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12", children: "Campaign creatives & posters for global brands." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: socials.map((s, i) => /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-border group", children: /* @__PURE__ */ jsx("img", { src: s, alt: `Social media design ${i + 1}`, className: "w-full aspect-square object-cover group-hover:scale-105 transition duration-500" }) }, i)) }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mt-24 mb-3", children: "Carousel Design" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-12", children: "Multi-slide LinkedIn & Instagram carousels designed to inform, engage, and convert." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: carousels.map((c, idx) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-5 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold", children: c.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1 max-w-2xl", children: c.desc })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs uppercase tracking-widest text-primary whitespace-nowrap", children: [
            c.slides.length,
            " slides"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-smooth", children: c.slides.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex-shrink-0 snap-start w-[260px] md:w-[320px] aspect-square rounded-2xl overflow-hidden border border-border group hover:border-primary/60 transition", children: [
          /* @__PURE__ */ jsx("img", { src: s, alt: `${c.title} slide ${i + 1}`, className: "w-full h-full object-cover group-hover:scale-105 transition duration-500" }),
          /* @__PURE__ */ jsxs("span", { className: "absolute top-3 left-3 bg-background/80 backdrop-blur text-xs font-semibold px-2 py-1 rounded", children: [
            i + 1,
            " / ",
            c.slides.length
          ] })
        ] }, i)) })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "tools", className: "bg-card/30 border-y border-border py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Toolkit" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-14", children: "Tools that I use." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: tools.map((t) => /* @__PURE__ */ jsx("span", { className: "px-5 py-3 bg-card border border-border rounded-full font-semibold hover:border-primary hover:text-primary transition", children: t }, t)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { id: "contact", className: "max-w-4xl mx-auto px-6 py-28 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-widest text-primary mb-3", children: "Let's Work Together" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Have a project in mind?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-10", children: "Available for freelance projects, branding work, and full-time roles." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "https://wa.me/923479580079", target: "_blank", rel: "noreferrer", className: "px-7 py-4 rounded-xl font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition", style: {
          backgroundImage: "var(--gradient-hero)"
        }, children: "💬 WhatsApp +92 347 9580079" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:shamshadali878@gmail.com", className: "px-7 py-4 rounded-xl font-semibold border border-border hover:bg-secondary transition", children: "✉️ Send an Email" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { className: "border-t border-border py-8 text-center text-sm text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Shamshad Ali · Graphic Designer · Rawalpindi, Pakistan"
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
  ] });
}
export {
  Index as component
};
