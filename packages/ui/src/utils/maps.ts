export function getMapsUrl(mapsUrl: string, appleMapsUrl: string): string {
  if (typeof navigator !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
    return appleMapsUrl;
  }
  return mapsUrl;
}
