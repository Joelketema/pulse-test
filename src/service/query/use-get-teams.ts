import { useQuery } from "@tanstack/react-query";
import { GetTeams } from "../queries/api";

export const useGetTeams = (search?: string) => {
    console.log(search);
    return useQuery({
        queryKey: ["teams", search],
        queryFn: () => GetTeams(search),
        staleTime: 5 * 60 * 1000,
    });
};
