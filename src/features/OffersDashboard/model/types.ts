import type { MetricsData } from "@/entities/Metrics/model/types";
import type { OfferData } from "@/shared/types";

export interface IDashboardData {
    currentMetrics:  MetricsData,
    offers: OfferData[]
}