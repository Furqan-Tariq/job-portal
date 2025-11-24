// src/lib/api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

type ApiError = {
  status?: number
  body?: any
  message?: string
}

export async function apiFetch(
  path: string,
  options: RequestInit = {}
): Promise<any> {
  const url = `${API_BASE_URL}${path}`

  // Merge headers
  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(options.headers || {}),
  }

  // Attach token if present (browser only)
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token")
    if (token) {
      ;(headers as any).Authorization = `Bearer ${token}`
    }
  }

  const res = await fetch(url, {
    ...options,
    headers,
  })

  // No content
  if (res.status === 204) {
    if (!res.ok) {
      const error: ApiError = {
        status: res.status,
        message: "Request failed with status 204",
      }
      throw error
    }
    return null
  }

  let data: any = null
  try {
    data = await res.json()
  } catch {
    // ignore JSON parse errors
  }

  if (!res.ok) {
    const error: ApiError = {
      status: res.status,
      body: data,
      message:
        (data && typeof data.message === "string" && data.message) ||
        `Request failed with status ${res.status}`,
    }
    throw error
  }

  return data
}
