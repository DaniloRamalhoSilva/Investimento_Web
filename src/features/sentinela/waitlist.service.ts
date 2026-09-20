export type WaitlistPayload = {
  name: string;
  email: string;
};

export async function joinWaitlist(payload: WaitlistPayload) {
  const endpoint = import.meta.env.VITE_WAITLIST_API_URL as string | undefined;

  if (!endpoint) {
    if (import.meta.env.DEV) {
      await new Promise((resolve) => window.setTimeout(resolve, 750));
      return { ok: true };
    }

    throw new Error("Waitlist endpoint is not configured.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Waitlist request failed.");
  }

  return { ok: true };
}
