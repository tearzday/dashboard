export interface MetricData {
    value: number,
    change: number,
    changeType: 'increase' | 'decrease',
    previousValue: number
}

export type MetricKeys = "expenses" | "clicks" | "cpc" | "cpa";

export interface MetricsData {
    expenses: MetricData,
    clicks: MetricData,
    cpa: MetricData,
    cpc: MetricData
}