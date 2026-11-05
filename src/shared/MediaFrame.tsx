import Image from "next/image";
import type { MediaAsset } from "./types";

/** Показывает фото или видео main-page2 в заданной рамке. */
export function MediaFrame({
  media,
  alt,
  sizes,
  className,
}: {
  media: MediaAsset;
  alt: string;
  sizes: string;
  className?: string;
}) {
  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        controls
        playsInline
        preload="metadata"
        className={`w-full bg-forest object-cover ${className ?? ""}`}
        aria-label={alt}
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      className={`h-auto w-full object-cover ${className ?? ""}`}
    />
  );
}
