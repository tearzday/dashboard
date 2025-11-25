import { StatusBadge } from '@/shared/ui';
import type { StatusBadgeType } from '@/shared/ui/StatusBadge/const';
import IconMore from '@/shared/assets/icons/more.svg';
import cls from './StatusCell.module.scss';

interface StatusCellProps {
  status: StatusBadgeType;
}

export const StatusCell = ({ status }: StatusCellProps) => {
  return (
    <div className={cls.container}>
      <StatusBadge status={status} />
      <img src={IconMore} alt="Icon more" />
    </div>
  );
};
