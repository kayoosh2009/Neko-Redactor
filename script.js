const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const videoPreview = document.getElementById("videoPreview");

// 📁 Открываем файл
uploadBtn.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    videoPreview.src = url;

    // 💾 Сохраняем в localStorage
    localStorage.setItem("video-project", JSON.stringify({ fileName: file.name }));
  }
});

// 🕹 Можно добавить загрузку проекта при старте
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("video-project");
  if (saved) {
    console.log("🔁 Загружен проект:", JSON.parse(saved));
  }
});
