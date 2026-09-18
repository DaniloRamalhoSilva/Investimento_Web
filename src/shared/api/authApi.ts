import type { LoginPayload, LoginResponse } from "@/types/models";

import { apiRequest, getApiBaseUrl } from "./apiClient";

export function login(payload: LoginPayload): Promise<LoginResponse> {
  if (!getApiBaseUrl()) {
    if (payload.email === "admin" && payload.password === "admin") {
      return Promise.resolve({
        token: `template-dev-${Date.now()}`,
        user: {
          email: "admin",
          id: "local-user",
          name: "Administrador",
          role: "Administrador",
          theme: "dark",
        },
      });
    }
    return Promise.reject(
      new Error("Credenciais invalidas para o modo local."),
    );
  }

  return apiRequest<LoginResponse>("/api/auth/login", {
    body: JSON.stringify(payload),
    method: "POST",
    skipAuth: true,
  });
}
