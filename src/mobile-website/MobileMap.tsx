"use client";

import { useEffect, useRef, useState } from "react";
import { twoGisWidgetUrl } from "@/content/site";

/** Виджет 2ГИС рассчитан на ширину от 500px: на более узком экране его окно обрезается. */
const WIDGET_MIN_WIDTH = 500;
const FRAME_HEIGHT = 320;

export function MobileMap({ title }: { title: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / WIDGET_MIN_WIDTH));
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="overflow-hidden rounded-[1.5rem] bg-milk shadow-md" style={{ height: FRAME_HEIGHT }}>
      <iframe
        src={twoGisWidgetUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block origin-top-left border-0"
        style={{
          width: `${100 / scale}%`,
          height: FRAME_HEIGHT / scale,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}
