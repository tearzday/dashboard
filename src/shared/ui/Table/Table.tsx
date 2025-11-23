import type { TableHeader } from "@/shared/types";
import cls from './Table.module.scss'
import { TableCell } from "./TableCell/TableCell";
import { TableRow } from "./TableRow/TableRow";
import type { ReactNode } from "react";


interface TabelProps {
    header: TableHeader[];
    data: ReactNode[][];
    headerClick?: (key: string) => void
}

export const Table = ({header, data, headerClick}: TabelProps) => {
  return (
    <table className={cls.table}>
      <thead className={cls.thead}>
        <TableRow>
            {header.map((col) => (
                <TableCell key={col.key} id={col.key} isHeader checkbox={col.checkbox} onClick={headerClick}>{col.label}</TableCell>
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
  );
}

