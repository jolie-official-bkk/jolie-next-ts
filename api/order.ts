import { apiHandler } from ".";

export async function placeOrder(body: string): Promise<any> {
    return apiHandler("post", `/order/placeOrder`, body);
}
