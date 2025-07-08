import { url } from "@/lib/url"
import type { adminAnalytics, analyticsTypes, customerAnalytics, driverAnalytics } from "@/types/analytics.types";
import { getTokens } from "@/utils/jwt";

const endPointUrl = url
const {accessToken} = getTokens();

export async function getOwnAnalytics(): Promise<customerAnalytics | driverAnalytics | adminAnalytics>{
    const results = await fetch(`${endPointUrl}/analytics/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    if (!results.ok) {
        throw new Error("Failed to fetch analytics");
    }
    const resData = await results.json();
    return resData.data;
}