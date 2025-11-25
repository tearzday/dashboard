import FlagUK from '@/shared/assets/flags/uk.svg';
import FlagtTuvalu from '@/shared/assets/flags/tuvalu.svg';
import FlagRussia from '@/shared/assets/flags/russia.svg';

import type { WalletsItemData } from './types';

export const WalletsData: WalletsItemData[] = [
  {
    currency: 'USD',
    value: '152,243',
    flag: {
      src: FlagUK,
      alt: 'Flag UK',
    },
  },
  {
    currency: 'EUR',
    value: '322,243',
    flag: {
      src: FlagtTuvalu,
      alt: 'Flag Tuvalu',
    },
  },
  {
    currency: 'RUB',
    value: '0',
    flag: {
      src: FlagRussia,
      alt: 'Flag Russia',
    },
  },
];
