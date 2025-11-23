import type { MetricsData } from "@/entities/Metrics/model/types";
import type { OfferData } from "@/entities/Offers/model/types";

export interface IDashboardData {
    currentMetrics:  MetricsData,
    offers: OfferData[]
}