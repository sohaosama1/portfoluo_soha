const menu = document.getElementById("menu");
const action = document.getElementById("actions");
const overlay = document.getElementById("overlay");

menu.addEventListener("click", () => {
    handleMenu();
});

function handleMenu() {
    // تبديل حالة القائمة
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
    overlay.classList.toggle("is-active");

    // تعطيل أو تمكين التمرير عند فتح أو إغلاق القائمة
    document.body.style.overflow = action.classList.contains("is-active") ? "hidden" : "auto";
}