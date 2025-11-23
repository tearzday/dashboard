import type { MetricsData, OfferData } from "@/shared/types";

export interface IDashboardData {
    currentMetrics:  MetricsData,
    offers: OfferData[]
}