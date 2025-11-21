import type { ISidebarSection } from "./type";
import GoogleIcon from "@/shared/assets/platforms/Google.svg"
import TikTokIcon from "@/shared/assets/platforms/TikTok.svg"
import MenuIcon from "@/shared/assets/icons/menu.svg"
import OffersIcon from "@/shared/assets/icons/offers.svg"
import AccountsIcon from "@/shared/assets/icons/accounts.svg"
import FinanceIcon from "@/shared/assets/icons/finance.svg"
import { SidbarItemVariant } from "../ui/SidebarItem/const";

const MenuData: ISidebarSection = {
    title: 'ОСНОВНОЕ МЕНЮ',
    items: [
        {
            href: '/',
            label: 'Главная',
            icon: MenuIcon,
            variant: SidbarItemVariant.BIG,
        },
        {
            href: '/offers',
            label: 'Офферы',
            icon: OffersIcon,
            variant: SidbarItemVariant.BIG,
        },
        {
            href: '/accounts',
            label: 'Аккаунты',
            icon: AccountsIcon,
            variant: SidbarItemVariant.BIG,
        },
        {
            href: '/finances',
            label: 'Финансы',
            icon: FinanceIcon,
            variant: SidbarItemVariant.BIG,
        }
    ]
}

const AdvertisingSpacesData: ISidebarSection = {
    title: 'РЕКЛАМНЫЕ ПЛОЩАДКИ',
    items: [
        {
            href: '/google-ads',
            label: 'Google Ads',
            icon: GoogleIcon
        },
        {
            href: '/tiktok-ads',
            label: 'TikTok Ads',
            icon: TikTokIcon
        }
    ]
}

const OffersData: ISidebarSection = {
    title: 'ОФФЕРЫ',
    items: [
        {
            href: '/',
            label: 'Стулья 2.0',
            icon: OffersIcon
        },
        {
            href: '/offers',
            label: 'Продажа мебели',
            icon: OffersIcon
        }
    ]
}

export const SidebarData: ISidebarSection[] = [MenuData, AdvertisingSpacesData, OffersData]