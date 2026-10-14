import Image from "next/image";
import clsx from "clsx";
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

  const landscape = images.filter((image) => image.landscape);
  const portrait = images.filter((image) => !image.landscape);

  return (
    <div className="flex flex-col gap-3">
      {landscape.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {landscape.map((image) => (
            <Shot key={image.src} image={image} sizes="(max-width: 640px) 90vw, 45vw" />
          ))}
        </div>
      )}
      {portrait.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {portrait.map((image) => (
            <Shot key={image.src} image={image} sizes="(max-width: 640px) 45vw, 30vw" />
          ))}
        </div>
      )}
    </div>
  );
}

function Shot({ image, sizes }: { image: GalleryImage; sizes: string }) {
  return (
    <figure className="flex flex-col gap-1.5">
      <a
        href={image.src}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          "relative block overflow-hidden rounded-lg border border-white/10 bg-panel-2 transition-colors hover:border-accent/40",
          image.landscape ? "aspect-[16/10]" : "aspect-[9/16]"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={clsx("object-cover", image.landscape && "object-top")}
        />
      </a>
      {image.landscape && (
        <figcaption className="font-mono text-[11px] leading-snug text-ink-muted">{image.alt}</figcaption>
      )}
    </figure>
  );
}
