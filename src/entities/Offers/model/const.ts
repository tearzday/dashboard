import type { TableHeader } from "@/shared/types";
import IconGoogle from '@/shared/assets/platforms/Google.svg?react'
import IconGoogleAds from '@/shared/assets/platforms/Google Ads.svg?react'
import IconTelegram from '@/shared/assets/platforms/Telegram.svg?react'
import IconTikTok from '@/shared/assets/platforms/TikTok.svg?react'
import IconVK from '@/shared/assets/platforms/VK.svg?react'
import IconHuaweiAds from '@/shared/assets/platforms/HuaweiAds.svg?react'
import type { PlatformData } from "./types";

export const TableHeaderOffer: TableHeader[] = [
    {
        key: "name",
        label: "Название оффера",
        checkbox: true,
    },
    {
        key: "platforms",
        label: "Площадки",
    },
    {
        key: "launchDate",
        label: "Дата запуска",
    },
    {
        key: "balance",
        label: "Баланс",
    },
    {
        key: "spent",
        label: "Расход",
    },
    {
        key: "status",
        label: "Статус",
    },
]

export const TableHeaderPlatforms: TableHeader[] = [
    {
        key: "platforms",
        label: "Площадки",
    },
    {
        key: "balance",
        label: "Баланс",
    },
    {
        key: "accounts",
        label: "Аккаунтов",
    },
    {
        key: "avgcpc",
        label: "AVG CPC",
    },
    {
        key: "avgcpa",
        label: "AVG CPA",
    },
]

export const TablePlatformsData: PlatformData[] = [
    {
        id: "google",
        name: "Google",
        balance: 15423.00,
        accounts: 12,
        avgcpc: 0.32,
        avgcpa: 5.32
    },
    {
        id: "vk",
        name: "VK Реклама",
        balance: 15423.00,
        accounts: 10,
        avgcpc: 0.11,
        avgcpa: 2.53
    }
]

export const platformIconsMap: Record<string, React.FC> = {
  google: IconGoogle,
  googleads: IconGoogleAds,
  telegram: IconTelegram,
  tiktok: IconTikTok,
  vk: IconVK,
  huaweiads: IconHuaweiAds,
}