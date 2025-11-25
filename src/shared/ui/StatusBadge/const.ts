import { TypographyTheme } from '@/shared/ui';

export enum StatusBadgeType {
  ACTIVE = 'active',
  PAUSED = 'paused',
  STOPPED = 'stopped',
}

export const StatusBadgeValue: Record<StatusBadgeType, string> = {
  [StatusBadgeType.ACTIVE]: 'Активный',
  [StatusBadgeType.PAUSED]: 'На паузе',
  [StatusBadgeType.STOPPED]: 'Остановлен',
};

export const StatusBadgeTextColor: Record<StatusBadgeType, TypographyTheme> = {
  [StatusBadgeType.ACTIVE]: TypographyTheme.SUCCESS,
  [StatusBadgeType.PAUSED]: TypographyTheme.WARNING,
  [StatusBadgeType.STOPPED]: TypographyTheme.ERROR,
};
