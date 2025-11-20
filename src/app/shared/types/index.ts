export interface TableHeader {
    key: string;
    label: string;
    checkbox?: boolean;
}

export interface OffersData {
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