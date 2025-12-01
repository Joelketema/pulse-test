import { API_URL } from "@/const";
import { ApiClient } from "@/interfaces";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { apiInterceptors } from "./apiinterceptor";

export const apiClient = async <T, R>(
    data: ApiClient<T>
): Promise<AxiosResponse<R>> => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: `${API_URL}/api/${data?.url}`,
        timeout: 30000,
    });

    apiInterceptors(axiosInstance);

    const options = {
        method: data?.method,
        data: data.data,
    } as any;

    return axiosInstance.request<R>(options);
};
