import { authApiHandler } from ".";

export async function handleRegister(body: string): Promise<any> {
  return authApiHandler("post", "/user/register", body);
}

export async function handleLogin(body: string): Promise<any> {
  return authApiHandler("post", "/user/login", body);
}
