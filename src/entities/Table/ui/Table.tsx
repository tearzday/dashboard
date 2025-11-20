import type { OffersData, TableHeader } from "@/shared/types";
import cls from './Table.module.scss'
import { TableCell } from "./TableCell/TableCell";


interface TabelProps {
    header: TableHeader[];
    data: OffersData[];
}

export const Table = ({header, data}: TabelProps) => {
  return (
    <table className={cls.table}>
      <thead className={cls.thead}>
        <tr>
            {header.map((col) => (
                <TableCell key={col.key} value={col.label} isHeader checkbox={col.checkbox}/>
            ))}
        </tr>
      </thead>

      <tbody className={cls.tbody}>
        {data.map((item) => (
          <tr key={item.id}>
            <TableCell key={item.id} value={item.name}/>
            <TableCell key={item.id} value={'-'}/>
            <TableCell key={item.id} value={item.launchDate}/>
            <TableCell key={item.id} value={item.balance}/>
            <TableCell key={item.id} value={item.spent}/>
            <TableCell key={item.id} value={item.status}/>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

