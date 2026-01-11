document.getElementById("year").textContent = new Date().getFullYear();

// i18n dictionary for ES/EN content swaps
const translations = {
    es: {
        langToggle: "ES / EN",
        langToggleLabel: "Cambiar idioma a inglés",
        navProjects: "Proyectos",
        navCollaborations: "Colaboraciones",
        navContact: "Contacto",
        heroKicker: "Frontend + UI Engineering",
        heroTagline: "Hago que lo simple se sienta premium.",
        heroTitle: "Hola, soy Alex. Construyo interfaces donde el código limpio se encuentra con una experiencia de usuario intuitiva.",
        heroSub: "Trabajo con equipos que valoran la claridad, la accesibilidad y el rendimiento. Diseño sistemas visuales que se sienten humanos y productos que responden rápido.",
        ctaProjects: "Ver proyectos",
        ctaTalk: "Hablemos",
        ctaCv: "Descargar CV",
        ctaCvView: "Ver CV",
        pillAria: "Tecnologías principales",
        ctaCv: "Descargar CV",
        projectsEyebrow: "Selección",
        projectsTitle: "Proyectos recientes",
        projectsIntro: "Casos donde el detalle de UI y el rendimiento cuentan más que el ruido.",
        projectsAria: "Proyectos destacados",
        projectMenuMeta: "2025 • UI / Frontend",
        projectMenuTitle: "Menú digital para restaurante",
        projectMenuDesc: "Diseño modular, navegación veloz y tipografía legible en ambientes con poca luz.",
        projectMenuModalDesc: "Una experiencia rápida y clara, pensada para equipos de cocina y clientes desde el móvil. Enfoque en carga instantánea y accesibilidad.",
        projectLandingMeta: "2025 • Producto / UX",
        projectLandingTitle: "Landing page para negocio",
        projectLandingDesc: "Arquitectura de contenido clara para explicar valor y convertir visitas en contactos reales.",
        projectLandingModalDesc: "Landing enfocada en conversión con jerarquía visual fuerte y micro-copy humano. Pensada para medir, iterar y crecer.",
        projectPhpMeta: "2024 • PHP / MySQL",
        projectPhpTitle: "Sistema de gestión de inventario",
        projectPhpDesc: "Alta de productos, movimientos de entrada/salida y reportes con permisos por rol.",
        projectPhpModalDesc: "Backend en PHP con panel de control, roles y auditoría básica. Integración con MySQL para trazabilidad de stock y alertas.",
        terminalSnippet: "> php inventory-runner.php --sync-db\nok Conectado a MySQL\nok 128 items sincronizados\nok Alertas por stock mínimo activas",
        terminalAria: "Vista previa de terminal",
        btnDemo: "Ver demo",
        btnCode: "Ver código",
        btnUi: "Ver interfaz",
        btnBackendDocs: "Ver Documentación del Backend",
        btnPhpSnippet: "Ver snippet PHP",
        collabEyebrow: "Colaboraciones",
        collabTitle: "Colaboraciones",
        collabCopy: "Actualmente buscando mi próximo desafío técnico. Disponible para proyectos freelance o tiempo completo.",
        ctaTitle: "¿Tienes un proyecto o producto que quieras platicar?",
        ctaCopy: "Envíame un mensaje y te respondo con propuesta y tiempos.",
        footerTagline: "Preciso / Rápido / Humano",
        modalSnippetAria: "Snippet de código",
        modalSnippetTitle: "Snippet de PHP",
        modalSnippetDesc: "Ejemplo real de validación, tipado y respuesta JSON en el backend."
    },
    en: {
        langToggle: "EN / ES",
        langToggleLabel: "Switch language to Spanish",
        navProjects: "Projects",
        navCollaborations: "Collaborations",
        navContact: "Contact",
        heroKicker: "Frontend + UI Engineering",
        heroTagline: "Crafting premium experiences through simplicity.",
        heroTitle: "Hi, I'm Alex. I build interfaces where clean code meets intuitive user experience.",
        heroSub: "I partner with teams that value clarity, accessibility, and performance. I design visual systems that feel human and products that respond fast.",
        ctaProjects: "View projects",
        ctaTalk: "Let's talk",
        ctaCv: "Download CV",
        ctaCvView: "View CV",
        pillAria: "Core technologies",
        ctaCv: "Download CV",
        projectsEyebrow: "Selected",
        projectsTitle: "Recent projects",
        projectsIntro: "Projects where UI detail and performance matter more than noise.",
        projectsAria: "Featured projects",
        projectMenuMeta: "2025 • UI / Frontend",
        projectMenuTitle: "Digital menu for a restaurant",
        projectMenuDesc: "Modular design, fast navigation, and legible typography in low-light environments.",
        projectMenuModalDesc: "A fast, clear experience built for kitchen teams and mobile customers. Focused on instant load and accessibility.",
        projectLandingMeta: "2025 • Product / UX",
        projectLandingTitle: "Business landing page",
        projectLandingDesc: "Clear content architecture to explain value and convert visits into real contacts.",
        projectLandingModalDesc: "Conversion-focused landing with strong visual hierarchy and human microcopy. Built to measure, iterate, and grow.",
        projectPhpMeta: "2024 • PHP / MySQL",
        projectPhpTitle: "Inventory Management System",
        projectPhpDesc: "Product intake, inbound/outbound movements, and reports with role-based permissions.",
        projectPhpModalDesc: "PHP backend with a control panel, roles, and lightweight auditing. MySQL integration for stock traceability and alerts.",
        terminalSnippet: "> php inventory-runner.php --sync-db\nok Connected to MySQL\nok 128 items synced\nok Low-stock alerts enabled",
        terminalAria: "Terminal preview",
        btnDemo: "View demo",
        btnCode: "View Source.",
        btnUi: "View UI",
        btnBackendDocs: "View Backend Docs",
        btnPhpSnippet: "View PHP snippet",
        collabEyebrow: "Collaborations",
        collabTitle: "Collaborations",
        collabCopy: "Currently looking for my next technical challenge. Available for freelance or full-time work.",
        ctaTitle: "Have a project or product you want to discuss?",
        ctaCopy: "Send me a message and I'll reply with scope and timing.",
        footerTagline: "Precise / Fast / Human",
        modalSnippetAria: "Code snippet",
        modalSnippetTitle: "PHP snippet",
        modalSnippetDesc: "A real example of validation, typing, and JSON responses in the backend."
    }
};

