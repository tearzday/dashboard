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

export interface CardInfoItem {
    title: string,
    value: string,
}

export interface SelectorOption {
  label: string;
  value: string;
}