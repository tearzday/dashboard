export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterItem {
  key: string;
  label: string;
  icon: string;
  options: FilterOption[];
}

export interface CurrentFilter {
    key: string;
    option: FilterOption
}