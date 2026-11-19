const BACKEND_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  process.env.NEXT_PUBLIC_BACKEND_WS_URL ??
  "http://localhost:8000";

/** Build a persona WebSocket URL from the configured backend host. */
export function buildBackendWebSocketUrl(path: string, pageProtocol: string): string {
  const url = new URL(BACKEND_BASE_URL);
  url.protocol = pageProtocol === "https:" ? "wss:" : "ws:";
  url.pathname = path.startsWith("/") ? path : `/${path}`;
  url.search = "";
  url.hash = "";
  return url.toString();
}
