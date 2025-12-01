import { AxiosInstance, AxiosResponse } from "axios";

export const apiInterceptors = (apiClient: AxiosInstance) => {
    apiClient.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};
