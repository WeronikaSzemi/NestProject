export interface ShopResponse {
    isSuccess: boolean;
    id?: string;
}

export interface GetBasketStatsResponse {
    itemInBasketAvgPrice: number;
    basketAvgTotalPrice: number;
}