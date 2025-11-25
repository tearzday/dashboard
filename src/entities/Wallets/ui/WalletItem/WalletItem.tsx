import { TypographyTheme, TypographyVariant, Typography } from '@/shared/ui';
import cls from './WalletItem.module.scss';
import type { WallteFlag } from '../../model/types';

interface WalletItemProps {
  flag: WallteFlag;
  currency: string;
  value: string;
}

export const WalletItem = ({ flag, currency, value }: WalletItemProps) => {
  return (
    <div className={cls.card}>
      <div className={cls.card__header}>
        <img src={flag.src} alt={flag.alt} />
        <Typography theme={TypographyTheme.ADDITIONAL}>{currency}</Typography>
      </div>
      <Typography variant={TypographyVariant.H4}>{value}</Typography>
    </div>
  );
};
