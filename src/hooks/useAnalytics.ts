import { getOwnAnalytics } from "@/api/analytics";
import { useMutation } from "@tanstack/react-query";

export function useAnalytics(){
    return useMutation({
        mutationFn: async () => getOwnAnalytics(),
        onSuccess: (data) => {
            console.log("Analytics fetched successfully", data);
        },
        onError: (error) => {
            console.error("Error fetching analytics", error);
        }
    })
}