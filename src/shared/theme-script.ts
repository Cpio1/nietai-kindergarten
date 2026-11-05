export const THEME_KEY = "nietai-theme";

/** Выполняется до отрисовки страницы, чтобы при загрузке не мелькала другая тема. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;
