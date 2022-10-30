import { apiHandler } from ".";

export async function getUserInfo(token: string): Promise<any> {
  return apiHandler("get", `/user/getUserInfo?token=${token}`);
}
