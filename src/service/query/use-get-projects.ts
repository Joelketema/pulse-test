import { useQuery } from "@tanstack/react-query";
import { GetProjects } from "../queries/api";

export const useGetProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: GetProjects,
        staleTime: 5 * 60 * 1000,
    });
};
