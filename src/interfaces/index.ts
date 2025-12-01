type ApiMethods = "GET" | "POST" | "PUT" | "DELETE";

export interface ApiClient<T> {
    method: ApiMethods;
    url: string;
    data?: T;
}

export interface IFilter {
    status: string;
    priority: string;
    search: string;
}
