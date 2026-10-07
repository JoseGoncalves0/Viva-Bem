import { useMemo, useSyncExternalStore } from "react";

/**
 * Autenticação de DEMONSTRAÇÃO: guarda usuários no localStorage do navegador.
 * Quando tiver um backend, troque o corpo de `registerUser` / `loginUser`
 * por chamadas à sua API — as telas não precisam mudar.
 */

const USERS_KEY = "vivabem:users";
const SESSION_KEY = "vivabem:session";
const EVENT = "vivabem:auth";

interface StoredUser { name: string; email: string; username: string; hash: string }
export interface Session { name: string; email: string }
export type AuthResult = { ok: true; session: Session } | { ok: false; error: string; field?: string };

async function hashPassword(password: string): Promise<string> {
  if (globalThis.crypto?.subtle) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("vivabem:" + password));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return btoa(unescape(encodeURIComponent(password)));
}

function readUsers(): StoredUser[] {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) ?? "[]"); } catch { return []; }
}

function startSession(user: StoredUser): Session {
  const session = { name: user.name, email: user.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(EVENT));
  return session;
}

export async function registerUser(name: string, email: string, password: string): Promise<AuthResult> {
  const users = readUsers();
  const mail = email.trim().toLowerCase();
  if (users.some((u) => u.email === mail)) {
    return { ok: false, field: "email", error: "Já existe uma conta com este e-mail." };
  }
  const user: StoredUser = {
    name: name.trim(),
    email: mail,
    username: mail.split("@")[0],
    hash: await hashPassword(password),
  };
  localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
  return { ok: true, session: startSession(user) };
}

export async function loginUser(identifier: string, password: string): Promise<AuthResult> {
  const id = identifier.trim().toLowerCase();
  const hash = await hashPassword(password);
  const user = readUsers().find((u) => (u.email === id || u.username === id) && u.hash === hash);
  if (!user) return { ok: false, error: "E-mail/usuário ou senha incorretos." };
  return { ok: true, session: startSession(user) };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => { window.removeEventListener(EVENT, cb); window.removeEventListener("storage", cb); };
}

export function useSession(): Session | null {
  const raw = useSyncExternalStore(subscribe, () => localStorage.getItem(SESSION_KEY));
  return useMemo(() => { try { return raw ? (JSON.parse(raw) as Session) : null; } catch { return null; } }, [raw]);
}
