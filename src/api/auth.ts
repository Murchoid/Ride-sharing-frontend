import { url } from "@/lib/url";
import type { LoginSchema, RegisterSchema } from "@/lib/validation/auth.schema";

export async function loginApi(data: LoginSchema) {
  const res = await fetch(`${url}/auths/signin`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Login failed");
  const resData = await res.json();
  return resData.data; 
}

export async function registerApi(data: RegisterSchema) {
  const res = await fetch(`${url}/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Registration failed");

  return res.json();
}
