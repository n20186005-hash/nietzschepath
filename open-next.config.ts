import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();
// The public build script invokes OpenNext; its inner build must invoke Next directly.
config.buildCommand = "npx next build";
export default config;
