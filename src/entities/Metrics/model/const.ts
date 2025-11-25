import type { MetricKeys } from './types';
import IconExpenses from '@/shared/assets/icons/finance.svg?react';
import IconClicks from '@/shared/assets/icons/click.svg?react';
import IconCPC from '@/shared/assets/icons/cpc.svg?react';
import IconCPA from '@/shared/assets/icons/cpa.svg?react';

export const titleMap: Record<MetricKeys, string> = {
  expenses: 'Расходы',
  clicks: 'Клики',
  cpc: 'CPC',
  cpa: 'CPA',
};

export const iconMetricsMap: Record<MetricKeys, React.FC> = {
  expenses: IconExpenses,
  clicks: IconClicks,
  cpc: IconCPC,
  cpa: IconCPA,
};
