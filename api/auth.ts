import { apiHandler, authApiHandler } from ".";

export async function handleRegister(body: string): Promise<any> {
  return authApiHandler("post", "/user/register", body);
}

export async function handleLogin(body: string): Promise<any> {
  return authApiHandler("post", "/user/login", body);
}

export async function handleValidateToken(token: string): Promise<any> {
  return apiHandler("get", `/user/validateToken?token=${token}`)
}
