import type { ReactNode } from "react";

export type DataTableColumn<Row> = {
  key: keyof Row | string;
  header: string;
  render?: (row: Row) => ReactNode;
};
export function DataTable<Row>({
  columns,
  getRowKey,
  rows,
}: {
  columns: Array<DataTableColumn<Row>>;
  getRowKey: (row: Row) => string;
  rows: Row[];
}) {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={getRowKey(row)}>
              {columns.map((column) => (
                <td key={String(column.key)}>
                  {column.render
                    ? column.render(row)
                    : String(row[column.key as keyof Row] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
