import {
  Card,
  Icon,
  IconVariant,
  Typography,
  TypographyVariant,
} from '@/shared/ui';
import cls from './PlatformCard.module.scss';
import { platformIconsMap } from '../../model/const';
import type { PlatformData } from '../../model/types';
import { moneyConverter } from '@/shared/utils/moneyConverter';

export interface PlatformCardProps {
  platform: PlatformData;
}

export const PlatformCard = ({ platform }: PlatformCardProps) => {
  return (
    <Card className={cls.card}>
      <div className={cls.name}>
        <Icon
          icon={platformIconsMap[platform.id]}
          variant={IconVariant.CIRCLE}
        />
        <Typography variant={TypographyVariant.H2}>{platform.name}</Typography>
      </div>

      <div className={cls.row}>
        <Typography>Баланс:</Typography>
        <Typography variant={TypographyVariant.BODY1}>
          {moneyConverter(platform.balance)}
        </Typography>
      </div>

      <div className={cls.row}>
        <Typography>Аккаунты:</Typography>
        <Typography variant={TypographyVariant.BODY1}>
          {platform.accounts}
        </Typography>
      </div>

      <div className={cls.row}>
        <Typography>CPC:</Typography>
        <Typography variant={TypographyVariant.BODY1}>
          {moneyConverter(platform.avgcpc)}
        </Typography>
      </div>

      <div className={cls.row}>
        <Typography>CPA:</Typography>
        <Typography variant={TypographyVariant.BODY1}>
          {moneyConverter(platform.avgcpa)}
        </Typography>
      </div>
    </Card>
  );
};
