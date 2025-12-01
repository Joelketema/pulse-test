import { apiClient } from "@/lib/api";

export const GetProjects = async () => {
    try {
        const response = apiClient({
            method: "GET",
            url: "projects",
        });

        return response;
    } catch (error) {
        console.log("error", error);
    }
};
