import { memo, type FC, type PropsWithChildren } from 'react';
import cls from './TableCell.module.scss'
import SortIcon from '@/shared/assets/icons/sort-icon.svg'
import { Typography } from '../../Typography/Typography';
import { Checkbox } from '../../Checkbox/Checkbox';
import { TypographyTheme, TypographyVariant } from '../../Typography/const';

interface TableCellProps {
    id?: string;
    isHeader?: boolean;
    onClick?: (key: string) => void;
    checkbox?: boolean;
    checked?: boolean;
    setChecked?: (checked: boolean) => void;
}

export const TableCellComponent: FC<PropsWithChildren<TableCellProps>> = ({children, id, isHeader = false, onClick, checkbox, checked, setChecked}) => {
  const CellTag = isHeader ? 'th' : 'td';

  return (
    <CellTag className={cls.cell}>
          {isHeader ? 
          <div className={cls.container}>
            {(checkbox && setChecked) && <Checkbox checked={checked} onChange={setChecked}/>}
            <div className={cls.text} onClick={() => onClick?.(id ? id : '')}>
              <Typography variant={TypographyVariant.BODY1} theme={TypographyTheme.ADDITIONAL}>{children}</Typography>
              <img src={SortIcon} alt='Sort icon'/>
            </div>
          </div>
          : children
          }
    </CellTag>
  )
}

export const TableCell = memo(TableCellComponent)
