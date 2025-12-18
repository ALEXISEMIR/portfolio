// Actualizar el año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDemo = document.getElementById("modalDemo");
const modalCode = document.getElementById("modalCode");
const modalBox = modal.querySelector(".modalBox");
const modalBackdrop = modal.querySelector(".modalBackdrop");

function openModal({ title, desc, demo, code }, evt) {
    modalTitle.textContent = title || "";
    modalDesc.textContent = desc || "";
    modalDemo.href = demo || "#";
    modalCode.href = code || "#";

    // Origen desde el click (como “abre desde donde tocaste”)
    const x = evt?.clientX ?? window.innerWidth / 2;
    const y = evt?.clientY ?? window.innerHeight / 2;
    modalBox.style.transformOrigin = `${x}px ${y}px`;

    modal.classList.add("isOpen");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Backdrop: fade suave
    modalBackdrop.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 220, easing: "ease-out", fill: "both" }
    );

    // Ventana: spring macOS (sube, crece, rebota y se asienta)
    modalBox.animate(
        [
            { transform: "translateY(18px) scale(0.86)", opacity: 0, filter: "blur(2px)", boxShadow: "0 10px 30px rgba(0,0,0,.25)" },
            { transform: "translateY(0) scale(1.03)", opacity: 1, filter: "blur(0px)", boxShadow: "0 24px 90px rgba(0,0,0,.55)" },
            { transform: "translateY(0) scale(0.995)", opacity: 1, filter: "blur(0px)", boxShadow: "0 22px 80px rgba(0,0,0,.55)" },
            { transform: "translateY(0) scale(1)", opacity: 1, filter: "blur(0px)", boxShadow: "0 22px 80px rgba(0,0,0,.55)" }
        ],
        { duration: 420, easing: "cubic-bezier(.16, 1, .3, 1)", fill: "both" }
    );

    setTimeout(() => modal.querySelector(".modalClose")?.focus(), 0);
}

function closeModal() {
    if (!modal.classList.contains("isOpen")) return;

    // Backdrop: fade out
    modalBackdrop.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 180, easing: "ease-in", fill: "both" }
    );

    // Ventana: se “guarda” suave
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

document.querySelectorAll(".tItem").forEach(item => {
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

modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("isOpen")) closeModal();
});
const revealEls = document.querySelectorAll(".reveal");

const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));