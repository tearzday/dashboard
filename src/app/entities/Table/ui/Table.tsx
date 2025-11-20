import type { OffersData, TableHeader } from "@/app/shared/types";
import cls from './Table.module.scss'

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
                <th key={col.key}>
                    {col.checkbox ? <input type="checkbox" /> : null}
                    {col.label}
                </th>
            ))}
        </tr>
      </thead>

      <tbody className={cls.tbody}>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{}</td>
            <td>{item.launchDate}</td>
            <td>{item.balance}</td>
            <td>{item.spent}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

