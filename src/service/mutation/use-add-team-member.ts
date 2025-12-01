import { toast } from "sonner";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateTeam } from "../queries/api";

export const useAddTeamMember = (setOpen?: (open: boolean) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: CreateTeam,

        onSuccess: (response: any) => {
            if (response) {
                toast.success("Team Member created");
                queryClient.invalidateQueries({
                    queryKey: ["teams"],
                });

                if (setOpen) {
                    setOpen(false);
                }
            } else {
                toast.error("Creating member Failed", {
                    description:
                        response.message?.split("_").join(" ").toUpperCase() ||
                        " failed to create member",
                });
            }
        },

        onError: (error) => {
            toast("Creating member failed", {
                description:
                    (error as any)?.response?.data?.message ||
                    "Sorry something went wrong",
            });
        },
    });
};