// Modal elements
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDemo = document.getElementById("modalDemo");
const modalCodeLink = document.getElementById("modalCodeLink");
const modalCode = document.getElementById("modalCode");
const modalActions = modal.querySelector(".modalActions");
const modalBox = modal.querySelector(".modalBox");
const modalBackdrop = modal.querySelector(".modalBackdrop");
const snippetTemplate = document.getElementById("phpSnippet");
const langToggle = document.getElementById("langToggle");
const cvPreviewBtn = document.getElementById("cvPreviewBtn");

function t(lang, key) {
    return translations[lang]?.[key] ?? key;
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria-label");
        el.setAttribute("aria-label", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        el.dataset.title = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-desc]").forEach((el) => {
        const key = el.getAttribute("data-i18n-desc");
        el.dataset.desc = t(lang, key);
    });
}

// Persist language selection
function setLanguage(lang) {
    const nextLang = lang === "en" ? "en" : "es";
    applyTranslations(nextLang);
    localStorage.setItem("preferredLanguage", nextLang);
    if (langToggle) {
        langToggle.setAttribute("aria-label", t(nextLang, "langToggleLabel"));
    }
}

const savedLanguage = localStorage.getItem("preferredLanguage") || "es";
setLanguage(savedLanguage);

if (modalDemo && !modalDemo.dataset.defaultLabel) {
    modalDemo.dataset.defaultLabel = modalDemo.textContent;
}

if (langToggle) {
    langToggle.addEventListener("click", () => {
        const current = document.documentElement.lang;
        setLanguage(current === "es" ? "en" : "es");
    });
}

if (cvPreviewBtn) {
    cvPreviewBtn.addEventListener("click", (e) => {
        const isMobile = window.matchMedia("(max-width: 720px)").matches;
        if (isMobile) {
            window.open("assets/cv-alex.pdf", "_blank", "noopener");
            return;
        }

        const lang = document.documentElement.lang || "es";
        openModal({
            title: lang === "en" ? "Curriculum Vitae" : "Curriculum Vitae",
            desc: "",
            demo: "assets/cv-alex.pdf",
            demoLabel: lang === "en" ? "Download PDF" : "Descargar PDF",
            hideCode: true,
            snippet: `<iframe class="modalPdf" src="assets/cv-alex.pdf" title="${lang === "en" ? "Curriculum Vitae PDF" : "Curriculum Vitae PDF"}" type="application/pdf"></iframe>`
        }, e);
    });
}

