import IconCalendar from '@/shared/assets/icons/calendar.svg'
import IconOffers from'@/shared/assets/icons/offers.svg'
import IconFinance from '@/shared/assets/icons/finance.svg'
import IconMedia from '@/shared/assets/icons/media.svg'
import type { FilterItem } from './types'


export const FilterList: FilterItem[] = [
    {
        key: 'date',
        label: 'Выберите дату',
        icon: IconCalendar,
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
        icon: IconOffers,
        options: [ 
            {
                label: "оффер",
                value: "оффер"
            },
            {
                label: "оффер",
                value: "оффер"
            },
            {
                label: "оффер",
                value: "оффер"
            }
        ]
    },
        {
        key: 'currency',
        label: 'USD',
        icon: IconFinance,
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
        icon: IconMedia,
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