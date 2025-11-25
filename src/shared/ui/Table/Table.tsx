import type { TableHeader } from "@/shared/types";
import cls from './Table.module.scss'
import { TableCell } from "./TableCell/TableCell";
import { TableRow } from "./TableRow/TableRow";
import { type ReactNode } from "react";
import { TableRounded } from "./const";


interface TabelProps {
    header: TableHeader[];
    data: ReactNode[][];
    headerClick?: (key: string) => void;
    chekedAll?: boolean;
    setCheckedAll?: (checked: boolean) => void;
    rounded?: TableRounded
}

export const Table = ({header, data, headerClick, chekedAll, setCheckedAll, rounded = TableRounded.LG}: TabelProps) => {
    return (
    <div className={`${cls.container} ${cls[rounded]}`}>
      <table className={cls.table}>
        <thead className={cls.thead}>
          <TableRow>
              {header.map((col) => (
                  <TableCell key={col.key} id={col.key} isHeader checkbox={col.checkbox} onClick={headerClick} checked={chekedAll} setChecked={setCheckedAll}>{col.label}</TableCell>
              ))}
          </TableRow>
        </thead>

        <tbody className={cls.tbody}>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

