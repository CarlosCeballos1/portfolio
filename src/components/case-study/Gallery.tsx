import Image from "next/image";
import type { GalleryImage } from "@/lib/types";

export function Gallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-md border border-dashed border-white/12 bg-panel/40 px-6 py-12 font-mono text-[13px] text-ink-muted">
        <span className="blink-caret mr-1 text-accent">▍</span>
        capturas en camino — se agregan cuando el sitio esté desplegado
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/10 bg-panel-2"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 45vw, 30vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
