import { toast } from "sonner";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptJob } from "../queries/api";
import { BaseResponse } from "@/common/interfaces/BaseResponse";
import { useNavigate, useParams } from "react-router-dom";

export const useAcceptRequest = (setOpen?: (open: boolean) => void) => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: acceptJob,

        onSuccess: (response: BaseResponse<object>) => {
            if (response.status === 200 || response.status === 205) {
                toast.success("Job accepted");
                queryClient.invalidateQueries({
                    queryKey: ["mine-jobs"],
                });
                queryClient.invalidateQueries({
                    queryKey: ["my-job-detail"],
                });
                if (setOpen) {
                    setOpen(false);
                }
            } else {
                toast.error("job accepting Failed", {
                    description:
                        response.message?.split("_").join(" ").toUpperCase() ||
                        " failed to accept  job",
                });
            }
        },

        onError: (error) => {
            toast("Job accepting Failed", {
                description:
                    (error as any)?.response?.data?.message ||
                    "Sorry something went wrong",
            });
        },
    });
};
