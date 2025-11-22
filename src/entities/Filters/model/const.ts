import IconCalendar from '@/shared/assets/icons/calendar.svg?react'
import IconOffers from'@/shared/assets/icons/offers.svg?react'
import IconFinance from '@/shared/assets/icons/finance.svg?react'
import IconMedia from '@/shared/assets/icons/media.svg?react'
import type { FilterItem } from './types'


export const FilterList: FilterItem[] = [
    {
        key: 'date',
        label: 'Выберите дату',
        options: [ 
            {
                label: "20.11.2025",
                value: "20.11.2025"
            },
            {
                label: "21.11.2025",
                value: "21.11.2025"
            },
            {
                label: "22.11.2025",
                value: "22.11.2025"
            }
        ]
    },
    {
        key: 'offers',
        label: 'Вcе офферы',
        options: [ 
            {
                label: "оффер1",
                value: "оффер1"
            },
            {
                label: "оффер2",
                value: "оффер2"
            },
            {
                label: "оффер3",
                value: "оффер3"
            }
        ]
    },
        {
        key: 'currency',
        label: 'USD',
        options: [ 
            {
                label: "USD",
                value: "USD"
            },
            {
                label: "EUR",
                value: "EUR"
            },
            {
                label: "RUB",
                value: "RUB"
            }
        ]
    },
    {
        key: 'platforms',
        label: 'Все площадки',
        options: [ 
            {
                label: "GoogleAds",
                value: "GoogleAds"
            },
            {
                label: "TikTok Ads",
                value: "TikTok Ads"
            },
            {
                label: "Yandex Metrica",
                value: "Yandex Metrica"
            }
        ]
    }
]

export const iconMap = {
  date: IconCalendar,
  offers: IconOffers,
  currency: IconFinance,
  platforms: IconMedia,
}