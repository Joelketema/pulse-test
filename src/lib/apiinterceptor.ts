import { AxiosInstance, AxiosResponse } from "axios";
import { toast } from "sonner";

export const apiInterceptors = (apiClient: AxiosInstance) => {
    apiClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            console.log("error", error);
            if (error.status === 404) {
                throw error.response.data.error;
            }
            toast.error(error?.message, {
                id: "error-toast",
                duration: 4000,
            });
            return Promise.reject(error);
        }
    );
};