function openModal({ title, desc, demo, code, snippet, demoLabel, hideCode }, evt) {
    modalTitle.textContent = title || "";
    modalDesc.textContent = desc || "";

    if (snippet) {
        modalCode.innerHTML = snippet;
        modalCode.classList.add("is-visible");
        modalActions.classList.add("is-hidden");
    } else {
        modalDemo.href = demo || "#";
        modalCodeLink.href = code || "#";
        modalDemo.textContent = demoLabel || modalDemo.dataset.defaultLabel || modalDemo.textContent;
        modalCodeLink.style.display = hideCode ? "none" : "";
        modalCode.innerHTML = "";
        modalCode.classList.remove("is-visible");
        modalActions.classList.remove("is-hidden");
    }

    const x = evt?.clientX ?? window.innerWidth / 2;
    const y = evt?.clientY ?? window.innerHeight / 2;
    modalBox.style.transformOrigin = `${x}px ${y}px`;

    modal.classList.add("isOpen");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    modalBackdrop.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 220, easing: "ease-out", fill: "both" }
    );

    modalBox.animate(
        [
            { transform: "translateY(18px) scale(0.9)", opacity: 0, filter: "blur(2px)" },
            { transform: "translateY(0) scale(1.02)", opacity: 1, filter: "blur(0px)" },
            { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)" }
        ],
        { duration: 360, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "both" }
    );

    setTimeout(() => modal.querySelector(".modalClose")?.focus(), 0);
}

function closeModal() {
    if (!modal.classList.contains("isOpen")) return;

    modalBackdrop.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 180, easing: "ease-in", fill: "both" }
    );

    const anim = modalBox.animate(
        [
            { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)" },
            { transform: "translateY(14px) scale(0.92)", opacity: 0, filter: "blur(2px)" }
        ],
        { duration: 220, easing: "cubic-bezier(.2, .8, .2, 1)", fill: "both" }
    );

    anim.onfinish = () => {
        modal.classList.remove("isOpen");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };
}

document.querySelectorAll(".projectCard").forEach(item => {
    item.addEventListener("click", (e) => {
        openModal({
            title: item.dataset.title,
            desc: item.dataset.desc,
            demo: item.dataset.demo,
            code: item.dataset.code
        }, e);
    });

    item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") item.click();
        if (e.key === "Escape") closeModal();
    });
});

document.querySelectorAll(".projectLinks a, .projectLinks button").forEach(link => {
    link.addEventListener("click", (e) => e.stopPropagation());
});

document.querySelectorAll(".phpSnippetBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const lang = document.documentElement.lang || "es";
        openModal({
            title: t(lang, "modalSnippetTitle"),
            desc: t(lang, "modalSnippetDesc"),
            snippet: snippetTemplate?.innerHTML || ""
        }, e);
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("isOpen")) closeModal();
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
    document.querySelectorAll(".glowBtn").forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty("--glow-x", `${x}px`);
            btn.style.setProperty("--glow-y", `${y}px`);
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.removeProperty("--glow-x");
            btn.style.removeProperty("--glow-y");
        });
    });
}

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

if (!reduceMotion) {
    const cursor = document.querySelector(".cursor");
    const magneticButtons = Array.from(document.querySelectorAll(".magnetic"));
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let rafId = null;

    function updateMagnetic() {
        magneticButtons.forEach((btn) => {
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = mouseX - cx;
            const dy = mouseY - cy;
            const distance = Math.hypot(dx, dy);
            const radius = 140;

            if (distance < radius) {
                const strength = 1 - distance / radius;
                const offsetX = dx * 0.2 * strength;
                const offsetY = dy * 0.2 * strength;
                btn.style.setProperty("--mag-x", `${offsetX}px`);
                btn.style.setProperty("--mag-y", `${offsetY}px`);
            } else {
                btn.style.setProperty("--mag-x", "0px");
                btn.style.setProperty("--mag-y", "0px");
            }
        });
    }

    function loop() {
        updateMagnetic();
        rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor) {
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
            cursor.classList.add("is-visible");
        }
    });

    window.addEventListener("mouseleave", () => {
        if (cursor) cursor.classList.remove("is-visible");
    });

    document.querySelectorAll("h1, h2").forEach((heading) => {
        heading.addEventListener("mouseenter", () => cursor?.classList.add("is-active"));
        heading.addEventListener("mouseleave", () => cursor?.classList.remove("is-active"));
    });

    loop();

    window.addEventListener("blur", () => {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });

    window.addEventListener("focus", () => {
        if (!rafId) loop();
    });
}

