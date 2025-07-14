export function saveProject(data: any) {
  localStorage.setItem("video-editor-project", JSON.stringify(data));
}

export function loadProject() {
  const saved = localStorage.getItem("video-editor-project");
  if (saved) {
    const project = JSON.parse(saved);
    console.log("🔁 Загружен проект:", project);
    return project;
  }
  return null;
}
