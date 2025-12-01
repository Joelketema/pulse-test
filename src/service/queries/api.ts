import { IFilter } from "@/interfaces";
import { apiClient } from "@/lib/api";

export const GetProjects = async (filters: IFilter) => {
    const hasStatus = filters.status;
    const hasPriority = filters.priority;
    const hasSearch = filters.search;

    const hasFilter = hasStatus || hasSearch || hasPriority;

    try {
        const response = apiClient({
            method: "GET",
            url: hasFilter
                ? `projects/status=${filters.status}&priority=${filters.priority}&search=${filters.search}`
                : "projects",
        });

        return response;
    } catch (error) {
        console.log("error", error);
    }
};
export const GetTeams = async (query?: string) => {
    try {
        const response = apiClient({
            method: "GET",
            url: query ? `team?search=${query}` : "team",
        });

        return response;
    } catch (error) {
        console.log("error", error);
    }
};

export const CreateTeam = async (data: any) => {
    console.log("in the query", data);
    try {
        const response = apiClient({
            method: "POST",
            url: "team",
            data: {
                ...data,
            },
        });

        return response;
    } catch (error) {
        console.log("error", error);
    }
};
export const DeleteTeamMember = async (id: number) => {
    try {
        const response = apiClient({
            method: "DELETE",
            url: `team/${id}`,
        });

        return response;
    } catch (error) {
        console.log("error", error);
    }
};
