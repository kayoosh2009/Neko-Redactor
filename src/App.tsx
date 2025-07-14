import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { VideoPreview } from "./components/VideoPreview";
import { Timeline } from "./components/Timeline";
import { loadProject } from "./lib/projectStorage";

export default function App() {
  useEffect(() => {
    loadProject(); // Загружаем проект из localStorage при старте
  }, []);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex flex-col flex-1">
        <div className="flex-1 p-4">
          <VideoPreview />
        </div>
        <div className="h-48 border-t border-white/10">
          <Timeline />
        </div>
      </main>
    </div>
  );
}
