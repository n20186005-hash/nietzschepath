import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_ORIGIN = "https://www.nietzschepath.com";
const PRODUCTION_HOSTS = new Set(["nietzschepath.com", "www.nietzschepath.com"]);

export function middleware(request: NextRequest) {
  // Host is allowlisted so localhost, deployment previews and other domains remain usable.
  const host = (request.headers.get("host") || new URL(request.url).host).toLowerCase();
  if (!PRODUCTION_HOSTS.has(host)) return NextResponse.next();

  // Cloudflare overwrites this header with the visitor's protocol. Do not infer it
  // from an internal HTTP hop between the proxy and Next's server.
  const forwardedProtocol = request.headers.get("x-forwarded-proto");
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https"
    ? `${forwardedProtocol}:`
    : new URL(request.url).protocol;

  if (host === "www.nietzschepath.com" && protocol === "https:") {
    return NextResponse.next();
  }

  const incoming = new URL(request.url);
  // Assign components separately: a path beginning with // must never become a host.
  const target = new URL(CANONICAL_ORIGIN);
  target.pathname = incoming.pathname;
  target.search = incoming.search;
  return NextResponse.redirect(target, 308);
}

// Include assets and metadata too whenever they reach Next. Cloudflare's asset
// router can still bypass this middleware; verify deployment routing separately.
export const config = { matcher: "/:path*" };
