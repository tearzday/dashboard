import type { TableHeader } from "@/shared/types";
import IconGoogle from '@/shared/assets/platforms/Google.svg?react'
import IconGoogleAds from '@/shared/assets/platforms/Google Ads.svg?react'
import IconTelegram from '@/shared/assets/platforms/Telegram.svg?react'
import IconTikTok from '@/shared/assets/platforms/TikTok.svg?react'
import IconVK from '@/shared/assets/platforms/VK.svg?react'
import IconHuaweiAds from '@/shared/assets/platforms/HuaweiAds.svg?react'

export const TableHeaderOffer: TableHeader[] = [
    {
        key: "offer-name",
        label: "Название оффера",
        checkbox: true,
    },
    {
        key: "platfroms",
        label: "Площадки",
    },
    {
        key: "date-start",
        label: "Дата запуска",
    },
    {
        key: "balance",
        label: "Баланс",
    },
    {
        key: "spend",
        label: "Расход",
    },
    {
        key: "status",
        label: "Статус",
    },
]

export const platformIconsMap: Record<string, React.FC> = {
  google: IconGoogle,
  googleads: IconGoogleAds,
  telegram: IconTelegram,
  tiktok: IconTikTok,
  vk: IconVK,
  huaweiads: IconHuaweiAds,
}