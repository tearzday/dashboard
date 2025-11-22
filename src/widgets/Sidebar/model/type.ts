import type { FC, SVGProps } from "react";
import type { SidbarItemVariant } from "../ui/SidebarItem/const";

export interface ISidebarItem {
  href: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: SidbarItemVariant
}

export interface ISidebarSection {
  title: string;
  items: ISidebarItem[];
}
