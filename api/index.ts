import axios from "axios";

export const DotnetApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : `${process.env.REACT_APP_API}/api`,
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

export async function apiHandler(
  method: string,
  url: string,
  body?: string
): Promise<any> {
  try {
    const response = await DotnetApi({
      method,
      url,
      data: body,
      headers: {
        "Content-Type": "application/json",
        token: localStorage.token,
      },
    });

    return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function authApiHandler(
  method: string,
  url: string,
  body?: string
): Promise<any> {
  try {
    const response = await DotnetApi({
      method,
      url,
      data: body,
      timeout: 30000,
    });

    return response.data;
  } catch (error: any) {
    console.error(error.message);
  }
}
