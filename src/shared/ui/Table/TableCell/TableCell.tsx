import type { FC, PropsWithChildren } from 'react';
import cls from './TableCell.module.scss'
import SortIcon from '@/shared/assets/icons/sort-icon.svg'

interface TableCellProps {
    id?: string;
    isHeader?: boolean;
    checkbox?: boolean;
    onClick?: (key: string) => void
}

export const TableCell: FC<PropsWithChildren<TableCellProps>> = ({children, id, isHeader = false, checkbox, onClick}) => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag className={cls.cell}>
      {checkbox && <input type="checkbox" />}
      <span onClick={() => onClick?.(id ? id : '')}>
        {children}
        {isHeader && <img src={SortIcon} alt='Sort icon' />}
      </span>
    </CellTag>
  )
}
