const REPO = "rogerluiz/velai";
const API_URL = `https://api.github.com/repos/${REPO}/releases/latest`;

export interface ReleaseAsset {
  name: string;
  size: number;
  downloadUrl: string;
  downloadCount: number;
}

export interface ReleaseInfo {
  tag: string;
  version: string;
  name: string;
  publishedAt: string;
  releasePageUrl: string;
  exeAsset: ReleaseAsset | null;
}

function formatBytes(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export async function getLatestRelease(): Promise<ReleaseInfo | null> {
  try {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github+json" },
      // Revalidate every hour — picks up new releases automatically
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();

    const exeRaw = data.assets?.find(
      (a: { name: string }) =>
        a.name.endsWith(".exe") && !a.name.endsWith(".sha256")
    );

    const exeAsset: ReleaseAsset | null = exeRaw
      ? {
          name: exeRaw.name,
          size: exeRaw.size,
          downloadUrl: exeRaw.browser_download_url,
          downloadCount: exeRaw.download_count,
        }
      : null;

    return {
      tag: data.tag_name,
      version: (data.tag_name as string).replace(/^v/, ""),
      name: data.name,
      publishedAt: data.published_at,
      releasePageUrl: data.html_url,
      exeAsset,
    };
  } catch {
    return null;
  }
}

export function formatReleaseSize(asset: ReleaseAsset): string {
  return formatBytes(asset.size);
}
