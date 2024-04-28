let prefix = "";
let landingPagePath = "/";

if (process.env.NODE_ENV === "production") {
  prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  landingPagePath = process.env.NEXT_PUBLIC_BASE_LANDING_PAGE || "/";
}

export { prefix, landingPagePath };
