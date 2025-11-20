import type { CardInfoItem, TableHeader } from "../types";

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

export const CardInfoData: CardInfoItem[] = [
    {
        title: 'Дата запуска',
        value: '15.06.2025'
    },
    {
        title: 'Направление',
        value: 'E-Commerce'
    },
    {
        title: 'Объект',
        value: 'App'
    },
    {
        title: 'Цель',
        value: 'CPA'
    },
    {
        title: 'Трекер',
        value: 'AppsFlyer'
    },
    {
        title: 'Гео',
        value: 'RU, UA, KZ'
    }
]