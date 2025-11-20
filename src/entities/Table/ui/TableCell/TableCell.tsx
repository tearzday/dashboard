import cls from './TableCell.module.scss'
import SortIcon from '@/shared/assets/icons/sort-icon.svg'

interface TableCellProps {
    key: string;
    value: string | number;
    isHeader?: boolean;
    checkbox?: boolean;
}

export const TableCell = ({value, isHeader = false, checkbox}: TableCellProps) => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag className={cls.cell}>
      {checkbox && <input type="checkbox" />}
      {value}
      {isHeader && <img src={SortIcon} alt='Sort icon'/>}
    </CellTag>
  )
}
