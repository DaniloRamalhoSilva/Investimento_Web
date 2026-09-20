export type WaitlistPayload = {
  nome: string;
  email: string;
  whatsapp: string;
};

export async function joinWaitlist(payload: WaitlistPayload) {
  const apiUrl = (import.meta.env.VITE_API_URL as string | undefined)?.replace(
    /\/$/,
    "",
  );

  if (!apiUrl) {
    throw new Error("VITE_API_URL não está configurada.");
  }

  const response = await fetch(`${apiUrl}/api/v1/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Waitlist request failed.");
  }

  return response.json() as Promise<{ data: { registered: true } }>;
}
