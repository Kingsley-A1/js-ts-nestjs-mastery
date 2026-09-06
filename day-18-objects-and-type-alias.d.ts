export type ApiResponse<T> = {
    success: boolean;
    data: T;
    message: string;
    statusCode: number;
    timestamp: string;
};
export type PaginatedResult<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNextPage: boolean;
};
export type MemoryCache = {
    cacheId: number;
    [key: string]: string | number | boolean;
};
//# sourceMappingURL=day-18-objects-and-type-alias.d.ts.map