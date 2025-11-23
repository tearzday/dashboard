export interface PlatformsData {
    id: string;
    name: string;
    color: string;
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

export interface PlatformData {
  id: string;
  name: string;
  balance: number;
  accounts: number;
  avgcpc: number;
  avgcpa: number;
}