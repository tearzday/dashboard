export interface TableHeader {
    key: string;
    label: string;
    checkbox?: boolean;
}

export interface OfferData {
    id: string;
    name: string;
    status: string;
    launchDate: string;
    balance: number;
    spent: number;
    platforms: PlatformsData[];
}

export interface PlatformsData {
    id: string;
    name: string;
    color: string;
}

export interface MetricData {
    value: number,
    change: number,
    changeType: 'increase' | 'decrease',
    previousValue: number
}

export interface MetricsData {
    expenses: MetricData,
    click: MetricData,
    cpa: MetricData,
    cpc: MetricData
}