if (!reduceMotion) {
    const orbContainer = document.querySelector(".ambientOrbs");
    const baseOrbs = Array.from(document.querySelectorAll(".orb"));
    const extraCount = 4;
    const palette = [
        "rgba(91, 212, 176, 0.55)",
        "rgba(243, 196, 107, 0.55)",
        "rgba(120, 146, 255, 0.5)",
        "rgba(90, 170, 255, 0.45)",
        "rgba(160, 90, 255, 0.45)"
    ];

    for (let i = 0; i < extraCount; i += 1) {
        const orb = document.createElement("span");
        orb.className = "orb";
        orbContainer?.appendChild(orb);
        baseOrbs.push(orb);
    }

    const orbs = baseOrbs.map((orb, index) => {
        orb.style.animation = "none";
        orb.style.willChange = "transform";
        orb.style.position = "fixed";
        orb.style.left = "0";
        orb.style.top = "0";
        orb.style.right = "auto";
        orb.style.bottom = "auto";

        if (!orb.style.width) {
            const size = 220 + Math.random() * 220;
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.background = `radial-gradient(circle, ${palette[index % palette.length]}, transparent 65%)`;
        }

        const size = parseFloat(getComputedStyle(orb).width) || 300;
        let x = Math.random() * Math.max(1, window.innerWidth - size);
        let y = Math.random() * Math.max(1, window.innerHeight - size);
        for (let tries = 0; tries < 10; tries += 1) {
            const overlap = orbs?.some?.((other) => {
                if (!other) return false;
                const ox = other.x + other.radius;
                const oy = other.y + other.radius;
                const nx = x + size / 2;
                const ny = y + size / 2;
                return Math.hypot(nx - ox, ny - oy) < other.radius + size / 2 + 40;
            });
            if (!overlap) break;
            x = Math.random() * Math.max(1, window.innerWidth - size);
            y = Math.random() * Math.max(1, window.innerHeight - size);
        }
        const speed = 0.5 + Math.random() * 0.6;
        const angle = Math.random() * Math.PI * 2;

        return {
            el: orb,
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: size / 2
        };
    });

    function resolveBounds(orb, width, height) {
        const size = orb.radius * 2;

        if (orb.x <= 0 || orb.x + size >= width) {
            orb.vx *= -1;
            orb.x = Math.max(0, Math.min(orb.x, width - size));
        }

        if (orb.y <= 0 || orb.y + size >= height) {
            orb.vy *= -1;
            orb.y = Math.max(0, Math.min(orb.y, height - size));
        }
    }

    function resolveCollision(a, b) {
        const ax = a.x + a.radius;
        const ay = a.y + a.radius;
        const bx = b.x + b.radius;
        const by = b.y + b.radius;
        const dx = ax - bx;
        const dy = ay - by;
        const dist = Math.hypot(dx, dy);
        const minDist = a.radius + b.radius;

        if (dist === 0 || dist >= minDist) return;

        const nx = dx / dist;
        const ny = dy / dist;
        const overlap = minDist - dist;

        a.x += nx * (overlap / 2);
        a.y += ny * (overlap / 2);
        b.x -= nx * (overlap / 2);
        b.y -= ny * (overlap / 2);

        const dvx = a.vx - b.vx;
        const dvy = a.vy - b.vy;
        const rel = dvx * nx + dvy * ny;

        if (rel > 0) return;

        const impulse = -rel * 0.6;
        a.vx += impulse * nx;
        a.vy += impulse * ny;
        b.vx -= impulse * nx;
        b.vy -= impulse * ny;
    }

    function bounceOrbs() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        orbs.forEach((orb) => {
            orb.x += orb.vx;
            orb.y += orb.vy;
            resolveBounds(orb, width, height);
        });

        for (let i = 0; i < orbs.length; i += 1) {
            for (let j = i + 1; j < orbs.length; j += 1) {
                resolveCollision(orbs[i], orbs[j]);
            }
        }

        orbs.forEach((orb) => {
            orb.el.style.transform = `translate3d(${orb.x}px, ${orb.y}px, 0)`;
        });

        requestAnimationFrame(bounceOrbs);
    }

    requestAnimationFrame(bounceOrbs);
}
