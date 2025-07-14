import { useRef } from "react";

export function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="flex justify-center items-center h-full">
      <video
        ref={videoRef}
        controls
        className="max-h-full max-w-full rounded-xl border border-white/10"
      />
    </div>
  );
}
