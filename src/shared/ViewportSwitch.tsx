"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getSnapshot = () => (window.matchMedia(DESKTOP_QUERY).matches ? "desktop" : "mobile");
const getServerSnapshot = () => null;

/**
 * В статичный HTML попадают обе версии: нужную выбирает CSS, поэтому экран не мигает.
 * После загрузки неактивная версия удаляется, чтобы не тратить ресурсы на её анимации.
 */
export function ViewportSwitch({ desktop, mobile }: { desktop: ReactNode; mobile: ReactNode }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!mode || !window.location.hash) return;
    // В HTML первым идёт скрытый дубль раздела, поэтому браузер мог не прокрутить к ссылке с #.
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    target?.scrollIntoView({ behavior: "auto" });
  }, [mode]);

  return (
    <>
      {mode !== "mobile" && <div className="hidden lg:block">{desktop}</div>}
      {mode !== "desktop" && <div className="lg:hidden">{mobile}</div>}
    </>
  );
}
