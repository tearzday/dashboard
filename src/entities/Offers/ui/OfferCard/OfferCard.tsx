import { Card, Typography, TypographyVariant, StatusBadge } from '@/shared/ui';
import { Platforms } from '../Platforms/Platforms';
import cls from './OfferCard.module.scss';
import type { OfferData } from '../../model/types';
import { moneyConverter } from '@/shared/utils/moneyConverter';

export interface OfferCardProps {
  offer: OfferData;
}

export const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <Card className={cls.card}>
      <Typography variant={TypographyVariant.H2}>{offer.name}</Typography>
      <StatusBadge status={offer.status} />
      <Platforms platforms={offer.platforms} />

      <div className={cls.col}>
        <div className={cls.row}>
          <Typography>Дата запуска:</Typography>
          <Typography>{offer.launchDate}</Typography>
        </div>

        <div className={cls.row}>
          <Typography>Баланс:</Typography>
          <Typography>{moneyConverter(offer.balance)}</Typography>
        </div>

        <div className={cls.row}>
          <Typography>Расход:</Typography>
          <Typography>{moneyConverter(offer.spent)}</Typography>
        </div>
      </div>
    </Card>
  );
};
