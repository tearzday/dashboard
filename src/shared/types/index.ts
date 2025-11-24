export interface TableHeader {
    key: string;
    label: string;
    checkbox?: boolean;
}

export interface CardInfoItem {
    title: string,
    value: string,
}

export interface SelectorOption {
  label: string;
  value: string;
}

export type SortOrder = "asc" | "desc";
