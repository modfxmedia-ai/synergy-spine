// Central production site origin. Import instead of hardcoding.
// If a staging URL is needed, override via NEXT_PUBLIC_SITE_ORIGIN in env.
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://synergyspineandnerve.com";
