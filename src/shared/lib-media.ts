import "server-only";
import fs from "node:fs";
import path from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";
import type { ImageAsset, MediaAsset, SiteMedia } from "./types";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const IMAGE_FILE = /\.(avif|webp|png|jpe?g)$/i;
const VIDEO_FILE = /\.(mp4|webm)$/i;
/** Эти файлы не попадают в галерею: у них своё место на сайте. */
const RESERVED = /^(main-page|logo|club-)/i;

function listFiles(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && !entry.name.startsWith("."))
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

function publicUrl(dir: string, file: string): string {
  const relative = path.relative(PUBLIC_DIR, path.join(dir, file)).split(path.sep).join("/");
  return `/${relative.split("/").map(encodeURIComponent).join("/")}`;
}

/** Возвращает null для повреждённого файла, чтобы на сайте не было сломанных изображений. */
async function readImage(dir: string, file: string): Promise<ImageAsset | null> {
  try {
    const { width, height, orientation } = await imageSizeFromFile(path.join(dir, file));
    if (!width || !height) return null;
    const rotated = orientation !== undefined && orientation >= 5;
    return {
      kind: "image",
      src: publicUrl(dir, file),
      width: rotated ? height : width,
      height: rotated ? width : height,
    };
  } catch {
    return null;
  }
}

async function findNamedMedia(baseName: string, allowVideo: boolean): Promise<MediaAsset | null> {
  for (const dir of [IMAGES_DIR, PUBLIC_DIR]) {
    const candidates = listFiles(dir).filter((file) => path.parse(file).name.toLowerCase() === baseName);
    for (const file of candidates) {
      if (IMAGE_FILE.test(file)) {
        const image = await readImage(dir, file);
        if (image) return image;
      }
      if (allowVideo && VIDEO_FILE.test(file)) {
        return { kind: "video", src: publicUrl(dir, file) };
      }
    }
  }
  return null;
}

async function readGallery(): Promise<ImageAsset[]> {
  const files = listFiles(IMAGES_DIR)
    .filter((file) => IMAGE_FILE.test(file) && !RESERVED.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  const images = await Promise.all(files.map((file) => readImage(IMAGES_DIR, file)));
  return images.filter((image): image is ImageAsset => image !== null);
}

export async function loadSiteMedia(): Promise<SiteMedia> {
  const [hero, about, gallery, dance, taekwondo] = await Promise.all([
    findNamedMedia("main-page", false),
    findNamedMedia("main-page2", true),
    readGallery(),
    findNamedMedia("club-dance", false),
    findNamedMedia("club-taekwondo", false),
  ]);
  const asImage = (media: MediaAsset | null) => (media?.kind === "image" ? media : null);
  return {
    hero: asImage(hero),
    about,
    gallery,
    clubs: { dance: asImage(dance), taekwondo: asImage(taekwondo) },
  };
}
