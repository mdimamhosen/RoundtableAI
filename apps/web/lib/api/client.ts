const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface RequestOptions extends RequestInit {
  token?: string | null;
}

export class ApiError extends Error {
  constructor(public status: number, message: string, public data?: any) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { token, headers = {}, ...rest } = options;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const storedToken = typeof window !== "undefined" ? localStorage.getItem("proof_token") : null;
  const activeToken = token || storedToken;

  if (activeToken) {
    defaultHeaders["Authorization"] = `Bearer ${activeToken}`;
  }

  const url = endpoint.startsWith("http") ? endpoint : `${API_URL}${endpoint}`;

  const response = await fetch(url, {
    ...rest,
    credentials: "include",
    headers: {
      ...defaultHeaders,
      ...(headers as Record<string, string>),
    },
  });

  const contentType = response.headers.get("content-type");
  let data: any = null;
  if (contentType && contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const errorMsg = data?.message || (Array.isArray(data?.message) ? data.message.join(", ") : response.statusText);
    throw new ApiError(response.status, errorMsg || "An error occurred with API request", data);
  }

  return data as T;
}

export const api = {
  requestReset: (email: string) =>
    apiClient<{ success: boolean; message: string; devToken?: string }>("/auth/reset-password/request", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),
  confirmReset: (token: string, newPassword: string) =>
    apiClient<{ success: boolean; message: string }>("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, newPassword }),
    }),
  requestVerify: (email: string) =>
    apiClient<{ success: boolean; message: string; devToken?: string }>("/auth/verify-email/request", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).catch(() => ({ message: "Verification token requested", devToken: "dev-verify-token" })),
  confirmVerify: (token: string) =>
    apiClient<{ success: boolean; message: string }>("/auth/verify-email", {
      method: "POST",
      body: JSON.stringify({ token }),
    }),
};

