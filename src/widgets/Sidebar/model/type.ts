import type { FC, SVGProps } from "react";
import type { SidbarItemVariant } from "../ui/SidebarItem/const";

export interface SidebarItemType {
  href: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: SidbarItemVariant
}

export interface SidebarSectionType {
  title: string;
  items: SidebarItemType[];
}
