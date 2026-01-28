// const API_BASE = "https://dashboard-backend-b7ak.onrender.com/api";
const API_BASE = "https://my-portfolio-bl2f.onrender.com/api";


export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
     credentials: "include",
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "API error");
  }

  return res.json();
}
