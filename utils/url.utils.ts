import config from "@config/app-config";

export const parseRelativeUrl = (
  url: string | null | undefined,
  defaultUrl = "/images/token_logo_default.png",
) => {
  if (!url) return defaultUrl;
  if (url.startsWith("http")) return url;
  return `${config.BACKEND_API_BASE_URL}/${url}`
    .split("/api/")
    .join("/")
    .split("//")
    .join("/")
    .split("http:/")
    .join("http://")
    .split("https:/")
    .join("https://");
};
