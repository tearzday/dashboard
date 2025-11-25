import type { SidebarSectionType } from './type';
import GoogleIcon from '@/shared/assets/platforms/Google.svg?react';
import TikTokIcon from '@/shared/assets/platforms/TikTok.svg?react';
import MenuIcon from '@/shared/assets/icons/menu.svg?react';
import OffersIcon from '@/shared/assets/icons/offers.svg?react';
import AccountsIcon from '@/shared/assets/icons/accounts.svg?react';
import FinanceIcon from '@/shared/assets/icons/finance.svg?react';
import { SidbarItemVariant } from '../ui/SidebarItem/const';

const MenuData: SidebarSectionType = {
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
    },
  ],
};

const AdvertisingSpacesData: SidebarSectionType = {
  title: 'РЕКЛАМНЫЕ ПЛОЩАДКИ',
  items: [
    {
      href: '/google-ads',
      label: 'Google Ads',
      icon: GoogleIcon,
    },
    {
      href: '/tiktok-ads',
      label: 'TikTok Ads',
      icon: TikTokIcon,
    },
  ],
};

const OffersData: SidebarSectionType = {
  title: 'ОФФЕРЫ',
  items: [
    {
      href: '/fff',
      label: 'Стулья 2.0',
      icon: OffersIcon,
    },
    {
      href: '/fff',
      label: 'Продажа мебели',
      icon: OffersIcon,
    },
  ],
};

export const SidebarData: SidebarSectionType[] = [
  MenuData,
  AdvertisingSpacesData,
  OffersData,
];
