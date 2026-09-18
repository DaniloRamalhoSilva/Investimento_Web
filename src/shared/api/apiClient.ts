import type { AuthSession } from "@/types/models";

const DEFAULT_API_URL = "";
const SESSION_STORAGE_KEY = "template-web-session";

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export function getApiBaseUrl() {
  const configuredUrl = import.meta.env.VITE_API_URL;
  return (
    typeof configuredUrl === "string" && configuredUrl.trim()
      ? configuredUrl
      : DEFAULT_API_URL
  )
    .trim()
    .replace(/\/api\/v\d+\/?$/i, "")
    .replace(/\/api\/?$/i, "")
    .replace(/\/$/, "");
}

export function getStoredSession(): AuthSession | null {
  const value = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (!value) return null;

  try {
    const session = JSON.parse(value) as AuthSession;
    if (!session?.token || !session?.user) throw new Error("Invalid session");
    return session;
  } catch {
    clearStoredSession();
    return null;
  }
}

export function storeSession(session: AuthSession) {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearStoredSession() {
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
}

type RequestOptions = RequestInit & { skipAuth?: boolean };

export async function apiRequest<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const session = getStoredSession();
  const headers = new Headers(options.headers);
  if (!headers.has("Content-Type") && options.body)
    headers.set("Content-Type", "application/json");
  if (!options.skipAuth && session?.token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${session.token}`);
  }

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...options,
    headers,
  });
  const text = await response.text();
  let data: unknown;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    if (response.status === 401 && !options.skipAuth) {
      clearStoredSession();
      window.location.assign("/login");
    }
    throw new ApiError(
      typeof data === "object" && data && "message" in data
        ? String(data.message)
        : `A API retornou erro ${response.status}.`,
      response.status,
    );
  }

  return data as T;
}
