import { useSyncExternalStore } from "react";

// Roteador mínimo baseado em hash (#/login, #/cadastro) — não precisa de dependência extra.
function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function useRoute(): string {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash);
  const path = hash.replace(/^#/, "");
  return path.startsWith("/") ? path : "/";
}

export function navigate(path: string) {
  window.location.hash = path;
}
