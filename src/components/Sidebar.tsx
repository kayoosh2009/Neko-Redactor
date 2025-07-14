import { Upload, Type, Download } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-16 bg-zinc-900 p-2 flex flex-col items-center gap-4 border-r border-white/10">
      <button title="Загрузить">
        <Upload className="text-white hover:text-blue-500 w-6 h-6" />
      </button>
      <button title="Текст">
        <Type className="text-white hover:text-green-500 w-6 h-6" />
      </button>
      <button title="Экспорт">
        <Download className="text-white hover:text-yellow-500 w-6 h-6" />
      </button>
    </div>
  );
}
