export type SentinelaEvent =
  | "landing_view"
  | "hero_waitlist_click"
  | "how_it_works_click"
  | "waitlist_submit_started"
  | "waitlist_submit_success"
  | "waitlist_submit_error"
  | "survey_started"
  | "survey_completed"
  | "faq_opened"
  | "final_cta_click";

export function trackEvent(
  name: SentinelaEvent,
  detail: Record<string, string | number | boolean> = {},
) {
  window.dispatchEvent(
    new CustomEvent("sentinela:analytics", { detail: { name, ...detail } }),
  );
}
