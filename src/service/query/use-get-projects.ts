import { useQuery } from "@tanstack/react-query";
import { GetProjects } from "../queries/api";
import { IFilter } from "@/interfaces";

export const useGetProjects = (filters: IFilter) => {
    return useQuery({
        queryKey: ["projects", filters],
        queryFn: () => GetProjects(filters),
        staleTime: 5 * 60 * 1000,
    });
};
