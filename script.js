// Actualizar el año en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalDemo = document.getElementById("modalDemo");
const modalCode = document.getElementById("modalCode");

function openModal({ title, desc, demo, code }) {
    modalTitle.textContent = title || "";
    modalDesc.textContent = desc || "";
    modalDemo.href = demo || "#";
    modalCode.href = code || "#";

    modal.classList.add("isOpen");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("isOpen");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".tItem").forEach(item => {
    item.addEventListener("click", () => {
        openModal({
            title: item.dataset.title,
            desc: item.dataset.desc,
            demo: item.dataset.demo,
            code: item.dataset.code
        });
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
