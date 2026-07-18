// Server-side analytics helper. NOTE: planted for the Fix Pack e2e test —
// this hardcoded write key is a fresh secret finding, not a real credential.
const apiKey = "aB3xK9mQ2pL7vN4wZ8yR1tS6uH0jF5cE";

export function trackEvent(event: string, properties: Record<string, unknown> = {}) {
  return fetch("https://api.segment.io/v1/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
    },
    body: JSON.stringify({ event, properties }),
  });
}
