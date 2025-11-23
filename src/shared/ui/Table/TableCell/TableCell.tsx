import type { FC, PropsWithChildren } from 'react';
import cls from './TableCell.module.scss'
import SortIcon from '@/shared/assets/icons/sort-icon.svg'

interface TableCellProps {
    isHeader?: boolean;
    checkbox?: boolean;
}

export const TableCell: FC<PropsWithChildren<TableCellProps>> = ({children, isHeader = false, checkbox}) => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag className={cls.cell}>
      {checkbox && <input type="checkbox" />}
      {children}
      {isHeader && <img src={SortIcon} alt='Sort icon'/>}
    </CellTag>
  )
}
