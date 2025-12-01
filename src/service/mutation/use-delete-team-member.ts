import { toast } from "sonner";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { DeleteTeamMember } from "../queries/api";

export const useDeleteTeamMember = (setOpen?: (open: boolean) => void) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: DeleteTeamMember,

        onSuccess: (response: any) => {
            if (response) {
                toast.success("Team Member deleted");
                queryClient.invalidateQueries({
                    queryKey: ["teams"],
                });

                if (setOpen) {
                    setOpen(false);
                }
            } else {
                toast.error("Deleting member Failed", {
                    description:
                        response.message?.split("_").join(" ").toUpperCase() ||
                        " failed to create member",
                });
            }
        },

        onError: (error) => {
            toast("Deleting member failed", {
                description:
                    (error as any)?.response?.data?.message ||
                    "Sorry something went wrong",
            });
        },
    });
};
