import { type FC, type PropsWithChildren } from 'react';
import cls from './TableRow.module.scss';

export const TableRow: FC<PropsWithChildren> = ({ children }) => {
  return <tr className={cls.row}>{children}</tr>;
};
