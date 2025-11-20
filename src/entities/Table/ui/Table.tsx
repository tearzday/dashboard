import type { OfferData, TableHeader } from "@/shared/types";
import cls from './Table.module.scss'
import { TableCell } from "./TableCell/TableCell";
import { TableRow } from "./TableRow/TableRow";


interface TabelProps {
    header: TableHeader[];
    data: OfferData[];
}

export const Table = ({header, data}: TabelProps) => {
  return (
    <table className={cls.table}>
      <thead className={cls.thead}>
        <TableRow>
            {header.map((col) => (
                <TableCell key={col.key} value={col.label} isHeader checkbox={col.checkbox}/>
            ))}
        </TableRow>
      </thead>

      <tbody className={cls.tbody}>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell key={item.id} value={item.name}/>
            <TableCell key={item.id} value={'-'}/>
            <TableCell key={item.id} value={item.launchDate}/>
            <TableCell key={item.id} value={item.balance}/>
            <TableCell key={item.id} value={item.spent}/>
            <TableCell key={item.id} value={item.status}/>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

